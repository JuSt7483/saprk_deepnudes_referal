import { useImageSize } from '@/shared/hooks/useImageSize';
import Konva from 'konva';
import React, { ComponentProps, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Stage, Layer, Line, Rect } from 'react-konva'

import "./DrawCanvas.scss"
import { DrawingTool } from '@/shared/enums/DrawingTool';
import { BrushSize } from '@/shared/enums/BrushSize';

const BrushSizes = {
    [BrushSize.SMALL]: 20,
    [BrushSize.MEDIUM]: 30,
    [BrushSize.BIG]: 40
}

interface CanvasProps {
    imageRef: React.MutableRefObject<HTMLImageElement | null>;
    drawingTool: DrawingTool | null;
    brushSize: BrushSize;
    stageRef: ComponentProps<typeof Stage>['ref'];
}

const DrawCanvas = ({ imageRef, drawingTool = DrawingTool.BRUSH, brushSize, stageRef }: CanvasProps) => {
    const [lines, setLines] = React.useState<{tool: DrawingTool, brushSize: number, points: number[]}[]>([]);
    const isDrawing = React.useRef(false);
    const size = useImageSize(imageRef);
    const cursorRef = useRef<HTMLDivElement | null>(null);


    const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
        isDrawing.current = true;
        const pos = e.target.getStage()?.getPointerPosition();
        if(pos)
        {
            setLines([...lines, { tool: drawingTool!, brushSize: BrushSizes[brushSize], points: [pos.x, pos.y] }]);
        }
    };

    const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage?.getPointerPosition();
        // add point
        if(point)
        {
            setLines((prevLines) => {
                const newLines = [...prevLines];
                const lastLine = newLines[newLines.length - 1];
                if (lastLine) {
                    lastLine.points = lastLine.points.concat([point.x, point.y]);
                    newLines.splice(newLines.length - 1, 1, lastLine);
                }
                return newLines;
            });
        }
    };

    const handleMouseOver = (e: Konva.KonvaEventObject<MouseEvent| TouchEvent>) => {
        if(drawingTool === DrawingTool.BRUSH)
            document.body.style.cursor = "url(/Cursors/green.png), default";
        else 
            document.body.style.cursor = "url(/Cursors/white.png), default";

    }

    const handleMouseLeave = (e: Konva.KonvaEventObject<MouseEvent| TouchEvent>) => {
        document.body.style.cursor = "default";
    }

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    if(!drawingTool) return null;

    return (
        <>
        {/* <div ref={cursorRef} style={{ width: BrushSizes[brushSize], height: BrushSizes[brushSize], background: drawingTool === DrawingTool.BRUSH ? "rgba(53, 230, 54, 0.40)" : "rgba(255, 255, 255, 0.80)" }} className="canvas__cursor"></div> */}
        <Stage
            width={size?.width}
            height={size?.height}
            onTouchMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}

            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className='canvas'
            style={{ position: "absolute" }}
            ref={stageRef}
        >
            <Layer>
                <Rect
                    x={0}
                    y={0}
                    width={size?.width}
                    height={size?.height}
                    globalCompositeOperation='xor'
                    fill={"black"}
                    fillEnabled={false}
                />
                {lines.map((line, i) => (
                    <Line
                        key={i}
                        points={line.points}
                        stroke={line.tool === DrawingTool.BRUSH ? "rgba(53, 230, 54, 1)" : "black"}
                        strokeWidth={line.brushSize}
                        tension={0.5}
                        opacity={line.tool === DrawingTool.ERASER ? 1 : 0.5}
                        lineCap="round"
                        lineJoin="round"
                        tool={line.tool}
                        perfectDrawEnabled={false}
                        globalCompositeOperation={
                            line.tool === DrawingTool.ERASER ? 'destination-out' : 'xor'
                        }
                    />
                ))}
            </Layer>
        </Stage>
        </>

    )
}

export default DrawCanvas
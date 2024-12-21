import { useImageSize } from '@/shared/hooks/useImageSize';
import React, { ComponentProps, useEffect, useRef } from 'react'
import { Stage, Layer, Image, Rect  } from 'react-konva'

import useImage from 'use-image';

import "./ImageCanvas.scss"


interface CanvasProps {
    imageRef: React.MutableRefObject<HTMLImageElement | null>;
    src: string;
    stageRef: ComponentProps<typeof Stage>['ref'];
}

const ImageCanvas = ({ imageRef, src, stageRef }: CanvasProps) => {
    const size = useImageSize(imageRef);
    const [image] = useImage(src);
    const [logoImage] = useImage("/Images/Logo.png");

    return (
        <>
        {/* <div ref={cursorRef} style={{ width: BrushSizes[brushSize], height: BrushSizes[brushSize], background: drawingTool === DrawingTool.BRUSH ? "rgba(53, 230, 54, 0.40)" : "rgba(255, 255, 255, 0.80)" }} className="canvas__cursor"></div> */}
        <Stage
            width={size?.width}
            height={size?.height}
            className='canvas'
            style={{ position: "absolute" }}
            ref={stageRef}
        >
            <Layer>
                <Image
                    image={image}
                    width={size?.width}
                    height={size?.height}
                />
                <Rect
                    x={0}
                    y={size?.height ? size.height - 70 : 0}
                    width={size?.width}
                    // height={size?.height ? size.height * 0.1 : 20}
                    height={70}
                    fill="black"
                    opacity={0.5}
                />
                <Image
                    image={logoImage}
                    width={173}
                    height={51}
                    y={size?.height ? size.height - 70 + (70 - 51) / 2 : 0}
                    x={size?.width ? size?.width - 173 - 10 : 200}
                />
            </Layer>
        </Stage>
        </>

    )
}

export default ImageCanvas
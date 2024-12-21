"use client";

import React, { ComponentProps, useEffect, useRef, useState } from 'react'
import "./UndressGenerator.scss"
import { BoobsSmallIcon, BrushIcon, CheckCirle24Icon, CheckCirle2Icon, CheckCurcleBlackIcon, DownloadIcon, EraserIcon, HangerSmallIcon, HourglassIcon, ImageIcon, ImageIconSmall, InstagramIcon, InstagramIcon2, LipsIcon, LogoSmall, MagicSticOutlinedIcon, RectangleIcon, ReloadIcon, SexManIcon, SexWomanIcon, SpinIcon, StarIcon, TrashIcon } from '../UI/svg'
import BurgerButton from '../UI/primitives/ButtonBurger/ButtonBurger'
import { useModal } from '@/shared/hooks/useModal'
import Navbar from '../Navbar/Navbar'
import Button from '../UI/primitives/Button/Button';
import { message, Progress, Rate, Spin, Upload, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';
import { upload } from '@vercel/blob/client';
import { PutBlobResult } from '@vercel/blob';
import Image from 'next/image';
import SexPosesData from "@/shared/data/sexPoses"
import LingerieData from "@/shared/data/lingerie"
import dynamic from 'next/dynamic';
import { DrawingTool } from '@/shared/enums/DrawingTool';
import { BrushSize } from '@/shared/enums/BrushSize';
import { Stage } from 'react-konva';
import Konva from 'konva';
import { LoadingOutlined } from '@ant-design/icons';
import { downloadURI } from '@/shared/utils/downloadURI';
import ModalRules from '../ModalRules/ModalRules';

enum Tool {
    UNDRESSING = "UNDRESSING",
    SEX_POSES = "SEX_POSES",
    LINGERIE = "LINGERIE"
}

enum ToolSetting {
    AUTO = "AUTO",
    BRUSH = "BRUSH",
    ERASER = "ERASER"
}

enum Sex {
    MEN = "MEN",
    WOMEN = "WOMEN"
}

const DrawCanvas = dynamic(() => import('@/components/DrawCanvas/DrawCanvas'), {
  ssr: false,
});

const ImageCanvas = dynamic(() => import('@/components/ImageCanvas/ImageCanvas'), {
  ssr: false,
});

const UndressGenerator = () => {
    const { openModal } = useModal();
    const [isImageLoading, setIsImageLoading] = useState<boolean>(false);
    const [resultImage, setResultImage] = useState<string>();
    const [isImageProcessing, setIsImageProcessing] = useState<boolean>(false);
    const [isImageProcessingError, setIsImageProcessingError] = useState<boolean>(false);
    const [percent, setPercent] = useState<number>(0);
    const [toolSelected, setToolSelected] = useState<Tool | "">(Tool.UNDRESSING);
    const [isSettingsOpened, setIsSettingsOpened] = useState<boolean>(false);
    const [toolSettingSelected, setToolSettingSelected] = useState<ToolSetting>(ToolSetting.AUTO);
    const [brushSize, setBrushSize] = useState<BrushSize>(BrushSize.MEDIUM);
    const [eraserSize, setEraserSize] = useState<BrushSize>(BrushSize.MEDIUM);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);
    const [sexSelector, setSexSelector] = useState<Sex>(Sex.WOMEN);
    const [sexPoseIndex, setSexPoseIndex] = useState<number>(0);
    const [lingerieIndex, setLingerieIndex] = useState<number>(0);

    const imageRef = useRef<HTMLImageElement | null>(null);
    // const resultImageRef = useRef<HTMLImageElement | null>(null);
    const stageRefDraw: ComponentProps<typeof Stage>['ref'] = useRef(null);
    const stageRefResult: ComponentProps<typeof Stage>['ref'] = useRef(null);


    useEffect(() => {
        openModal(<ModalRules />)
    }, [])

    const props: UploadProps = {
        name: 'file',
        className: "generator-start__upload",
        accept: "image/heic, image/png, image/jpeg, image/webp",
        maxCount: 1,
        showUploadList: false,
        action: async (file: RcFile) => {
            try {
                setIsImageLoading(true);
                const newBlob = await upload(file.name, file, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
        
                setBlob(newBlob);
            } catch(_) {
                setIsImageLoading(false);
            }
            return ""
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const handleGeneratorOutClick = () => {
        if(isSettingsOpened)
            return setIsSettingsOpened(false);
        return;
    }

    const onFetchSuccess = async (response: Response) => {
        const text = await response.text();
        try {
            const data = JSON.parse(text)
            // Ошибка
            throw new Error;
        } catch (e) {
            if(text)
            {
                setIsImageProcessing(false)
                setResultImage(`data:image/png;base64,${text}`);
            }
        }
    }

    const onFetchError = (data: any) => {
        setIsImageProcessing(false)
        setIsImageProcessingError(true);
        console.error(data)
    }

    const handleClickUndress = async () => {
        setIsImageProcessing(true)
        switch(toolSelected)
        {
            case Tool.UNDRESSING:
                const mask = getMaskData() || "";
                if(toolSettingSelected === ToolSetting.AUTO || !mask)
                {
                    fetch("/api/generator/undress/createNude", {
                        method: "POST",
                        body: JSON.stringify({
                            imageUrl: blob?.url
                        })
                    })
                    .then(onFetchSuccess)
                    .catch(onFetchError)
                    // Модуль без маски gen/createNude
                }
                else if(mask)
                {
                    // Модуль с маской gen/createNudewithMask
                    console.log(mask)
                    fetch("/api/generator/undress/createNudewithMask", {
                        method: "POST",
                        body: JSON.stringify({
                            imageUrl: blob?.url,
                            mask
                        })
                    })
                    .then(onFetchSuccess)
                    .catch(onFetchError)
                }
                break;

            case Tool.SEX_POSES:
                // Посылаем на этот URL gen/faceSwap POST запрос
                // где original - base64 оригинальное фотки модуля
                // а userFace - лицо пользователя
                fetch("/api/generator/undress/faceSwap", {
                    method: "POST",
                    body: JSON.stringify({
                        userFace: blob?.url,
                        originalIndex: sexPoseIndex
                    })
                })
                .then(onFetchSuccess)
                .catch(onFetchError)
                break;

            case Tool.LINGERIE:
                // **Посылаем на этот URL [gen/](gen/faceSwap)createSlace POST запрос**

                // ›**где image - base64 оригинальное фотка, prompt - описание**
                fetch("/api/generator/undress/createSlace", {
                    method: "POST",
                    body: JSON.stringify({
                        image: blob?.url,
                        originalIndex: lingerieIndex
                    })
                })
                .then(onFetchSuccess)
                .catch(onFetchError)
                break;
        }
        
        // setIsImageProcessing(true);
        // const timeout = setTimeout(() => {
        //     setResultImage(blob?.url);
        //     setIsImageProcessing(false);
        // }, 10 * 1000)

        // return () => {
        //     clearTimeout(timeout)
        // }
    }

    const handleSave = () => {
        if(stageRefResult.current)
            downloadURI(stageRefResult.current.toDataURL(), "deep-nudes.png")
    }

    const handleRetry = () => {
        setIsImageProcessingError(false);
        handleClickUndress()
    }

    const getMaskData = () => {
        const layer = stageRefDraw.current?.getLayers()[0];
        if(!layer) return null;

        layer.find('Line').forEach(line => {
            const lineElement = line as Konva.Line;
            const tool = lineElement.getAttr("tool") as DrawingTool
            
            lineElement.globalCompositeOperation("source-over");
            
            if(tool === DrawingTool.BRUSH)
            {
                lineElement.stroke('white');
                lineElement.opacity(1);
            }
            else {
                lineElement.stroke('black');
                lineElement.opacity(1);
            }
        });

        const rectElement = layer.findOne('Rect') as Konva.Rect;

        rectElement.fillEnabled(true);
        const maskData = layer.draw()!.toDataURL();

        layer.find('Line').forEach(line => {
            const lineElement = line as Konva.Line;

            const tool = lineElement.getAttr("tool") as DrawingTool
            
            if(tool === DrawingTool.BRUSH)
            {
                lineElement.globalCompositeOperation("xor");
                lineElement.stroke("rgba(53, 230, 54, 1)");
                lineElement.opacity(0.5);
            }
            else {
                lineElement.globalCompositeOperation("destination-out");
                lineElement.stroke('black');
                lineElement.opacity(1);
            }
        });
        rectElement.fillEnabled(false);
        layer.draw();

        return maskData;
    }

    const handleReset = () => {
        setResultImage("");
        setBlob(null);
        setSexSelector(Sex.WOMEN);
        setToolSelected(Tool.UNDRESSING);
    }

    const handleToolClick = (tool: Tool) => {
        if(isImageLoading) return;
        if(tool === toolSelected)
        {
            setIsSettingsOpened((prev) => !prev);
            return;
        }
        if(!isSettingsOpened)
            setIsSettingsOpened(true);
        setToolSelected(tool)
        return;
    }

    useEffect(() => {
        if (!isImageLoading) {
            setPercent(0);
            return;
        }

        const duration = 10 * 1000;
        const interval = 100;
        const increment = (100 * interval) / duration;

        const timer = setInterval(() => {
            setPercent(prev => {
                const nextValue = Math.min(prev + increment, 100);
                return nextValue;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [isImageLoading]);

    useEffect(() => {
        if (!isImageProcessing) {
            setPercent(0);
            return;
        }

        const duration = 10 * 1000;
        const interval = 100;
        const increment = (100 * interval) / duration;

        const timer = setInterval(() => {
            setPercent(prev => {
                const nextValue = Math.min(prev + increment, 100);
                return nextValue;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [isImageProcessing]);

    return (
        <div className={`generator ${!blob ? "generator--tablet-fullheight" : ""}`} onClick={() => handleGeneratorOutClick()}>
            {isImageLoading &&
                <div className="generator-loader">
                    <Spin size='large' indicator={<SpinIcon />} />
                    <div className="generator-loader__text">
                        Image loading, wait
                    </div>
                    <Progress size={{ width: 360, height: 10 }} percent={percent} showInfo={false} trailColor='#3A3D34' strokeColor={"linear-gradient(223deg, #4E9F0D -3.22%, #0BBC87 100%)"}/>
                </div>
            }
            {blob && isImageProcessing &&
                <>
                    <div className={`generator-header`}>
                        <div className={`generator-header__main`}>
                            <LogoSmall />
                        </div>
                        <BurgerButton variant="inverted" onClick={() => { openModal(<Navbar />) }} className='generator-header__burger' />
                    </div>
                    <div className="generator-processing">
                        <Image
                            alt="Uploaded Image"
                            src={blob ? blob.url : ""}
                            width={0}
                            height={0}
                            className='generator-processing__image'
                            sizes='100vw'
                            ref={imageRef}
                            onLoad={() => setIsImageLoading(false)}
                        />
                        <div className="generator-processing__blur">
                            <Spin indicator={<LoadingOutlined spin style={{ color: "#0BBC87", fontSize: 100 }} />} size="large" />
                        </div>
                    </div>
                    <div className={`generator-tools`} onClick={(e) => e.stopPropagation()}>
                        <div className={`generator-tools__main`}>
                            <div className="generator-tools__progress">
                                Photo processing
                                <Progress percent={percent} showInfo={false} trailColor='#3A3D34' strokeColor={"linear-gradient(223deg, #4E9F0D -3.22%, #0BBC87 100%)"} />
                            </div>
                            <div className="generator-tools__line"></div>
                            <Button color='gray' variant='secondary' iconRight={<HourglassIcon />} className='generator-tools__button' onClick={() => handleClickUndress()}>Process</Button>
                        </div>
                    </div>
                </>
            }
            {blob && isImageProcessingError && !isImageProcessing &&
                <>
                    <div className={`generator-header`}>
                        <div className={`generator-header__main`}>
                            <LogoSmall />
                        </div>
                        <BurgerButton variant="inverted" onClick={() => { openModal(<Navbar />) }} className='generator-header__burger' />
                    </div>
                    <div className="generator-error">
                        <Image
                            alt="Uploaded Image"
                            src={blob ? blob.url : ""}
                            width={0}
                            height={0}
                            className='generator-error__image'
                            sizes='100vw'
                            ref={imageRef}
                            onLoad={() => setIsImageLoading(false)}
                        />
                        <div className="generator-error__blur">
                            An error occurred during <br></br>generation
                            <Button color='orange' variant='secondary' iconRight={<ReloadIcon />} onClick={() => handleRetry()}>Try again</Button>
                        </div>
                    </div>
                </>
            }
            {blob && resultImage &&
                <>
                    <div className={`generator-header`}>
                        <div className={`generator-header__main`}>
                            <LogoSmall />
                        </div>
                        <BurgerButton variant="inverted" onClick={() => { openModal(<Navbar />) }} className='generator-header__burger' />
                    </div>
                    <div className="generator-result">
                        {toolSelected === Tool.SEX_POSES ?
                                <Image
                                alt="Result Image"
                                src={SexPosesData[sexPoseIndex].image}
                                width={0}
                                height={0}
                                className='generator-result__image'
                                sizes='100vw'
                                ref={imageRef}
                                style={{ zIndex: -1 }}
                            /> :
                            <Image
                                alt="Result Image"
                                src={blob ? blob.url : ""}
                                width={0}
                                height={0}
                                className='generator-result__image'
                                sizes='100vw'
                                ref={imageRef}
                                style={{ zIndex: -1 }}
                            />
                        }
                        <ImageCanvas src={resultImage} imageRef={imageRef} stageRef={stageRefResult} />
                    </div>
                    <div className={`generator-tools`} onClick={(e) => e.stopPropagation()}>
                        <div className={`generator-tools__main`}>
                            <div className="generator-tools__rate-wrapper">
                                <Rate defaultValue={4} character={(props) => <span className={`icon generator-tools__rate-icon ${props.value! > props.index! ? "icon generator-tools__rate-icon--active" : ""}`}><StarIcon /></span>} />
                            </div>
                            <div className="generator-tools__line"></div>
                            <div className="generator-tools__button-list">
                                <Button variant='secondary' color='green2' iconRight={<ImageIconSmall />} className='generator-tools__button' onClick={() => handleReset()}>New photo</Button>
                                <Button color='gray' variant='secondary' iconRight={<DownloadIcon />} className='generator-tools__button' onClick={() => handleSave()}>Save</Button>
                            </div>
                        </div>
                    </div>
                </>
            }
            {!blob && !isImageLoading &&
                <>
                    <div className={`generator-header`}>
                        <div className={`generator-header__main`}>
                            <LogoSmall />
                        </div>
                        <BurgerButton variant="inverted" onClick={() => { openModal(<Navbar />) }} className='generator-header__burger' />
                    </div>
                    <div className="generator-start">
                        <div className="generator-start__heading">
                            HAVE SOMEONE <br></br>TO UNDRESS?
                        </div>
                        <div className="generator-start__selector">
                            <div onClick={() => setSexSelector(Sex.WOMEN)} className={`generator-start__selector-item ${sexSelector === Sex.WOMEN ? "generator-start__selector-item--active" : ""}`}>
                                <div className="icon generator-start__selector-icon">
                                    <SexWomanIcon />
                                </div>
                                women
                            </div>
                            <div onClick={() => setSexSelector(Sex.MEN)} className={`generator-start__selector-item ${sexSelector === Sex.MEN ? "generator-start__selector-item--active" : ""}`}>
                                <div className="icon generator-start__selector-icon">
                                    <SexManIcon />
                                </div>
                                men
                            </div>
                        </div>
                        <div className="generator-start__button-wrapper">
                            <Upload {...props}>
                                <Button variant='secondary' color='green2' className='generator-start__button' iconRight={<ImageIconSmall />}>upload a photo</Button>
                            </Upload>
                            <Upload {...props}>
                                <Button variant='secondary' color='orange' className='generator-start__button'>demo undress</Button>
                            </Upload>    
                        </div>                   
                        {/* <hr className="generator-start__hr" />
                        <div className="generator-start__instagram">
                            <div className="icon">
                                <InstagramIcon2 />
                            </div>
                            Instagram Link or Upload by URL
                        </div> */}
                    </div>
                </> 
            }
            {blob && !isImageProcessing && !resultImage && !isImageProcessingError &&
                <>
                    <div className={`generator-header`}>
                        <div className={`generator-header__main`}>
                            <LogoSmall />
                            <div className="generator-header__buttons">
                                <button disabled={isImageLoading} className="generator-header__buttons-item">
                                    <ReloadIcon />
                                </button>
                                <button onClick={handleReset} disabled={isImageLoading} className="generator-header__buttons-item">
                                    <TrashIcon />
                                </button>
                            </div>
                        </div>
                        <BurgerButton variant="inverted" onClick={() => { openModal(<Navbar />) }} className='generator-header__burger' />
                    </div>
                    <div className="generator-header__buttons generator-header__buttons--tablet visible-tablet">
                        <button disabled={isImageLoading} className="generator-header__buttons-item">
                            <ReloadIcon />
                        </button>
                        <button disabled={isImageLoading} onClick={handleReset} className="generator-header__buttons-item">
                            <TrashIcon />
                        </button>
                    </div>
                    <div className="generator-ready">
                        <Image
                            alt="Uploaded Image"
                            src={blob.url}
                            width={0}
                            height={0}
                            className='generator-ready__image'
                            sizes='100vw'
                            ref={imageRef}
                            onLoad={() => setIsImageLoading(false)}
                        />
                        <DrawCanvas
                            drawingTool={
                                toolSelected === Tool.UNDRESSING ? (toolSettingSelected === ToolSetting.BRUSH ?
                                DrawingTool.BRUSH : (
                                    toolSettingSelected === ToolSetting.ERASER ?
                                    DrawingTool.ERASER :
                                    null
                                )) : null
                            }
                            brushSize={
                                toolSettingSelected === ToolSetting.BRUSH ?
                                brushSize : eraserSize
                            }
                            imageRef={imageRef}
                            stageRef={stageRefDraw}
                        />
                    </div>
                    <div className={`generator-tools`} onClick={(e) => e.stopPropagation()}>
                        {toolSelected === Tool.UNDRESSING && isSettingsOpened &&
                            <div className="generator-settings">
                                <div className="generator-settings__heading">
                                    Select tool
                                </div>
                                <ul className="generator-settings__list">
                                    <li onClick={() => toolSettingSelected !== ToolSetting.AUTO ? setToolSettingSelected(ToolSetting.AUTO) : setIsSettingsOpened(false)} className={`generator-settings__item ${toolSettingSelected === ToolSetting.AUTO ? "generator-settings__item--active" : ""}`}>
                                        <div className="generator-settings__item-info">
                                            <div className="generator-settings__item-icon icon">
                                                <MagicSticOutlinedIcon />
                                            </div>
                                            <div className="generator-settings__item-main">
                                                <div className="generator-settings__item-title">
                                                    Auto undressing
                                                </div>
                                                <div className="generator-settings__item-description">
                                                    <p>
                                                        Quickly remove clothes from a photo
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="generator-settings__item-selector">
                                                <div className={`icon generator-settings__item-selector__icon`}>
                                                    {toolSettingSelected === ToolSetting.AUTO ? <CheckCurcleBlackIcon /> : <CheckCirle2Icon />}
                                                </div>
                                                SELECT
                                            </div>
                                        </div>
                                    </li>
                                    <li onClick={() => setToolSettingSelected(ToolSetting.BRUSH)} className={`generator-settings__item ${toolSettingSelected === ToolSetting.BRUSH ? "generator-settings__item--active" : ""}`}>
                                        <div className="generator-settings__item-info">
                                            <div className="generator-settings__item-icon icon">
                                                <BrushIcon />
                                            </div>
                                            <div className="generator-settings__item-main">
                                                <div className="generator-settings__item-title">
                                                    Brush paint
                                                </div>
                                                <div className="generator-settings__item-description">
                                                    <p>
                                                        Paint or highlight with adjustable brush sizes
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="generator-settings__item-selector">
                                                <div className={`icon generator-settings__item-selector__icon`}>
                                                    {toolSettingSelected === ToolSetting.BRUSH ? <CheckCurcleBlackIcon /> : <CheckCirle2Icon />}
                                                </div>
                                                SELECT
                                            </div>
                                        </div>
                                        {toolSettingSelected === ToolSetting.BRUSH &&
                                            <div className="generator-settings__item-settings">
                                                <div className="generator-settings__item-settings__title">
                                                    Erasing the painted area with a brush
                                                </div>
                                                <ul className="generator-settings__item-settings__list">
                                                    {Object.values(BrushSize).map((size, index) => (
                                                        <li key={index} onClick={() => setBrushSize(size)} className={`generator-settings__item-settings__item ${brushSize === size ? "generator-settings__item-settings__item--active" : ""}`}>
                                                            {size.toLocaleLowerCase()}
                                                            <div className={`generator-settings__item-settings__dot generator-settings__item-settings__dot--${size.toLowerCase()}`}></div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        }
                                    </li>
                                    <li onClick={() => setToolSettingSelected(ToolSetting.ERASER)} className={`generator-settings__item ${toolSettingSelected === ToolSetting.ERASER ? "generator-settings__item--active" : ""}`}>
                                        <div className="generator-settings__item-info">
                                            <div className="generator-settings__item-icon icon">
                                                <EraserIcon />
                                            </div>
                                            <div className="generator-settings__item-main">
                                                <div className="generator-settings__item-title">
                                                    Eraser
                                                </div>
                                                <div className="generator-settings__item-description">
                                                    <p>
                                                        Erasing the painted area with a brush
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="generator-settings__item-selector">
                                                <div className={`icon generator-settings__item-selector__icon`}>
                                                    {toolSettingSelected === ToolSetting.ERASER ? <CheckCurcleBlackIcon /> : <CheckCirle2Icon />}
                                                </div>
                                                SELECT
                                            </div>
                                        </div>
                                        {toolSettingSelected === ToolSetting.ERASER &&
                                            <div className="generator-settings__item-settings">
                                                <div className="generator-settings__item-settings__title">
                                                    Select Eraser size
                                                </div>
                                                <ul className="generator-settings__item-settings__list">
                                                    {Object.values(BrushSize).map((size, index) => (
                                                        <li key={index} onClick={() => eraserSize !== size ? setEraserSize(size) : setIsSettingsOpened(false)} className={`generator-settings__item-settings__item ${eraserSize === size ? "generator-settings__item-settings__item--active" : ""}`}>
                                                            {size.toLocaleLowerCase()}
                                                            <div className={`generator-settings__item-settings__dot generator-settings__item-settings__dot--${size.toLowerCase()}`}></div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        }
                                    </li>
                                </ul>
                            </div>
                        }
                        {toolSelected === Tool.SEX_POSES && isSettingsOpened &&
                            <div className="generator-settings">
                                <div className="generator-settings__heading">
                                    Choose a sex pose
                                </div>
                                <ul className="generator-settings__grid">
                                    {SexPosesData.map((item, index) => (
                                        <li onClick={() => setSexPoseIndex(index)} key={index} className={`generator-settings__grid-item ${sexPoseIndex === index ? "generator-settings__grid-item--active" : ""}`}>
                                            <Image 
                                                alt={item.title}
                                                src={item.image}
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                className='generator-settings__grid-image'
                                            />
                                            <div className="generator-settings__grid-title">
                                                {item.title}
                                            </div>
                                            {sexPoseIndex === index &&
                                                <div className="icon generator-settings__grid-icon">
                                                    <CheckCirle24Icon />
                                                </div>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                        {toolSelected === Tool.LINGERIE && isSettingsOpened &&
                            <div className="generator-settings">
                                <div className="generator-settings__heading">
                                    Choose a lingerie
                                </div>
                                <ul className="generator-settings__grid">
                                    {LingerieData.map((item, index) => (
                                        <li onClick={() => setLingerieIndex(index)} key={index} className={`generator-settings__grid-item ${lingerieIndex === index ? "generator-settings__grid-item--active" : ""}`}>
                                            <Image 
                                                alt={item.title}
                                                src={item.image}
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                className='generator-settings__grid-image'
                                            />
                                            <div className="generator-settings__grid-title">
                                                {item.title}
                                            </div>
                                            {lingerieIndex === index &&
                                                <div className="icon generator-settings__grid-icon">
                                                    <CheckCirle24Icon />
                                                </div>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                        <div className={`generator-tools__main ${isSettingsOpened ? "generator-tools__main--noradius" : ""}`}>
                            <div className="generator-tools__buttons">
                                <button
                                    onClick={() => handleToolClick(Tool.UNDRESSING)}
                                    className={`generator-tools__buttons-item ${toolSelected === Tool.UNDRESSING ? "generator-tools__buttons-item--active" : ""}`}
                                >
                                    Undressing
                                    <div className="icon generator-tools__buttons-icon">
                                        <HangerSmallIcon />
                                    </div>
                                    <div className="icon generator-tools__buttons-rectangle">
                                        <RectangleIcon />
                                    </div>
                                </button>
                                <button
                                    onClick={() => handleToolClick(Tool.SEX_POSES)}
                                    className={`generator-tools__buttons-item ${toolSelected === Tool.SEX_POSES ? "generator-tools__buttons-item--active" : ""}`}
                                >
                                    Sex poses
                                    <div className="icon generator-tools__buttons-icon">
                                        <LipsIcon />
                                    </div>
                                    <div className="icon generator-tools__buttons-rectangle">
                                        <RectangleIcon />
                                    </div>
                                </button>
                                <button
                                    onClick={() => handleToolClick(Tool.LINGERIE)}
                                    className={`generator-tools__buttons-item ${toolSelected === Tool.LINGERIE ? "generator-tools__buttons-item--active" : ""}`}
                                >
                                    Lingerie
                                    <div className="icon generator-tools__buttons-icon">
                                        <BoobsSmallIcon />
                                    </div>
                                    <div className="icon generator-tools__buttons-rectangle">
                                        <RectangleIcon />
                                    </div>
                                </button>
                            </div>
                            <div className="generator-tools__line"></div>
                            <Button color='green2' disabled={isImageLoading} className='generator-tools__button' onClick={() => handleClickUndress()}>Undress</Button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default UndressGenerator
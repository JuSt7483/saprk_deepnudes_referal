'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import "./Slider.scss"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image'
import { GirlsImages } from '@/shared/data/girlsImages';

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Slider = ({ className }: SliderProps) => {
    const images = Object.values(GirlsImages).reduce((arr: { src: string; alt: string; }[], value) => {
        const hrefs = value.filter((img) => img.height === 500).reduce((acc: { src: string; alt: string; }[], img) => {
            acc.push({
                src: img.src,
                alt: img.alt
            })
            return acc;
        }, [])
        arr.push(...hrefs)
        return arr;
    }, [])
    return (
        <div className={`slider ${className ?? ""}`}>
            <Swiper 
                slidesPerView={1.7}
                spaceBetween={5}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 8
                    },
                }}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={`slider_${index}`} className="slider__item">
                        <Image alt={img.alt} src={img.src} height={0} width={0} className="slider__image" priority sizes='100vw' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
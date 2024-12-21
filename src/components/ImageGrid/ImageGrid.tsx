"use client";

import React, { useEffect, useLayoutEffect } from 'react';
import './ImageGrid.scss';
import Image from 'next/image';
import { AnimationControls, useAnimation } from 'framer-motion';
import { Motion } from '../UI/primitives/Motion/Motion';
import { GirlsImages } from '@/shared/data/girlsImages';

const ImageGrid = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();

    useEffect(() => {
        let isSubscribed = true;
        const animateColumn = async (controls: AnimationControls, initialDirection: 'down' | 'up', initialValue: number) => {
            while (isSubscribed) {
                if (!isSubscribed) return;
                await controls.start({ y: initialDirection === 'down' ? -50 : -320, transition: { duration: 9, ease: 'easeInOut' } });

                if (!isSubscribed) return;
                await controls.start({
                    y: initialDirection === 'down' ? -50 : -320,
                    transition: { duration: 0, delay: 1 },
                });

                if (!isSubscribed) return;
                await controls.start({ y: initialValue, transition: { duration: 9, ease: 'easeInOut' } });
            }
          };
          
          // Запускаем анимацию для каждой колонки с разным начальным направлением
          animateColumn(controls1, 'up', 0);  // Первая колонка начинает двигаться вниз
          animateColumn(controls2, 'down', -120);    // Вторая колонка начинает двигаться вверх
          animateColumn(controls3, 'up', 0);  // Третья колонка начинает двигаться вниз
          animateColumn(controls4, 'down', -120);    // Четвертая колонка начинает двигаться вверх

          return () => { isSubscribed = false; }
    }, [controls1, controls2, controls3, controls4]);

  return (
    <div className="image-grid">
      <Motion
        className="image-grid__column"
        animate={controls1}
        initial={{ y: 0 }}
      >
        {GirlsImages[1].map((item, idx) => (
            <div key={idx} className="image-grid__image-wrapper" style={{ height: item.height }}>
                <Image src={item.src} alt={item.alt} className='image-grid__image' fill sizes='100vw' />
            </div>
        ))}
      </Motion>

      <Motion
        className="image-grid__column"
        animate={controls2}
        initial={{ y: -120 }}
      >
        {GirlsImages[2].map((item, idx) => (
            <div key={idx} className="image-grid__image-wrapper" style={{ height: item.height }}>
                <Image src={item.src} alt={item.alt} className='image-grid__image' fill sizes='100vw' />
            </div>
        ))}
      </Motion>

      <Motion
        className="image-grid__column"
        animate={controls3}
        initial={{ y: 0 }}
      >
        {GirlsImages[3].map((item, idx) => (
            <div key={idx} className="image-grid__image-wrapper" style={{ height: item.height }}>
                <Image src={item.src} alt={item.alt} className='image-grid__image' fill sizes='100vw' />
            </div>
        ))}
      </Motion>

      <Motion
        className="image-grid__column"
        animate={controls4}
        initial={{ y: -120 }}
      >
        {GirlsImages[4].map((item, idx) => (
            <div key={idx} className="image-grid__image-wrapper" style={{ height: item.height }}>
                <Image src={item.src} alt={item.alt} className='image-grid__image' fill sizes='50vw' priority />
            </div>
        ))}
      </Motion>
    </div>
  );
};

export default ImageGrid;
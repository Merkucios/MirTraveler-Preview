'use client';
import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import {
  EffectFade,
  Navigation,
  Pagination,
  Parallax,
  Autoplay,
  Scrollbar,
} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styles from './style.module.css';
import './pagination.css';

type CarouselProps = SwiperProps & {
  children: ReactNode;
  uniqueId: string;
  enablePagination?: boolean;
  enableNavigation?: boolean;
};

export const Carousel: React.FC<CarouselProps> = ({
  children,
  uniqueId,
  slidesPerView,
  spaceBetween,
  effect,
  breakpoints,
  enablePagination = false,
  enableNavigation = true,
  ...rest
}) => {
  const pagination = enablePagination
    ? {
        clickable: true,
        renderBullet: (index: number, className: string) => {
          return `<span class="${className} ${styles['custom-bullet']}"></span>`;
        },
      }
    : false;

  return (
    <div className="relative">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={pagination}
        navigation={
          enableNavigation
            ? {
                nextEl: `.${uniqueId}-next`,
                prevEl: `.${uniqueId}-prev`,
              }
            : false
        }
        effect={effect}
        breakpoints={breakpoints}
        modules={[
          EffectFade,
          Navigation,
          Pagination,
          Parallax,
          Autoplay,
          Scrollbar,
        ]}
        {...rest}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {enableNavigation && (
        <>
          <div
            className={`${styles['custom-prev']} ${styles['custom-nav-button']} ${uniqueId}-prev`}
          >
            <div className={styles['button-bg']} />
            <div className={styles['button-arrow']} />
          </div>

          <div
            className={`${styles['custom-next']} ${styles['custom-nav-button']} ${uniqueId}-next`}
          >
            <div className={styles['button-bg']} />
            <div className={styles['button-arrow']} />
          </div>
        </>
      )}
    </div>
  );
};

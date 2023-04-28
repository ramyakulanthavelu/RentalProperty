import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


function karsouel() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="/a1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/a2.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/a3.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/a4.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/a5.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/a1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/a2.jpeg" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon Classname="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon Classname="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default karsouel;
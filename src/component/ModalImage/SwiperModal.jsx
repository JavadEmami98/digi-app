import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./SwiperModal.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SwiperModal() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="Swiper2-m"
      >
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide >
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal"> 
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90https://swiperjs.com/demos/images/nature-7.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90https://swiperjs.com/demos/images/nature-10.jpg" alt=""/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="Swiper-m"
      >
       <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90https://swiperjs.com/demos/images/nature-7.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-modal">
          <img src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90https://swiperjs.com/demos/images/nature-10.jpg" alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
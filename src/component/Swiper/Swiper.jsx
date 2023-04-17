/* import React, { useRef, useState } from "react"; */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Navigation } from "swiper";

export default function SwiperHeader() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://api.tahlilmobile.ir/public/downloadFileById/690" alt="" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d26092ae04ca542732f9ec33ded309e122bccc28_1681629327.jpg?x-oss-process=image/quality,q_95" alt="" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a2a0cb8dd9cd3ac6564c1a0f54aa3e3669b01a0b_1681626601.jpg?x-oss-process=image/quality,q_95" alt="" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9869329b36e4c75533cc5281632a2763a972f260_1679140919.jpg?x-oss-process=image/quality,q_95" alt="" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="https://api.tahlilmobile.ir/public/downloadFileById/141" alt="" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="https://api.tahlilmobile.ir/public/downloadFileById/1798" alt="" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/304758ab10fd78573926f5ffa2a83dc936588b14_1681541561.jpg?x-oss-process=image/quality,q_95" alt="" loading="lazy"/></SwiperSlide>
      </Swiper>
    </>
  );
}

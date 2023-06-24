/* import React, { useRef, useState } from "react"; */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper.css";
import { Box, Container } from "@mui/material";

// import required modules


export default function SwiperHeader() {
  return (
    <>
    <Container maxWidth="full">
      <Box sx={{mt: {xs:"10px"}}}>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper1"
      >
        <SwiperSlide className="swiper-1"> 
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/b0fdf2eb411e9699366e58b12eeab485ac4f7289_1687347858.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            loading="lazy"
            style={{objectFit:"cover",height:"100%"}}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-1">
          <img  /* className="swiper-slide1-img" */
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c509f37553889fa556259adce1071b50951b6958_1687597261.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            loading="lazy"
            style={{objectFit:"cover",height:"100%"}}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-1">
          <img  /* className="swiper-slide1-img" */
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bbe9e3b69fe6696c6eb0bc0467e56405ca4f14c7_1687380577.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            loading="lazy"
            style={{objectFit:"cover",height:"100%"}}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-1">
          <img  /* className="swiper-slide1-img" */
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6bb8870dde33dd48bc37c851c8e722411c5462d9_1687354521.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            loading="lazy"
            style={{objectFit:"cover",height:"100%"}}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-1">
          <img  /* className="swiper-slide1-img" */
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/78e814160b785ae9b6427ba2af4b4b900d6b21bc_1687024527.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            loading="lazy"
            style={{objectFit:"cover",height:"100%"}}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-1">
          <img  /* className="swiper-slide1-img" */
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/b7f8dfc325f6af4eb7c722490dda71484ff08181_1687601604.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            loading="lazy"
            style={{objectFit:"cover",height:"100%"}}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-1">
          <img  /* className="swiper-slide1-img" */
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6594705debf692df93b306a095b0a13a615ee27c_1687250065.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            loading="lazy"
            style={{objectFit:"cover",height:"100%"}}
          />
        </SwiperSlide>
      </Swiper></Box></Container>
    </>
  );
}

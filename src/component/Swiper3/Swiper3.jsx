
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./Swiper3.css";

// import required modules
import { Grid, Pagination } from "swiper";

export default function Swiper3() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 2,
        }}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="swiper3"
      >
        <SwiperSlide className="swiper-slide3">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 9</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 10</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 11</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 12</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 13</SwiperSlide>
        <SwiperSlide className="swiper-slide3">Slide 14</SwiperSlide>
      </Swiper>
    </>
  );
}

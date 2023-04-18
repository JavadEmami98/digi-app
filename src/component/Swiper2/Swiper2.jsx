import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper2.css";
import { Pagination } from "swiper";
import Cart from "../Cart/Cart";

export default function Swiper2() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper2"
      > <div className="pic-1">
          <img
            src="https://api.tahlilmobile.ir/public/downloadFileById/657"
            alt=""
          />
        </div>
        <SwiperSlide className="swiper-slide2">
          <Cart />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
        <SwiperSlide className="swiper-slide2">{/* <Cart /> */}</SwiperSlide>
       
      </Swiper>
    </>
  );
}

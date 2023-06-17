import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import CartItemMobile from "./CartItemMobile";

const images = [
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/8606b2495a0ff741091b441b76fcb83052beee3e_1675774260.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/73409683bedd334608bd3aff7c048fcddc3094ed_1675774258.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/bbfae5e7d0e23ce89021cd94878df040fe90fc6b_1675774255.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/081fcfb278d1dd56bdf49cde4bc60e80d7fd1d70_1675774248.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/081fcfb278d1dd56bdf49cde4bc60e80d7fd1d70_1675774248.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
  ];

function ItemSwiperMobile() {
  return (
    <div>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((item,index)=>(
        <SwiperSlide key={index}>
            <CartItemMobile image={item.img}/>
        </SwiperSlide>))}
      </Swiper>
    </div>
  )
}

export default ItemSwiperMobile
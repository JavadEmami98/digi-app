import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper2.css";
import { Pagination } from "swiper";
import Cart from "../Cart/Cart";
import { Box, useMediaQuery } from "@mui/material";

const cart = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/d26dc3a2a67ea1f15da01b052a423522fb7784cb_1670515131.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "2,190,000 تومان",
    offer:"3,000,000",
    dicount: "14%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/27e2854ff627cded7e6b932a246351d14e428652_1601791792.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "1,295,000 تومان",
    offer:"1,450,000",
    dicount: "10%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/4bf91e16cb1b0ba0efe80749d75e2775ce19b1e9_1654679129.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "3,150,000 تومان",
    offer:"3,500,000",
    dicount: "54%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/94e7828f04e374777cd8126e655490beb941de1e_1679128757.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "2,220,000 تومان",
    offer:"2,500,000",
    dicount: "17%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/6929f0a6f04287253be3eb227322cba38875bb92_1638194327.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "6,540,000 تومان",
    offer:"7,300,000",
    dicount: "30%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e760c6190a7d7b227ca0317b18eef5b3e0f01974_1664203594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "6,690,000 تومان",
    offer:"7,100,000",
    dicount: "25%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/279ae94d09cbb589e03bcec76631c792c53c3591_1644199597.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "1,000,000 تومان",
    offer:"1,300,000",
    dicount: "34%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2a50dfa66db4b288f22760251745ad88f444b9c9_1662463676.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "2,000,000 تومان",
    offer:"2,220,000",
    dicount: "40%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/a48de6a051009d34fe458ce768d30f800dc8e595_1656934101.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "5,000,000 تومان",
    offer:"5,400,000",
    dicount: "9%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/9c38ffaf155414b0974c856d21a337b413b60cd1_1643793833.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "3,333,000 تومان",
    offer:"3,700,000",
    dicount: "15%",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/9aab255af6a88288638ff2959d0426751f97d002_1630322919.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "2,854,000 تومان",
    offer:"3,100,000",
    dicount: "24%",
  },
];

export default function Swiper2() {
  const isMd = useMediaQuery("(min-width:900px)");
  return (
    <Box sx={{background:"#ef4056" , mt:"24px"  ,borderRadius:"15px"}}>
      <Swiper
        slidesPerView={isMd ? 6 : 3}
        spaceBetween={2}
        /* centeredSlides={true}  */
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper2"
       
      >
        <SwiperSlide className="swiper-slide2">
          <img
            src="https://api.tahlilmobile.ir/public/downloadFileById/657"
            alt=""
            style={{width:"100%" , objectFit:"cover" , height:"100%" , maxHeight:"280px",background:"#ef4056",
        padding:"5px 15px"}}
          />
        </SwiperSlide>

        {cart.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide2">
            <Cart
              image={item.image}
              price={item.price}
              dicount={item.dicount}
              offer={item.offer}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

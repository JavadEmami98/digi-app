/* import React, { useState } from "react";
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
} */
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
import { Box } from "@mui/system";


export default function SwiperModal() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [indexOfImage, setindexOfImage] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [showThumbnail, setshowThumbnail] = useState({});
  const slideTo = (index) => swiper.slideTo(index);
  return (
    <Box sx={{ display: "flex" }}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setSwiper}
        onSlideChange={(e) => {
          setindexOfImage(e.activeIndex);
          setshowThumbnail({});
        }}
      >
        
        <SwiperSlide className="swiper-slide-m img">
          <img 
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/73409683bedd334608bd3aff7c048fcddc3094ed_1675774258.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90https://swiperjs.com/demos/images/nature-7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/73409683bedd334608bd3aff7c048fcddc3094ed_1675774258.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-m img">
          <img
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90https://swiperjs.com/demos/images/nature-10.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <>
          <img
          
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(0);
              slideTo(0);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(1);
              slideTo(1);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(2);
              slideTo(2);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(3);
              slideTo(3);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(4);
              slideTo(4);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/73409683bedd334608bd3aff7c048fcddc3094ed_1675774258.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(5);
              slideTo(5);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(6);
              slideTo(6);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/73409683bedd334608bd3aff7c048fcddc3094ed_1675774258.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(7);
              slideTo(7);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important" }}
            onClick={() => {
              setindexOfImage(8);
              slideTo(8);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
            alt=""
          />
        </>
        <>
          <img
            width={50}
            height={50}
            style={{ width: "50px !important",objectFit:"cover" }}
            onClick={() => {
              setindexOfImage(9);
              slideTo(9);
            }}
            src="https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90https://swiperjs.com/demos/images/nature-10.jpg"
            alt=""
          />
        </>
      </Box>
    </Box>
  );
}


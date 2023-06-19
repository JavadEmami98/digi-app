import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper3.css";
import { Pagination } from "swiper";
import CartSwiper3 from "./CartSwiper3";
import { useMediaQuery } from "@mui/material";

const brands = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/3972.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/c672197e1b856916470b6b0f755063b10516fdfb_1642246341.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/87dcb454f4d8df28bd2f8fd902f0f27b5fb1fac4_1666761801.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/100014253.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/5518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public-2.digikala.com/digikala-brands/100009092.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/f660c46ffc6d58a19e5c0af9d03c50be9a929571_1627214766.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/c672197e1b856916470b6b0f755063b10516fdfb_1642246341.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  },
];

export default function Swiper3() {
  const isMd = useMediaQuery("(min-width:900px)");
  return (
    <>
      <Swiper
        slidesPerView={isMd ? 6 : 3}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper3"
      >
        {brands.map((item, index) => (
          <SwiperSlide key={index}>
            <CartSwiper3 image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

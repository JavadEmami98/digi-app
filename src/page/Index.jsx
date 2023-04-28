import React from "react";
import { Box } from "@mui/material";
import SwiperHeader from "../component/Swiper/Swiper";
import Swiper2 from "../component/Swiper2/Swiper2";
import Grid2 from "../component/Grid2/Grid2";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import Categories from "../component/Categories/Categories";
import Digit from "../component/Digit/Digit";
import GreenBox from "../component/GreenBox/GreenBox";
import FourPics from "../component/FourPics/FourPics";
import Grouping from "../component/Grouping/Grouping";
import TwoPics from "../component/TwoPics/TwoPics";
import Suggestion from "../component/Suggestion/Suggestion";
import Popular from "../component/Popular/Popular";
import DigiPlus from "../component/DigiPlus/DigiPlus";
import DigiClub from "../component/DigiClub/DigiClub";
import Footer from "../component/Footer/Footer";
import Reading from "../component/Reading/Reading";
import Offer from "../component/Offer/Offer";
import BestSelling from "../component/BestSelling/BestSelling";
import "./first.css";

const twopics = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/ea927afe2001cdcd8df9d0dd4cd540f259ec93d1_1681405138.jpg?x-oss-process=image/quality,q_95",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/662c05a7734c5e7f1ea7cc77a5e6c10f09bf25d4_1671873768.jpg?x-oss-process=image/quality,q_95",
  },
];

function Index() {
  return (
    <div>
      <Banner />
      <Header />
      <Categories />
      <SwiperHeader />
      <Digit />

      <Swiper2 />

      <GreenBox />
      <FourPics />
      <Grouping />
      <TwoPics />

      <Suggestion />
      <Popular />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1304px",
          height: "258px",
          mr: "122px",
          mt: "24px",
        }}
      >
        {twopics.map((item, index) => (
          <img key={index} className="twopic" src={item.image} alt="" />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1304px",
          height: "420px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
          mr: "122px",
          mt: "24px",
        }}
      >
        <Grid2 />
      </Box>
      <DigiPlus />
      <DigiClub />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1304px",
          height: "420px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
          mr: "122px",
          mt: "24px",
        }}
      >
        <Grid2 />
      </Box>
      <BestSelling />
      <Offer />
      <Reading />
      <Footer />
    </div>
  );
}

export default Index;

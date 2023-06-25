import React from "react";
import { Box, Container } from "@mui/material";
import SwiperHeader from "../component/Swiper/Swiper";
import Swiper2 from "../component/Swiper2/Swiper2";
/* import Grid2 from "../component/Grid2/Grid2";
import Banner from "../component/Banner/Banner"; */
import Header from "../component/Header/Header";
import Categories from "../component/Categories/Categories";
import Digit from "../component/Digit/Digit";
import GreenBox from "../component/GreenBox/GreenBox";
import Grouping from "../component/Grouping/Grouping";
import TwoPics from "../component/TwoPics/TwoPics";
import Suggestion from "../component/Suggestion/Suggestion";
import Popular from "../component/Popular/Popular";
import DigiPlus from "../component/DigiPlus/DigiPlus";
import DigiClub from "../component/DigiClub/DigiClub";
import Footer from "../component/Footer/Footer";
import Reading from "../component/Reading/Reading";
import Offer from "../component/Offer/Offer";
/* import BestSelling from "../component/BestSelling/BestSelling"; */
import "./first.css";
import HeaderMobile from "../component/HeaderMobile/HeaderMobile";
import SearchMobile from "../component/SearchMobile/SearchMobile";
import LocMobile from "../component/LocationMobile/LocMobile";
import GridFour from "../component/FourPics/GridFour";
import DigiPlusMobile from "../component/DigiPlusMobile/DigiPlusMobile";
import Four from "../component/Four/Four";

const twopic = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/c0d274defc8c3006fe3f8b35290fd207d50d9740_1681405346.jpg?x-oss-process=image/quality,q_95",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/46ff3ba5b960203023beb0c3e19df5b9d65b22df_1681405803.jpg?x-oss-process=image/quality,q_95",
  },
];
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
      {/* <Banner /> */}
      <Box sx={{ display: { md: "none", xs: "none",sm:"none",lg:"block",xl:"block"}}}>
        <Header />
      </Box>
      <Container maxWidth="lg">
      <Box sx={{ display: { md: "block", xs: "block",sm:"block",lg:"none",xl:"none"}}}>
        <HeaderMobile/>
        <SearchMobile/>
        <LocMobile/>
      </Box>
      </Container>
      <Box sx={{ display: {lg:"block",xl:"block", md: "none", xs: "none" } }}>
        <Categories />
      </Box>

      <SwiperHeader />
      <Container maxWidth="lg">
        <Digit />

        <Swiper2 />

        <GreenBox />
        <GridFour/>
        <Grouping /> 
        <TwoPics 
        data={twopic}
        />

        <Suggestion /> 
        <Popular />

       <TwoPics
       data={twopics}
       />
       {/* <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "420px",
            border: "1px solid #e0e0e6",
            borderRadius: "16px",
            mt: "24px",
          }}
        >
          <Grid2 />
        </Box> */}
        <Box sx={{display:{xs:"none",sm:"none",md:"none",lg:"block",xl:"block"}}}>
            <DigiPlus />
        </Box>
        <Box sx={{display:{xs:"block",sm:"block",md:"block",lg:"none",xl:"none"}}}>
           <DigiPlusMobile/>
        </Box>
       
        <DigiClub />

        <Four/>

     
      {/*<BestSelling/>*/}
         <Offer />
        <Reading />
      </Container>
      <Footer />
    </div>
  );
}

export default Index;

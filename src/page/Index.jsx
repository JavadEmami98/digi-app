import React from "react";
import { Box, Typography } from "@mui/material";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import StoreIcon from "@mui/icons-material/Store";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Link } from "react-router-dom";
import "./first.css";
import SwiperHeader from "../component/Swiper/Swiper";

const CATEGROY = [
  {
    title: "هندزفری",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/146",
    id: 0,
  },
  {
    title: "اپل واچ",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/60",
    id: 1,
  },
  {
    title: "آیفون",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/1800",
    id: 2,
  },
  {
    title: "کنسول بازی",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/148",
    id: 3,
  },
  {
    title: "تبلت",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/1797",
    id: 4,
  },
  {
    title: "قاب",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/152",
    id: 5,
  },
  {
    title: "لوازم جانبی",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/63",
    id: 6,
  },
  {
    title: " هوم پاد",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/147",
    id: 7,
  },
  {
    title: " پاور بانک",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/151",
    id: 8,
  },
  {
    title: " لوازم خانگی",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/153",
    id: 9,
  },
  {
    title: " نوت بوک",
    image: "https://api.tahlilmobile.ir/public/downloadFileById/149",
    id: 10,
  },
];

const digit = [
  {
    title: "جی‌ کالا جت",
    image: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png",
    id: 0,
  },
  {
    title: "حراج استایل ",
    image: "https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png",
    id: 1,
  },
  {
    title: "خرید اقساطی",
    image: "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png",
    id: 2,
  },
  {
    title: " جی‌کالا سرویس",
    image: "https://dkstatics-public.digikala.com/digikala-bellatrix/555ad3336a60bbd1433dd7a999f4d487e96602d8_1680678388.png",
    id: 3,
  },
  {
    title: "ماه رمضان",
    image: "https://dkstatics-public.digikala.com/digikala-bellatrix/269766a358cf34e58ccaf49aa3ac2d2db397af7a_1679516613.png",
    id: 4,
  },
  {
    title: "دیجی پلاس",
    image: "https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png",
    id: 5,
  },
  {
    title: "ماموریت‌ها ",
    image: "https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png",
    id: 6,
  },
  {
    title: "  بیشتر",
    image: "https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png",
    id: 7,
  },
];

function Index() {
  return (
    <div>
      <img
        className="header-pic"
        src="/image/header.jpg"
        alt=""
        loading="lazy"
      />
      <div className="logo-line">
        <img className="logo" src="/image/logo.svg" alt="" loading="lazy" />
        <Box
          sx={{
            display: "flex",
            width: "600px",
            height: "44px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchIcon
            sx={{
              position: "absolute",
              right: "170px",
              top: "22px",
              zIndex: 10,
              color: "#9e9fb1",
            }}
          />
          <input className="input" type="text" placeholder="جستجو" />
        </Box>

        <div className="head-left">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "134px",
              height: "40px",
              backgroundColor: "white",
              border: "1px solid #e0e0e6",
              mr: "5px",
              borderRadius: "8px",
            }}
          >
            <InputOutlinedIcon sx={{ mr: "15px" }} />
            <Typography sx={{ ml: "10px" }}>ورود | ثبت نام</Typography>
          </Box>
          <Typography> | </Typography>
          <ShoppingCartOutlinedIcon sx={{ ml: "7px" }} />
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          height: "40px",
          fontSize: "12px",
          borderBottom: "1px solid #5a5c7a",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "142.05px",
            height: "30px",
            fontSize: "12px",
          }}
        >
          <MenuOutlinedIcon sx={{ mr: "15px" }} />
          <Typography sx={{ ml: "10px" }}>دسته‌بندی کالاها</Typography>
        </Box>
        |
        <Box
          sx={{
            display: "flex",
            /* justifyContent: "space-between", */
            alignItems: "center",
            ml: "595px",
            width: "770px",
            height: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "110px",
              height: "40px",
            }}
          >
            <StoreIcon
              sx={{ mr: "10px", paddingRight: "5px", color: "#5a5c7a" }}
            />
            <Typography sx={{ fontSize: "12px", pl: "15px", color: "#5a5c7a" }}>
              سوپرمارکت
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "115px",
              height: "40px",
            }}
          >
            <WhatshotOutlinedIcon
              sx={{ mr: "8px", paddingRight: "5px", color: "#5a5c7a" }}
            />
            <Typography sx={{ fontSize: "10px", pl: "15px", color: "#5a5c7a" }}>
              پرفروش ترینها
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "125px",
              height: "40px",
            }}
          >
            <PercentOutlinedIcon
              sx={{ mr: "8px", paddingRight: "5px", color: "#5a5c7a" }}
            />
            <Typography sx={{ fontSize: "9px", pl: "15px", color: "#5a5c7a" }}>
              تخفیف‌ها و پیشنهادها
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "110px",
              height: "40px",
            }}
          >
            <LocalOfferOutlinedIcon
              sx={{ mr: "10px", paddingRight: "5px", color: "#5a5c7a" }}
            />
            <Typography sx={{ fontSize: "10px", pl: "15px", color: "#5a5c7a" }}>
              شگفت‌انگیزها
            </Typography>
          </Box>
          <Box
            sx={{
              mr: "7px",
            }}
          >
            |
          </Box>
          <Box sx={{ marginRight: "15px", color: "#5a5c7a" }}>
            <Link>سوالی دارید؟ </Link>
          </Box>
          <Typography sx={{ fontSize: "12px", color: "#5a5c7a", mr: "25px" }}>
            در اینجا بفروشید!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "173px",
            height: "40px",
            fontSize: "12px",
            ml: "16px",
            paddingRight: "10px",
            paddingLeft: "5px",
          }}
        >
          <LocationOnOutlinedIcon
            sx={{ pr: "4px", mr: "8px", color: "#5a5c7a" }}
          />
          <Typography sx={{ fontSize: "11px", color: "#5a5c7a" }}>
            لطفا شهر خود را انتخاب کنید
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "94%",
          height: "150px",
          margin: "5px 50px",
        }}
      >
        {CATEGROY.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              width: "105px",
              height: "115px",
              margin: "20px 20px",
              paddingTop: "5px",
              paddingBottom: "5px",
              fontWeight: "light",
            }}
          >
            <img className="smalls-pic" src={item.image} alt="" loading="lazy"/>
            <Typography sx={{ fontSize: "11px", fontWeight: "light" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <SwiperHeader />
      <Box
        sx={{
          display: "flex",
          alignItems:"center",
          width: "1304px",
          height: "95px",
          margin:"24px 200px"
        }}
      >
        {digit.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              width: "62px",
              height: "79px",
              margin: "20px 50px",
              paddingBottom: "5px",
              fontWeight: "light",
            }}
          >
            <img className="smalls-pics" src={item.image} alt="" loading="lazy"/>
            <Typography sx={{ fontSize: "10px", fontWeight: "light" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Index;

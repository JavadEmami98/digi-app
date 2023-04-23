import React from "react";
import { Box, Typography } from "@mui/material";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import StoreIcon from "@mui/icons-material/Store";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import { Link } from "react-router-dom";
import "./first.css";
import SwiperHeader from "../component/Swiper/Swiper";
import Swiper2 from "../component/Swiper2/Swiper2";
import BasicGrid from "../component/Grid/BasicGrid";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Grid2 from "../component/Grid2/Grid2";
import GridPurple from "../component/GridPurple/GridPurple";

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
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png",
    id: 0,
  },
  {
    title: "حراج استایل ",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png",
    id: 1,
  },
  {
    title: "خرید اقساطی",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png",
    id: 2,
  },
  {
    title: " جی‌کالا سرویس",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/555ad3336a60bbd1433dd7a999f4d487e96602d8_1680678388.png",
    id: 3,
  },
  {
    title: "ماه رمضان",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/269766a358cf34e58ccaf49aa3ac2d2db397af7a_1679516613.png",
    id: 4,
  },
  {
    title: "دیجی پلاس",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png",
    id: 5,
  },
  {
    title: "ماموریت‌ها ",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png",
    id: 6,
  },
  {
    title: "  بیشتر",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png",
    id: 7,
  },
];

const product = [
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/f06e4dd8c6e6f48c4d0ab61b02fb19ed6747f29d_1665310120.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "20%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/3f8a0786687e568ab765e11dfeb8aec6c6ec5af6_1675852745.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "16%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/0f756bdeb01b1cb864c7e0937a74fc7e968b3188_1652251677.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "22%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/700070.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "17%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/e0c30ff0ab8bb814796a68b895390a49bfd26c57_1652012531.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "15%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/e06a70b34f359dad43119c86116cce251d23e0ad_1677929814.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "24%",
  },
];

const fourpic = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/0bf471872d71cfbfd6351b3e183920180fb6c3dc_1681114971.jpg?x-oss-process=image/quality,q_95",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/3f03bfd2649b2bd7978b2dd33b5e4b16a6ce91b9_1681534434.jpg?x-oss-process=image/quality,q_95",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/2cb745516a58547e5eddd9ddf4ac08cf2d55ea70_1681540637.jpg?x-oss-process=image/quality,q_95",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/6622444e1f351dbc7b5e25bd753a26ce547df04c_1681713343.jpg?x-oss-process=image/quality,q_95",
  },
];

const twelvepic = [
  {
    title: "موبایل",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png",
    id: 0,
  },
  {
    title: " کالای دیجیتال",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png",
    id: 1,
  },
  {
    title: "خانه و آشپزخانه",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png",
    id: 2,
  },
  {
    title: "مد و پوشاک ",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png",
    id: 3,
  },
  {
    title: "کالاهای سوپرمارکتی",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png",
    id: 4,
  },
  {
    title: "کتاب، لوازم تحریر و هنر",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png",
    id: 5,
  },
  {
    title: "اسباب بازی، کودک و نوزاد",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png",
    id: 6,
  },
  {
    title: "زیبایی و سلامت",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png",
    id: 7,
  },
  {
    title: "ورزش و سفر",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png",
    id: 8,
  },
  {
    title: " ابزار، لوازم ساختمانی و صنعتی ",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/5d89d5b168e5ed079d619181e849cc737ec42c8d_1678698730.png",
    id: 9,
  },
  {
    title: "خودرو و موتورسیکلت",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/4e985adcf61dd54d4d8abe725a62ba3990ea1eb1_1678698550.png",
    id: 10,
  },
  {
    title: " محصولات بومی و محلی ",
    image:
      "https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png",
    id: 11,
  },
];

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
          <Typography sx={{ ml: "10px", fontSize: "11px" }}>
            دسته‌بندی کالاها
          </Typography>
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
          <Typography sx={{ fontSize: "10px", color: "#5a5c7a", mr: "25px" }}>
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
          <Typography sx={{ fontSize: "9px", color: "#5a5c7a" }}>
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
            <img
              className="smalls-pic"
              src={item.image}
              alt=""
              loading="lazy"
            />
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
          alignItems: "center",
          width: "1304px",
          height: "95px",
          margin: "24px 115px",
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
            <img
              className="smalls-pics"
              src={item.image}
              alt=""
              loading="lazy"
            />
            <Typography sx={{ fontSize: "10px", fontWeight: "light" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Swiper2 />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "1304px",
          height: "110px",
          backgroundColor: "#e2f0e2",
          margin: "10px 110px",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "467px",
            height: "62px",
            mr: "25px",
          }}
        >
          <img
            src="https://www.digikala.com/statics/img/png/amazing/fresh.png"
            alt=""
          />
          <img
            src="https://www.digikala.com/statics/img/svg/typography/fresh.svg"
            alt=""
          />
          <Typography
            sx={{
              width: "111px",
              height: "28px",
              backgroundColor: "#39ae00",
              color: "white",
              padding: "5px 12px",
              borderRadius: "15px",
              fontSize: "15px",
            }}
          >
            تا ۵۷٪ تخفیف
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "492px",
            height: "74px",
            /* backgroundColor: "white", */
            mr: "95px",
          }}
        >
          {product.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "74px",
                height: "74px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            >
              <img className="img-6" src={item.img} alt="" />
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "34px",
                  position: "absolute",
                  height: "20px",
                  backgroundColor: "red",
                  mt: "5px",
                  borderRadius: "16px",
                  fontSize: "14px",
                  bottom: "4px",
                  right: "5px",
                  color: "white",
                }}
              >
                {item.discount}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "144px",
            height: "50px",
            backgroundColor: "white",
            color: "#39ae00",
            ml: "25px",
            borderRadius: "25px",
            padding: "0 15px",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>بیش از ۱۰۰ کالا</Typography>
          <ArrowBackOutlinedIcon />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "1304px",
          height: "236px",
          mr: "110px",
          mt: "24px",
        }}
      >
        {fourpic.map((item, index) => (
          <img key={index} className="four-pic" src={item.image} alt="" />
        ))}
      </Box>
      <Typography sx={{ mt: "25px", mr: "670px", fontSize: "20px" }}>
        دسته‌بندی‌های دیجی‌ کالا
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "1272px",
          height: "441px",
          mr: "122px",
          mt: "40px",
        }}
      >
        {twelvepic.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "212px",
              height: "205px",
              backgroundColor: "#white",
            }}
          >
            <img className="wrap-pic" src={item.image} alt="" />
            <Typography sx={{ fontSize: "13px" }}>{item.title}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1304px",
          height: "258px",
          mr: "122px",
        }}
      >
        {twopic.map((item, index) => (
          <img key={index} className="twopic" src={item.image} alt="" />
        ))}
      </Box>
      <Typography sx={{ mt: "25px", mr: "710px", fontSize: "20px" }}>
        پیشنهاد دیجی‌ کالا
      </Typography>
      <BasicGrid />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "1304px",
          height: "224px",
          backgroundColor: "red",
          flexDirection: "column",
          mr: "122px",
          mt: "24px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "1304px",
            height: "44px",
            backgroundColor: "green",
          }}
        >
          <StarRoundedIcon sx={{ color: "yellow" }} />
          <Typography sx={{ mr: "5px", fontSize: "20px" }}>
            محبوب‌ترین برندها
          </Typography>
        </Box>
      </Box>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "1304px",
          height: "388px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
          mr: "122px",
          mt: "24px",
          backgroundColor: "#941b80",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: "392px",
            height: "114px",
            pr: "24px",
            pt: "24px",
          }}
        >
          <img
            className="logo-jplus"
            src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg"
            alt=""
          />
          <Typography sx={{ fontSize: "14px", color: "white", mt: "4px" }}>
            خدمات ویژه برای اعضای جی‌ پلاس
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "105px",
              height: "35px",
              mt: "12px",
              padding: "4px 16px",
              border: "1px solid white",
              borderRadius: "8px",
            }}
          >
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              عضویت
            </Typography>
            <ArrowBackOutlinedIcon sx={{ color: "white" }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "868px",
            height: "356px",
            backgroundColor: "white",
            padding: "0px 16px",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "836px",
              height: "66.4px",
              padding: "16px 0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "152px",
                height: "35px",
                margin: "0px 0px 0px 16px",
              }}
            >
              <RocketOutlinedIcon
                sx={{ color: "#a63489", width: "24px", height: "24px" }}
              />
              <Typography sx={{ fontSize: "16px" }}>
                ارسال فوری رایگان
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "85px",
                height: "36px",
                color: "#a63489",
                padding: "0px 7px",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>مشاهده همه</Typography>
              <ArrowBackIosIcon sx={{ fontSize: "small" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "850px",
              height: "404px",
              mb: "12px",
            }}
          >
            <GridPurple />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "1304px",
          height: "87.2px",
          mr: "122px",
          mt: "8px",
          padding: "12px 16px",
          borderRadius: "16px",
          background:
            "linear-gradient(76.02deg,#35a6c8 33.32%,#007295 71.55%),radial-gradient(21.29% 87.33% at 50% 50.67%,#7cf2f6 0,#35a6c8 100%)",
        }}
      >
        <img
          className="digi-club"
          src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg"
          alt=""
        />
        <Box
          sx={{
            display: "flex",
            gap: "4px",
            overflow: "hidden",
            width: "811.99px",
            height: "63.2px",
            borderRadius: "8px",
            background: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              flexDirection: "row",
              width: "273.19px",
              height: "63.2px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                width: "85.99px",
                height: "26.4px",
                margin: "0px 16px 0px 0px",
              }}
            >
              <RiceBowlIcon sx={{ color: "#00bfd6", pr: "7px" }} />
              <Typography sx={{ fontSize: "12px", pr: "7px" }}>
                چرخ و بخت
              </Typography>
            </Box>
            <img
              className="charkh"
              src="https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.jpg"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              flexDirection: "row",
              width: "274.19px",
              height: "63.2px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                width: "85.99px",
                height: "26.4px",
                margin: "0px 16px 0px 0px",
              }}
            >
              <AddTaskIcon sx={{ color: "#00bfd6", pr: "7px" }} />
              <Typography sx={{ fontSize: "12px", pr: "7px" }}>
                ماموریت ها
              </Typography>
            </Box>
            <img
              className="charkh"
              src="https://www.digikala.com/statics/img/png/digiclub/missions.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              flexDirection: "row",
              width: "256.5px",
              height: "63.2px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                width: "85.99px",
                height: "26.4px",
                margin: "0px 16px 0px 0px",
              }}
            >
              <ConfirmationNumberOutlinedIcon
                sx={{ color: "#00bfd6", pr: "7px" }}
              />
              <Typography sx={{ fontSize: "12px", pr: "7px" }}>
                جایزه ها
              </Typography>
            </Box>
            <img
              className="charkh"
              src="https://www.digikala.com/statics/img/png/digiclub/awards.png"
              alt=""
            />
          </Box>
        </Box>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          width: "1304px",
          height: "403.7px",
          mt: "24px",
          mr: "122px",
          padding: "16px 0px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 20px",
            width: "1302.4px",
            height: "44.1px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "199.29px",
              height: "44.1px",
            }}
          >
            <LocalFireDepartmentOutlinedIcon sx={{ color: "#f9a825" }} />
            <Typography sx={{ fontSize: "18px", pr: "5px" }}>
              پرفروش‌ترین کالاها
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "1304px",
          height: "910.69px",
          mt: "24px",
          mr: "122px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
          padding: "0px 12px 12px",
        }}
      >
        <Box sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:"1278px",
          height:"76.1px",
          margin:"0px 0px 8px",
          padding:"16px 0px",
        }}>
          <LocalOfferOutlinedIcon sx={{color:"#ef4056"}}/>
          <Typography sx={{fontSize:"21px",mr:"8px"}}>منتخب محصولات تخفیف و حراج</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Index;

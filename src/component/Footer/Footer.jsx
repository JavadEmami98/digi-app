import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import FooterGrid from "./FooterGrid";

const rezvan = [
  { image: "https://www.digikala.com/statics/img/png/rezi.png" },
  { image: "https://www.digikala.com/statics/img/png/kasbokar.png" },
  {
    image: "https://www.digikala.com/statics/img/png/kasbokar.png",
  },
];

const picsft = [
  {
    image: "https://www.digikala.com/statics/img/svg/appStores/google-play.svg",
  },
  {
    image:
      "https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg",
  },
  { image: "https://www.digikala.com/statics/img/svg/appStores/myket.svg" },
  { image: "https://www.digikala.com/statics/img/svg/appStores/sib-app.svg" },
];

function Footer() {
  return (
    <div>
      <footer className="footer">
        <Box
          sx={{
            width: "100%",
            padding: "0px 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
           /*    height: "40px", */
              /* width: "100%", */
            }}
          >
            <img
              className="logo-fa"
              src="https://www.digikala.com/statics/img/svg/digi.svg"
              alt=""
              loading="lazy"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 16px",
              /*   width: "137.81px", */
       /*          height: "40px", */
                border: "1px solid #e0e0e6",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               /*    width: "104.21px",
                  height: "26.04px", */
                }}
              >
                <Typography
                  sx={{ fontSize: "12px", color: "#9e9fb1", ml: "8px" }}
                >
                  بازگشت به بالا
                </Typography>
                <KeyboardArrowUpOutlinedIcon sx={{ color: "#9e9fb1" }} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "12px",
              mb: "4px",
              flexWrap: "nowrap",
              /* width: "1160", */
             /*  height: "26.04px", */
              color: "#3f4064",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "#3f4064" }}>
              تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
            </Typography>
            <Box
              sx={{
                color: "#9e9fb1",
                pr: "20px",
                pl: "20px",
              }}
            >
              |
            </Box>
            <Typography sx={{ fontSize: "14px", color: "#3f4064" }}>
              ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
            </Typography>
          </Box>
          <Box
            sx={{
              display: {xl:"flex",lg:"flex",md:"flex",sm:"none",xs:"none"},
              justifyContent: "space-between",
              alignItems: "center",
              /* width: "100%", */
              /* maxwidth: "1160px", */
           /*    height: "103.86px", */
              margin: "32px 0",
              padding:"0px 110px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
               /*  width: "100%", */
             /*    height: "103.86px", */
                padding: "12px 0",
              }}
            >
              <img
                src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg"
                alt=""
              />
              <Typography sx={{ fontSize: "10px", color: "#3f4064" }}>
                اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
              /*   width: "100%", */
        /*         height: "103.86px", */
                padding: "12px 0",
              }}
            >
              <img
                src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg"
                alt=""
              />
              <Typography sx={{ fontSize: "10px", color: "#3f4064" }}>
                امکان پرداخت در محل
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                /* width: "100%", */
     /*            height: "103.86px", */
                padding: "12px 0",
              }}
            >
              <img
                src="https://www.digikala.com/statics/img/svg/footer/support.svg"
                alt=""
              />
              <Typography sx={{ fontSize: "10px", color: "#3f4064" }}>
                ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                /* width: "100%", */
          /*       height: "103.86px", */
                padding: "12px 0",
              }}
            >
              <img
                src="https://www.digikala.com/statics/img/svg/footer/days-return.svg"
                alt=""
              />
              <Typography sx={{ fontSize: "10px", color: "#3f4064" }}>
                هفت روز ضمانت بازگشت کالا
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
               /*  width: "100%", */
        /*         height: "103.86px", */
                padding: "12px 0",
              }}
            >
              <img
                src="https://www.digikala.com/statics/img/svg/footer/original-products.svg"
                alt=""
              />
              <Typography sx={{ fontSize: "10px", color: "#3f4064" }}>
                ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
              </Typography>
            </Box>
          </Box>
          <FooterGrid />
          <Box
            sx={{
              display: "flex",
              flexDirection:{sm:"column",xs:"column",md:"column",lg:"row", xl:"row"},
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 20px",
            /*   width: "100%", */
             /*  height: "76px", */
              mb: "28px",
              borderRadius: "8px",
              background: "#3c4b6d",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
          /*       width: "100%", */
                maxWidth: "250px",
         /*        height: "44.1px", */
              }}
            >
              <img
                className="logo-r"
                src="https://www.digikala.com/statics/img/png/footerlogo2.png"
                alt=""
                loading="lazy"
              />
              <Typography sx={{ mr: "16px", fontSize: "18px", color: "white" }}>
                دانلود اپلیکیشن دیجی‌کالا
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                /* maxWidth: "831.96px",
                width: "100%", */
       /*          height: "60px", */
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  /* justifyContent: "flex-end", */
                  flexWrap: "wrap",
             /*      maxWidth: "771.96px", */
              /*     width: "100%", */
             /*      height: "60px", */
                }}
              >
                {picsft.map((item, index) => (
                  <img
                    key={index}
                    className="pic-4ft"
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />
                ))}
              </Box>
              <Box
                sx={{
                  maxWidth: "44px",
                  height: "44px",
                  borderRadius: "4px",
                  mr: "16px",
                  background: "white",
                }}
              >
                <img
                  className="senoghte"
                  src="https://www.digikala.com/statics/img/svg/More.svg"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection:{sm:"column",xs:"column",md:"column",lg:"row", xl:"row"},
              alignItems: "center",
              width: "100%",
             /*  maxWidth: "1481.6px", */
            /*   height: "223.84px", */
              padding: "32px 0px",
              borderTop: "1px solid aliceblue",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "block",
                ml: "40px",
                /* height: "159px", */
                color: "#767790",
                overflow: "hidden",
              }}
            >
              <Typography sx={{ fontSize: "20px", color: "#5a5c7a" }}>
                فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#767790" }}>
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
                مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
                که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
                توانسته از این طریق مشتریان ثابت خود را داشته باشد.
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#767790" }}>
                کدام محصولات در دیجی‌کالا قابل سفارش هستند؟
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  mt: "8px",
        /*           width: "91.99px", */
                /*   height: "26.04px", */
                  color: "#19bfd3",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ fontSize: "10px" }}>مشاهده بیشتر</Typography>
                <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "small" }} />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                /* justifyContent: "flex-end", */
               /*  width: "100%", */
              /*   maxWidth: "387.4px",
                height: "108.6px", */
                mt: "4px",
              }}
            >
              {rezvan.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                /*     justifyContent: "center", */
                    border: "1px solid #e0e0e6",
                    borderRadius: "8px",
                    mr: "8px",
                    padding: "16px",
         /*            width: "108.6px",
                    height: "108.6px", */
                  }}
                >
                  <img
                    className="rezvan"
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
              padding: "32px 0px",
              borderTop: "1px solid aliceblue",
              color: "#767790",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>
              برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
              کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
              (فروشگاه آنلاین دیجی‌کالا) است.
            </Typography>
          </Box>
        </Box>
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import { Box, Container, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridProdudct from "../component/GridProduct/GridProdudct";

const names = [
  { title: "رنگ" },
  { title: "محدوده قیمت" },
  { title: "نوع فروشنده" },
  { title: "نوع" },
  { title: "شبکه های ارتباطی" },
  { title: "پشتیبانی از کارت حافظه" },
  { title: "دوربین‌های پشت گوشی" },
  { title: "تعداد سیم کارت" },
  { title: "فن‌آوری موبایل" },
  { title: "توضیحات سیم کارت" },
  { title: "نوع پردازنده" },
  { title: "فناوری فوکوس" },
  { title: "قابلیت‌های نرم‌افزاری" },
  { title: "ویژگی‌های خاص" },
  { title: "موسیقی" },
  { title: "ویدیو" },
  { title: "فناوری صفحه‌نمایش" },
  { title: "سیستم عامل" },
  { title: "محافظت" },
  { title: "دسته ‌بندی" },
  { title: "حافظه داخلی" },
];

function Product() {
  return (
    <div>
      <Banner />
      <Header />
      <Container maxWidth="100%">
        <nav>
          <Box
            sx={{
              height: "66.04px",
              padding: "20px 0px",
              display: "block",
              background: "red",
            }}
          >
            swiper swiper swiper =
          </Box>
        </nav>
        {/* Flex All */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding:"12px 0px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #e0e0e6",
              borderRadius: "8px",
              height: "auto",
              padding: "16px 20px",
              width: "20%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "18px" }}>فیلتر ها</Typography>
              <Typography sx={{ color: "#19bfd3", fontSize: "14px" }}>
                حذف فیلترها
              </Typography>
            </Box>
            {names.map((item,index)=>(
            <Box 
            key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                padding: "20px 12px",
                borderBottom: "1px solid #f1f2f4",
              }}
            >
              <Typography>{item.title}</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#9e9fb1" }} />
            </Box>))}
          </Box>
          <Box sx={{mr:"15px",mt:"12px"}}>
            <GridProdudct />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Product;

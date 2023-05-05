import React from "react";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import { Box, Container, Typography } from "@mui/material";
import GridProdudct from "../component/GridProduct/GridProdudct";
import { Sort } from "@mui/icons-material";
import Filter from "../component/Filter/Filter";



const filter = [
  { title: "مرتبط‌ ترین" },
  { title: "پربازدیدترین" },
  { title: "جدید ترین" },
  { title: "ارزان ‌ترین" },
  { title: "گران‌ ترین" },
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
              display: "flex",
           /*    background: "red", */
            }}
          >
   
            <Typography sx={{ml:"5px"}}>فروشگاه اینترنتی دیجی‌کالا</Typography> /
            <Typography sx={{mr:"5px"}}>موبایل</Typography>
          </Box>
        </nav>
        {/* Flex All */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "12px 0px",
          }}
        >
          <Filter/>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50.04px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
         /*          background: "gray", */
                  mr: "15px",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Sort />
                  <Typography sx={{ mr: "5px" }}>مرتب سازی: </Typography>
                </Box>
                <Typography sx={{ color: "#ef394e" }}>پرفروش‌ ترین‌</Typography>{" "}
                {filter.map((item, index) => (
                  <Typography key={index}>{item.title} </Typography>
                ))}
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", fontSize: "12px" }}
              >
                <Typography sx={{ fontSize: "14px" }}>808 کالا</Typography>
              </Box>
            </Box>
            <Box sx={{ mr: "15px", mt: "12px" }}>
              <GridProdudct />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Product;

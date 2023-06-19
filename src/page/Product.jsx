import React, { useState } from "react";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import { Box, Container, Typography } from "@mui/material";
import GridProdudct from "../component/GridProduct/GridProdudct";
import { Sort } from "@mui/icons-material";
import Filter from "../component/Filter/Filter";
import SearchMobile from "../component/SearchMobile/SearchMobile";
import HeaderMobile from "../component/HeaderMobile/HeaderMobile";
import LocMobile from "../component/LocationMobile/LocMobile";

const filter = [
  { title: "پرفروش‌ ترین‌", id: 7 },
  { title: "مرتبط‌ ترین", id: 0 },
  { title: "پربازدیدترین", id: 1 },
  { title: "جدید ترین", id: 2 },
  { title: "ارزان ‌ترین", id: 3 },
  { title: "گران‌ ترین", id: 4 },
];

function Product() {
  const [active, setActive] = useState(7);
  return (
    <div>
      <Banner />
      <Box sx={{ display: { md: "none", xs: "none",sm:"none",lg:"block",xl:"block"}}}>
        <Header />
      </Box>
      
      <Container maxWidth="xl">
      <Box sx={{ display: { md: "block", xs: "block",sm:"block",lg:"none",xl:"none"}}}>
      <HeaderMobile/>
        <SearchMobile/>
        <LocMobile/></Box>
        <nav>
          <Box
            sx={{
              height: "66.04px",
              padding: "20px 0px",
              display: "flex",
              /*    background: "red", */
            }}
          >
            <Typography sx={{ ml: "5px" }}>
              فروشگاه اینترنتی دیجی‌کالا
            </Typography>
            /<Typography sx={{ mr: "5px" }}>موبایل</Typography>
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
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Filter />
          </Box>

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
                  display: { md: "flex", xs: "none" },
                  /*          background: "gray", */
                  mr: "15px",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Sort />
                  <Typography sx={{ mr: "5px" }}>مرتب سازی: </Typography>
                </Box>
                {filter.map((item, index) => (
                  <Typography
                  sx={{cursor:"pointer"}}
                    key={index}
                    id="7"
                    onClick={() => setActive(item.id)}
                    className={` ${active === item.id ? "red" : "black"}`}
                  >
                    {item?.title}
                  </Typography>
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

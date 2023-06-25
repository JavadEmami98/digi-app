import { Box, Grid } from "@mui/material";
import React from "react";
import CartF from "./CartF";

const cartf = [
  {
    image:
      "https://www.digikala.com/mag/wp-content/uploads/2023/04/Build-a-Cheap-Desktop-Computer--610x380.jpg",
    title: "چگونه یک کامپیوتر رومیزی ارزان اما کاربردی اسمبل کنیم؟",
  },
  {
    image:
      "https://www.digikala.com/mag/wp-content/uploads/2023/03/DK-Mag-Popular-Tablets-1402-610x380.jpg",
    title: "۱۰ تبلت محبوب در دیجی کالا (۴ اردیبهشت ۱۴۰۲)",
  },
  {
    image:
      "https://www.digikala.com/mag/wp-content/uploads/2023/04/01.23-11-610x380.jpg",
    title: "بررسی عینک آفتابی مانگو مدل m3518 c19؛ شیک و سبک",
  },
  {
    image:
      "https://www.digikala.com/mag/wp-content/uploads/2023/04/01.25-7-610x380.jpg",
    title: "بررسی اسپیکر بلوتوثی انکر Select 2؛ مکعب دوست‌داشتنی",
  },
];

function GridF() {
  return (
    <div>
      <Box sx={{ flexGrow: 1,width:"100%",height:"100%"}}>
        <Grid container spacing={2} style={{justifyContent:"center"}}>
          {cartf.map((item, index) => (
            <Grid key={index} item lg={3} xl={3} md={3} sm={12} xs={12}>
              <CartF title={item.title} image={item.image} />
            </Grid>
          ))}
          {/*  
          <Grid item lg={3}>
            Hi
          </Grid>
          <Grid item lg={3}>
            Hi
          </Grid>
          <Grid item lg={3}>
            Hi
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}

export default GridF;

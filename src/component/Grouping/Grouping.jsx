import { Box, Typography } from "@mui/material";
import React from "react";

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

function Grouping() {
  return (
    <div>
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
    </div>
  );
}

export default Grouping;

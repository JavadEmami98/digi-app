import { Box, Typography } from "@mui/material";
import React from "react";

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

function Digit() {
  return (
    <div>
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
    </div>
  );
}

export default Digit;

import React from "react";
import { Box, Typography } from "@mui/material";

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

function Categories() {
  return (
    <div>
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
    </div>
  );
}

export default Categories;

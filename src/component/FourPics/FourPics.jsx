import { Box } from "@mui/material";
import React from "react";

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

function FourPics() {
  return (
    <div>
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
    </div>
  );
}

export default FourPics;

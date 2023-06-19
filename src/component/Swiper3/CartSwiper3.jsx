import { Box } from "@mui/material";
import React from "react";
import "./Swiper3.css";

function CartSwiper3({image}) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
  /*         justifyContent: "center", */
       /*    width: "142px", */
          height: "118px",
         /*  overflow: "hidden", */
          padding:"4px 10px",
        }}
      >
        <Box sx={{
          display: "flex",
         /*  alignItems: "center", */
        /*   justifyContent: "center", */
          /* width: "110px", */
         /*  height: "110px", */
          /* overflow: "hidden", */
        }}>
        <img className="swiper3-img" src={image} alt="" />
        </Box>

      </Box>
    </div>
  );
}

export default CartSwiper3;

import { Box, Typography } from "@mui/material";
import React from "react";
import Grid44 from "../Grid44/Grid44";

function CartGrid() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "325px",
          height: "418px",
          background: "red",
          padding:"8px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "285px",
            height: "35px",
          }}
        >
          گوشی موبایل
        </Box>
        <Typography sx={{fontSize:"11px" ,color:"#767790"}}>بر اساس بازدیدهای شما</Typography>
        <Grid44/>
      </Box>
    </div>
  );
}

export default CartGrid;

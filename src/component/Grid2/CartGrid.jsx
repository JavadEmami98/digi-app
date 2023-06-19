import { Box, Typography } from "@mui/material";
import React from "react";
import Grid44 from "../Grid44/Grid44";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

function CartGrid({ title }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "8px 20px",
          /*      border: "1px solid #e0e0e6", */
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            fontSize: "17px",
          }}
        >
          {title}
        </Box>

        <Typography sx={{ fontSize: "11px", color: "#767790", my: "5px" }}>
          بر اساس بازدیدهای شما
        </Typography>
        <Grid44 />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "4px 0px 12px",
            /*     width: "284.85px",
            height: "26.04px", */
            color: "#19bfd3",
          }}
        >
          <Typography sx={{ cursor: "pointer" }}>مشاهده</Typography>
          <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "small" }} />
        </Box>
      </Box>
    </div>
  );
}

export default CartGrid;

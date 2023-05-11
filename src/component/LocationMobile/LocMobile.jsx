import { Box, Typography } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";

function LocMobile() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 0 4px",
          mt: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FmdGoodIcon sx={{ color: "#f9a825" }} />
          <Typography sx={{ fontSize: "12px", color: "#5a5c7a", mr: "5px" }}>
            لطفا شهر خود را انتخاب کنید
          </Typography>
        </Box>
        <ArrowBackIosIcon sx={{ padding: "4px" }} />
      </Box>
    </div>
  );
}

export default LocMobile;

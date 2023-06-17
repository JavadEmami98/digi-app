import { Box, Typography } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
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
          padding: "8px 0px",
          mt: "8px",
          borderBottom:"1px solid #f1f2f4"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlaceOutlinedIcon sx={{ color: "#f9a825" }} />
          <Typography sx={{ fontSize: "13px", color: "#5a5c7a", mr: "5px",fontWeight:400 }}>
            لطفا شهر خود را انتخاب کنید
          </Typography>
        </Box>
        <ArrowBackIosIcon sx={{ padding: "4px" }} />
      </Box>
    </div>
  );
}

export default LocMobile;

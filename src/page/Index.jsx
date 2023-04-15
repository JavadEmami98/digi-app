import React from "react";
import { Box, Typography } from "@mui/material";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./first.css";
function Index() {
  return (
    <div>
      <img
        className="header-pic"
        src="/image/header.jpg"
        alt=""
        loading="lazy"
      />
      <div className="logo-line">
        <img className="logo" src="/image/logo.svg" alt="" loading="lazy" />
        <input className="input" type="text" placeholder="جستجو" />
        <div className="head-left">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "134px",
              height: "40px",
              backgroundColor: "white",
              border: "1px solid #e0e0e6",
              mr: "5px",
              borderRadius: "8px",
            }}
          >
            <InputOutlinedIcon sx={{ mr: "15px" }} />
            <Typography sx={{ ml: "10px" }}>ورود | ثبت نام</Typography>
          </Box>
          <Typography> | </Typography>
          <ShoppingCartOutlinedIcon sx={{ ml: "7px" }} />
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "40px",
          fontSize: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "142.05px",
            height: "30px",
            fontSize: "12px",
          }}
        >
          <MenuOutlinedIcon sx={{ mr: "15px" }} />
          <Typography sx={{ ml: "10px" }}>دسته‌بندی کالاها</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "173px",
            height: "40px",
            fontSize: "12px",
            ml: "16px",
            paddingRight: "10px",
            paddingLeft: "5px",
          }}
        >
          <LocationOnOutlinedIcon />
          <Typography sx={{ fontSize: "12px" }}>
            لطفا شهر خود را انتخاب کنید
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Index;

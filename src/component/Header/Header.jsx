import React from "react";
import { Badge, Box, Typography } from "@mui/material";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StoreIcon from "@mui/icons-material/Store";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="logo-line">
        <img className="logo" src="/image/logo.svg" alt="" loading="lazy" />
        <Box
          sx={{
            display: "flex",
            width: "600px",
            height: "44px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchIcon
            sx={{
              position: "absolute",
              right: "170px",
              top: "22px",
              zIndex: 10,
              color: "#9e9fb1",
            }}
          />
          <input className="input" type="text" placeholder="جستجو" />
        </Box>

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
          <Badge badgeContent={4} color="error">
            <ShoppingCartOutlinedIcon sx={{ ml: "7px" }} />
          </Badge>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          height: "40px",
          fontSize: "12px",
          borderBottom: "1px solid  #e0e0e6",
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
          <Typography sx={{ ml: "10px", fontSize: "11px" }}>
            دسته‌بندی کالاها
          </Typography>
        </Box>
        |
        <Box
          sx={{
            display: "flex",
            /* justifyContent: "space-between", */
            alignItems: "center",
            ml: "595px",
            width: "770px",
            height: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "110px",
              height: "40px",
            }}
          >
            <StoreIcon
              sx={{ mr: "10px", paddingRight: "5px", color: "#5a5c7a" }}
            />
            <Typography sx={{ fontSize: "12px", pl: "15px", color: "#5a5c7a" }}>
              سوپرمارکت
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "115px",
              height: "40px",
            }}
          >
            <WhatshotOutlinedIcon
              sx={{ mr: "8px", paddingRight: "5px", color: "#5a5c7a" }}
            />
            <Typography sx={{ fontSize: "10px", pl: "15px", color: "#5a5c7a" }}>
              پرفروش ترینها
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "125px",
              height: "40px",
            }}
          >
            <PercentOutlinedIcon
              sx={{ mr: "8px", paddingRight: "5px", color: "#5a5c7a" }}
            />
            <Typography sx={{ fontSize: "9px", pl: "15px", color: "#5a5c7a" }}>
              تخفیف‌ها و پیشنهادها
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "110px",
              height: "40px",
            }}
          >
            <LocalOfferOutlinedIcon
              sx={{ mr: "10px", paddingRight: "5px", color: "#5a5c7a" }}
            />
            <Typography sx={{ fontSize: "10px", pl: "15px", color: "#5a5c7a" }}>
              شگفت‌انگیزها
            </Typography>
          </Box>
          <Box
            sx={{
              mr: "7px",
            }}
          >
            |
          </Box>
          <Box sx={{ marginRight: "15px", color: "#5a5c7a" }}>
            <Link>سوالی دارید؟ </Link>
          </Box>
          <Typography sx={{ fontSize: "10px", color: "#5a5c7a", mr: "25px" }}>
            در اینجا بفروشید!
          </Typography>
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
          <LocationOnOutlinedIcon
            sx={{ pr: "4px", mr: "8px", color: "#5a5c7a" }}
          />
          <Typography sx={{ fontSize: "9px", color: "#5a5c7a" }}>
            لطفا شهر خود را انتخاب کنید
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Header;

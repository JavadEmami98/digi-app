import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import GirdPurpleMobile from "../GridPurpleMobile/GirdPurpleMobile";

function DigiPlusMobile() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#941b80",
          paddingTop: "24px",
          mt: "16px",
          height: "738px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            pr: "12px",
            minHeight: "355px",
          }}
        >
          <img
            className="logo-jplus"
            src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg"
            alt=""
          />
          <Typography sx={{ fontSize: "14px", color: "white", mt: "4px" }}>
            خدمات ویژه برای اعضای جی‌ پلاس
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "105px",
              height: "35px",
              mt: "12px",
              padding: "4px 16px",
              border: "1px solid white",
              borderRadius: "8px",
            }}
          >
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              عضویت
            </Typography>
            <ArrowBackOutlinedIcon sx={{ color: "white" }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: "#fff",
            height: "327px",
            p: "0px 12px",
            borderRadius: "8px",
            overflow: "hidden",
            margin: "7px 7px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "52px",
              flexDirection: "row",
              padding:"12px 0px"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", height: "52" }}>
              <RocketOutlinedIcon
                sx={{ color: "#a63489", height: "24px", ml: "5px" }}
              />
              <Typography sx={{ fontSize: "14px" }}>
                ارسال فوری رایگان
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "52",
                color: "#b12ba4",
              }}
            >
              <Typography sx={{ fontSize: "14px", color: "#b12ba4" }}>
                مشاهده همه
              </Typography>
              <ArrowBackIosIcon sx={{ fontSize: "small" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "273pxpx",
            }}
          >
            <GirdPurpleMobile />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default DigiPlusMobile;

{
  /* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "52px",
              flexDirection: "row",
            }}
          >
            <RocketOutlinedIcon
              sx={{ color: "#a63489", height: "24px", ml: "5px" }}
            />
            <Typography sx={{ fontSize: "18px" }}>ارسال فوری رایگان</Typography>
          
            <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "52px",
              flexDirection: "row",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>مشاهده همه</Typography>
            <ArrowBackIosIcon sx={{ fontSize: "small" }} />
          </Box>
          </Box> */
}

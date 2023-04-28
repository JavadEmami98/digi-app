import { Box, Typography } from '@mui/material'
import GridPurple from '../GridPurple/GridPurple'
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from 'react';


function DigiPlus() {
  return (
    <div>
        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "1304px",
          height: "388px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
          mr: "122px",
          mt: "24px",
          backgroundColor: "#941b80",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: "392px",
            height: "114px",
            pr: "24px",
            pt: "24px",
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
            alignItems: "center",
            width: "868px",
            height: "356px",
            backgroundColor: "white",
            padding: "0px 16px",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "836px",
              height: "66.4px",
              padding: "16px 0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "152px",
                height: "35px",
                margin: "0px 0px 0px 16px",
              }}
            >
              <RocketOutlinedIcon
                sx={{ color: "#a63489", width: "24px", height: "24px" }}
              />
              <Typography sx={{ fontSize: "16px" }}>
                ارسال فوری رایگان
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "85px",
                height: "36px",
                color: "#a63489",
                padding: "0px 7px",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>مشاهده همه</Typography>
              <ArrowBackIosIcon sx={{ fontSize: "small" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "850px",
              height: "404px",
              mb: "12px",
            }}
          >
            <GridPurple />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default DigiPlus
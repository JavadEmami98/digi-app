import { Box, Typography } from "@mui/material";
import React from "react";
import Swiper4 from "../Swiper4/Swiper4";
import { Link } from "react-router-dom";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";

function BestSelling() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
         /*  width: "1304px", */
          height: "403.7px",
          mt: "24px",
          padding: "16px 0px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 20px",
            width: "1302.4px",
            height: "44.1px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "199.29px",
              height: "44.1px",
            }}
          >
            <LocalFireDepartmentOutlinedIcon sx={{ color: "#f9a825" }} />
            <Typography sx={{ fontSize: "18px", pr: "5px" }}>
              پرفروش‌ ترین کالاها
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              /* width: "92.53", */
              height: "30.1",
              pl: "16px",
              right: "330px",
              top: "0px",
              color: "#19bfd3",
            }}
          >
            <Link to={"www.google.com"}>مشاهده همه</Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "block",
            margin: "0px auto",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            maxWidth: "1286px",
            width: "100%",
            height: "298px",
          }}
        >
          <Swiper4 />
        </Box>
      </Box>
    </div>
  );
}

export default BestSelling;

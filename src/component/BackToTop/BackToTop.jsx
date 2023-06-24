import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 16px",
        /*   width: "137.81px", */
        /*          height: "40px", */
        border: "1px solid #e0e0e6",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          /*    width: "104.21px",
                  height: "26.04px", */
        }}
      >
        <Typography sx={{ fontSize: "12px", color: "#9e9fb1", ml: "8px" }}>
          بازگشت به بالا
        </Typography>
        <KeyboardArrowUpOutlinedIcon sx={{ color: "#9e9fb1" }} />
      </Box>
    </Box>
  );
};

export default BackToTopButton;

import { Box, Typography } from "@mui/material";
import React from "react";
import GridOffer from "../GridOffer/GridOffer";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

function Offer() {
  return (
    <div>
      <Box
        sx={{
       /*    width: "1304px", */
       
          mt: "24px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
          padding: "0px 12px 12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "76.1px",
            margin: "0px 0px 8px",
            padding: "16px 0px",
          }}
        >
          <LocalOfferOutlinedIcon sx={{ color: "#ef4056" }} />
          <Typography sx={{ fontSize: "21px", mr: "8px" }}>
            منتخب محصولات تخفیف و حراج
          </Typography>
        </Box>
        <GridOffer />
      </Box>
    </div>
  );
}

export default Offer;

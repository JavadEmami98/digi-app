import { Box, Typography } from "@mui/material";
import React from "react";

function CartF({ title, image }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e0e0e6",
          borderRadius: "8px",
          overflow: "hidden",
          cursor:"pointer"
        }}
      >
        <img className="pics-up-footer" src={image} alt="" loading="lazy" />
        <Box
          sx={{
            width:"100%",
            height: "52.08",
            color: "#080a38",
            textAlign: "right",
            padding: "0px 16px",
            margin: "8px 0px 12px",
          }}
        >
          <Typography sx={{ fontSize: "12px",typography: "body2", }}>{title}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default CartF;

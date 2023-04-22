import { Box, Typography } from "@mui/material";
import React from "react";
import "./Cart.css";



function Cart({price,image,dicount}) {
  return (
    <div>
      
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "182px",
            height: "246px",
          }}
        >
          <div className="img-sw">
            <img src={image} alt="" loading="lazy" />
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "150px",
              height: "34px",
              mt: "5px",
            }}
          >
            <Typography
              sx={{
                width: "34px",
                height: "20px",
                backgroundColor: "red",
                mt: "5px",
                borderRadius: "16px",
                fontSize: "12px",
              }}
            >
              {dicount}
            </Typography>
            <Typography sx={{ mt: "5px", fontSize: "14px" }}>
              {price}
            </Typography>
          </Box>
        </Box>
     
    </div>
  );
}

export default Cart;

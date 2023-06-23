import { Box, Typography } from "@mui/material";
import React from "react";
import "./Cart.css";



function Cart({price,image,dicount,offer}) {
  return (
    <div>
      
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "182px",
            height: "246px",
            cursor:"pointer"
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
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                width: "34px",
                height: "20px",
                backgroundColor: "#ef394e",
                mt: "5px",
                borderRadius: "16px",
                fontSize: "12px",
                color:"#fff"
              }}
            >
              {dicount}
            </Typography>
            <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography sx={{ mt: "5px", fontSize: "14px" }}>
              {price}
            </Typography>
            <Typography  sx={{ mt: "5px", fontSize: "12px",color:"#c3c3ce",textDecoration: "line-through"}}>{offer}</Typography>
            </Box>
          </Box>
        </Box>
     
    </div>
  );
}

export default Cart;

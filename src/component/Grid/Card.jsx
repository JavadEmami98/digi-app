import { Box, Typography } from "@mui/material";
import React from "react";
import "./Card.css";



function Card({title,image}) {
  return (
    <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            /* background: "green", */
            width: "186px",
            height: "155px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "84px",
              height: "84px",
              background: "white",
              borderRadius: "50%",
            }}
          >
            <img className="grid-7" src={image} alt="" />
          </Box>
          <Typography sx={{ mt: "5px" }}> {title} </Typography>
        </Box>
    </div>
  );
}

export default Card;

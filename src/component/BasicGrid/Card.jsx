import { Box, Typography } from "@mui/material";
import React from "react";
import "./Card.css";

function Card({ title, image }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          /* background: "green", */
          /*  width: "186px", */
          height: "154px",
          outline: "1px solid #ccc",
          cursor: "pointer",
          overflow: "hidden",

          img: {
            transition: "all ease-in 300ms ",
          },
          ":hover": {
            img: {
              transform: "scale(1.2)",
              transition: "all ease-in 300ms ",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            /*   width: "84px",
            height: "84px", */
            background: "white",
            borderRadius: "50%",
          }}
        >
          <img className="grid-7" src={image} alt="" />
        </Box>
        <Typography sx={{ mt: "5px" }}> {title} </Typography>
      </Box>
    </>
  );
}

export default Card;

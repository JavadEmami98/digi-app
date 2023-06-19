import { Box } from "@mui/material";
import React from "react";

function Cart44({ image }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img className="pic-44" src={image} alt="" />
      </Box>
    </div>
  );
}

export default Cart44;

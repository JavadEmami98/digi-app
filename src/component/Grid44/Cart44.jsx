import { Box } from "@mui/material";
import React from "react";




function Cart44({image}) {
  return (
    <div>
     {/*  {PICTURES.map((item,index)=>( */}
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "142px",
          height: "147px",
        }}
      >
        <img className="pic-44" src={image} alt="" />
      </Box>
    {/*   ))} */}
      
    </div>
  );
}

export default Cart44;

import { Box } from "@mui/material";
import React from "react";


function FourPics({image}) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between", 
          mt: "15px",
          width:"100%"
        }}
      >
          <img className="four-pic" src={image} alt="" style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"15px",
        }}/>
      </Box>
    </div>
  );
}

export default FourPics;

import { Box, Typography } from '@mui/material'
import React from 'react'
import Swiper3 from '../Swiper3/Swiper3'
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Popular() {
  return (
    <div>
         <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          /* width: "1304px", */
         /*  height: "224px", */
          flexDirection: "column",
          mt: "24px",
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
      
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            /* Maxwidth: "1304px", */
          /*   width: "100%", */
          /*   height: "44px", */
            mt: "15px",
          }}
        >
          <StarRoundedIcon sx={{ color: "yellow" }} />
          <Typography sx={{ mr: "5px", fontSize: "20px" }}>
            محبوب‌ترین برندها
          </Typography>
        </Box>
        <Swiper3 />
      </Box>
    </div>
  )
}

export default Popular
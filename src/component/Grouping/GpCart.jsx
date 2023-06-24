import { Box, Typography } from '@mui/material'
import React from 'react'

function GpCart({image, title}) {
  return (
    <div>
        
          <Box   
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              /* width: "212px", */
              /* height: "205px", */
              backgroundColor: "#white",
              cursor:"pointer",
              img: {
                transition: "all ease-in 350ms ",
              },
              ":hover": {
                img: {
                  transform: "scale(1.2)",
                  transition: "all ease-in 350ms ",
                },
              },
            }}
          >
            <img className="wrap-pic" src={image} alt="" />
            <Typography sx={{ fontSize: "11px",typography: "body2",}}>{title}</Typography>
          </Box>
        
    </div>
  )
}

export default GpCart
import { Box, Grid } from '@mui/material';
import React from 'react'



function TwoPics({data}) {
  return (
    <div>
      {/*   <Box
        sx={{
          display: "flex",
          flexDirection:{xs:"column",sm:"column",md:"column",lg: "row",xl: "row"},
          alignItems: "center",
          justifyContent: "space-between",
       
          height: "258px",
        }}
      >
        {twopic.map((item, index) => (
          <img key={index} className="twopic" src={item.image} alt="" />
        ))}
      </Box> */}
        <Box sx={{mt:"20px"}}>
        <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
         <img key={index} className="twopic" src={item.image} alt="" />
          </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default TwoPics
import { Box, Grid } from '@mui/material';
import React from 'react'

const twopic = [
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/c0d274defc8c3006fe3f8b35290fd207d50d9740_1681405346.jpg?x-oss-process=image/quality,q_95",
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/46ff3ba5b960203023beb0c3e19df5b9d65b22df_1681405803.jpg?x-oss-process=image/quality,q_95",
    },
  ];

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
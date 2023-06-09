import { Box, Grid } from '@mui/material'
import React from 'react'
import FourPics from './FourPics';

const fourpic = [
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/0bf471872d71cfbfd6351b3e183920180fb6c3dc_1681114971.jpg?x-oss-process=image/quality,q_95",
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/3f03bfd2649b2bd7978b2dd33b5e4b16a6ce91b9_1681534434.jpg?x-oss-process=image/quality,q_95",
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/2cb745516a58547e5eddd9ddf4ac08cf2d55ea70_1681540637.jpg?x-oss-process=image/quality,q_95",
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/6622444e1f351dbc7b5e25bd753a26ce547df04c_1681713343.jpg?x-oss-process=image/quality,q_95",
    },
  ];
  

function GridFour() {
  return (
    <div>
        <Box sx={{ flexGrow: 1,width:"100%"}}>
      <Grid container spacing={1.2}>
      {fourpic.map((item, index) => (
        <Grid key={index} item sm={6} xs={6} md={6} lg={3} xl={3}>
         <FourPics image={item.image}/>
        </Grid>))}
      </Grid>
      </Box>
    </div>
  )
}

export default GridFour
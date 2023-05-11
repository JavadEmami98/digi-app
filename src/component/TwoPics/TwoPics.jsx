import { Box } from '@mui/material';
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

function TwoPics() {
  return (
    <div>
        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          /* width: "1304px", */
          height: "258px",
        }}
      >
        {twopic.map((item, index) => (
          <img key={index} className="twopic" src={item.image} alt="" />
        ))}
      </Box>
    </div>
  )
}

export default TwoPics
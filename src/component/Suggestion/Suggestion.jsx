import { Box, Typography } from "@mui/material";
import React from "react";
import BasicSwiper from "../BasicSwiper/BasicSwiper";


function Suggestion() {
  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center",mt:"25px" }}
      >
        <Typography sx={{ fontSize: "20px" }}>پیشنهاد دیجی‌ کالا</Typography>
      </Box>

      <BasicSwiper />
    </div>
  );
}

export default Suggestion;




/* <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={0}
        sx={{Maxwidth: "1304px", width:"100%", height: "315px", mt: "10px",border: "1px solid #e0e0e6", borderRadius:"16px"}}
      >
        {card.map((item, index) => (
          <Grid item lg={2} key={index}>
            <Card title={item.title} image={item.image} />
          </Grid>
        ))}  
      </Grid>
    </Box> */

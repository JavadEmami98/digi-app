import { Box, Grid } from "@mui/material";
import React from "react";
import CartProduct from "./CartProduct";

function GridProdudct() {
  return (
    <div>
      <Box >
        <Grid container spacing={0.2} >
          <Grid item lg={3} sx={{border:"1px solid  #e0e0e6"}}>
            <CartProduct />
          </Grid>
          <Grid item lg={3} sx={{border:"1px solid  #e0e0e6"}}>
          <CartProduct />
          </Grid>
          <Grid item lg={3} sx={{border:"1px solid  #e0e0e6"}}>
          <CartProduct />
          </Grid>
          <Grid item lg={3} sx={{border:"1px solid  #e0e0e6"}}>
          <CartProduct />
          </Grid >
          <Grid item lg={3} sx={{border:"1px solid  #e0e0e6"}}>
          <CartProduct />
          </Grid>
          <Grid item lg={3} sx={{border:"1px solid  #e0e0e6"}}>
          <CartProduct />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GridProdudct;

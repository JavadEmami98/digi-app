import { Box, Grid } from "@mui/material";
import React from "react";
import CartProduct from "./CartProduct";

function GridProdudct() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 , background:"black"}}>
        <Grid container spacing={1} sx={{  }}>
          <Grid item lg={3}>
            <CartProduct />
          </Grid>
          <Grid item lg={3}>
          <CartProduct />
          </Grid>
          <Grid item lg={3}>
          <CartProduct />
          </Grid>
          <Grid item lg={3}>
          <CartProduct />
          </Grid>
          <Grid item lg={3}>
          <CartProduct />
          </Grid>
          <Grid item lg={3}>
          <CartProduct />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GridProdudct;

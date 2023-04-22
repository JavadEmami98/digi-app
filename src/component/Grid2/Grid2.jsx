import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CartGrid from './CartGrid';


export default function Grid2() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <CartGrid/>
          </Grid>
          <Grid item lg={3}>
            dvsdfsd
          </Grid>
          <Grid item lg={3}>
            dvsdfsd
          </Grid>
          <Grid item lg={3}>
            dfdsfdgvsd
          </Grid>
        </Grid>
      </Box>
    );
  }
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CartGrid from './CartGrid';

const text = [
  { title: "گوشی موبایل" },
  { tilte: "کیف و کاور گوشی" },
  { title: "هدفون، هدست و هندزفری" },
  { title: "ساعت هوشمند" },
];

export default function Grid2() {
    return (
      <Box sx={{ flexGrow: 1,}}>
        <Grid container spacing={0}>
        {text.map((item, index) => (
          <Grid item lg={3} key={index}>
            <CartGrid title={item.title}/>
          </Grid>
          ))}
          {/* <Grid item lg={3}>
          <CartGrid/>
          </Grid>
          <Grid item lg={3}>
          <CartGrid/>
          </Grid>
          <Grid item lg={3}>
          <CartGrid/>
          </Grid> */}
        </Grid>
      </Box>
    );
  }
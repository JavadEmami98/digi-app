import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CartGrid from './CartGrid';

const text = [
  { title: "گوشی موبایل" },
  { title: "کیف و کاور گوشی" },
  { title: "هدفون، هدست و هندزفری" },
  { title: "ساعت هوشمند" },
];

export default function Grid2() {
    return (
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={5}>
        {text.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} key={index}>
            <CartGrid title={item.title}/>
          </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
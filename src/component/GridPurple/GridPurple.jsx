import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CartPurple from "./CartPurple";


const cardpurple = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
   
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e06e98875ad5947e50811d75ae940a9a38aaa15f_1678627573.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
   
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/2776164.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/81352ba9318e353596ef9c0ce52717ad044606f1_1668511732.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
 
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/a5378fbc6005e817658c4a683a20b354a0bc569a_1642601024.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
  
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/5fb17f017564554bde2b087f3257c7f9a8df41e0_1631389670.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",

  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",

  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/8948c22b78a85ec54c944d842da991804b942927_1632295762.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
 
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/d832871a56d3f31cef067d0839bc91ce11d6fc26_1651864878.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/8e08799cbc13e2e8babac5e7a6db447b2afc3401_1651102779.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/ecc0bf772f399d8f3fd2ae8c4f9acba92f89d4f3_1675669577.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/114924947.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
  },
];

export default function GridPurple() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={0}
        sx={{ padding:"25px 20px"}}
      >
        {cardpurple.map((item, index) => (
          <Grid item lg={2} key={index}>
            <CartPurple image={item.image} />
          </Grid>
        ))}  
      </Grid>
    </Box>
  );
}

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Cart44 from './Cart44';

const PICTURES = [
  {
    cartImage: [
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/871b53a2236bf90e7e37337b1089c39f5c5175ff_1656422780.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1678188426.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/4af1bad23ab1945fa5cef6a333792196e0fe850e_1656426417.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
    ],
  },
  {
    cartImage: [
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/ff30c7f1b01d44f35423f0fcb56f3cb76a42ea2b_1661171000.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/84e7ef9c62b9e510b9d51db8e0b24623a62ca3fd_1674977288.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/a04a25b3005a8e055e4e744093df6d2f800c0b32_1661178368.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/efd6eb92873f5e1fed4012a1ee2b2529593f545e_1674975972.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
    ],
  },
  {
    cartImage: [
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/e06e98875ad5947e50811d75ae940a9a38aaa15f_1678627573.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/5fb17f017564554bde2b087f3257c7f9a8df41e0_1631389670.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/c2ca6b8c3cb72b5db2d6c7fa7eba2cb868659200_1660392399.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
    ],
  },
  {
    cartImage: [
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/6ca3f4bc8fb197d2ffcdf152f6864722f60c2d1b_1675316803.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/759a621820ec6f19f9f4ecc9229ed649512805bb_1678708509.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/a48de6a051009d34fe458ce768d30f800dc8e595_1656934101.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
      {
        img: "https://dkstatics-public.digikala.com/digikala-products/c3bd32a3e3c442a63899310113c5982d95c6b32e_1675363293.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      },
    ],
  },
];


export default function Grid44() {
    return (
      <Box>
        <Grid container rowSpacing={0.25} columnSpacing={0.25}>
        {PICTURES.map((item,index)=>(
          <Grid key={index} item image={item.img} lg={6}>
            <Cart44/>
          </Grid>))}
          {/* <Grid item lg={6}>
          <Cart44/>
          </Grid>
          <Grid item lg={6}>
          <Cart44/>
          </Grid>
          <Grid item lg={6}>
           <Cart44/>
          </Grid> */}
        </Grid>
      </Box>
    );
  }
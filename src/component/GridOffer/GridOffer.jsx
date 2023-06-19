import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import CartOffer from "./CartOffer";

const offer = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/1fcb0ec9667ecf5fe2d01f8094b731564e5b1123_1652868847.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "68,500تومان",
    offer: "19,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/ba11cd2f6770f20aec9222a95dcf75d7f4c9a2c2_1625896416.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "55,900تومان",
    offer: "15,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/121654059.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "38,700تومان",
    offer: "29,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/112360452.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "78,900تومان",
    offer: "25,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/9b2371cbb8c8ca77c20efbbb79974b9adfa0bd1b_1612706809.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "48,900تومان",
    offer: "30,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/110428654.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "28,700تومان",
    offer: "21,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/6839bc12126ef6d99baddfb8725812d139718aee_1636810356.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "62,500تومان",
    offer: "15,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/4773350.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "58,900تومان",
    offer: "11,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/681d6975321e337fcb66703e5e68df64f2e21fb2_1613053970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "68,900تومان",
    offer: "15,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/ded2a5209d7fbf895e76f49fa0762c7787b57205_1623733797.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "48,500تومان",
    offer: "19,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/3572192.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "68,700تومان",
    offer: "12,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/112128717.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "69,900تومان",
    offer: "30,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/41ac8b85c8f27d369e939dc4c2f84c97d8c0691a_1650858427.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "66,900تومان",
    offer: "15,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/cb6cd32c87273a127eded3f21707c53bfd09ee49_1612349276.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "23,500تومان",
    offer: "13,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/1382328.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "62,700تومان",
    offer: "20,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dd0b93d810e2d90a54debad40a2c3295de15e660_1622626018.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "47,900تومان",
    offer: "17,000",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e607223d34d5055f80485e7440df6b60eec3b626_1642630147.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "97,900تومان",
    offer: "20,000",
  },
];

function GridOffer() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          {offer.map((item, index) => (
            <Grid key={index} item xs={6} sm={6} md={6} lg={2} xl={2}>
              <CartOffer
                image={item.image}
                price={item.price}
                offer={item.offer}
              />
            </Grid>
          ))}
          {/* <Grid item xs={2}>
        vsfvfsdgf
      </Grid>
      <Grid item xs={2}>
        vsfvfsdgf
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid>
      <Grid item xs={2}>
        sdhsadsa
      </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}

export default GridOffer;

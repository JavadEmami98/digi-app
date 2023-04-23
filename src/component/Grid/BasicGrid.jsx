import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./Card";

const card = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "گوشی موبایل",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/6ca3f4bc8fb197d2ffcdf152f6864722f60c2d1b_1675316803.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "ساعت هوشمند",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c6398626f1119d5b314c9c345f74f6ab305c9ef5_1667982797.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "لپ تاپ و الترابوک",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/a7a861f3e04640db3841b807b5cdb78e9ce1b62a_1620289306.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "موتور سیکلت",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/00845e59213bb59ddb870b35c85f32f7ae5afd4f_1605104492.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "کنسول خانگی",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/ae94bd81caa0d10a61ef0c6ae83cced8b6e87dc0_1674976995.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "کیف و کاور گوشی",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "هدفون، هدست ",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/8948c22b78a85ec54c944d842da991804b942927_1632295762.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "اسپیکر (بلندگو)",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/d832871a56d3f31cef067d0839bc91ce11d6fc26_1651864878.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "جوراب مردانه",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/8e08799cbc13e2e8babac5e7a6db447b2afc3401_1651102779.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "استند و پایه خنک‌کننده",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/ecc0bf772f399d8f3fd2ae8c4f9acba92f89d4f3_1675669577.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "تبلت",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/114924947.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: "آشنایی با فنون",
  },
];

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={0}
        sx={{ mr: "122px", width: "1304px", height: "315px", mt: "10px",border: "1px solid #e0e0e6", borderRadius:"16px"}}
      >
        {card.map((item, index) => (
          <Grid item lg={2} key={index}>
            <Card title={item.title} image={item.image} />
          </Grid>
        ))}  
      </Grid>
    </Box>
  );
}

/* <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid>
        <Grid item lg={2} key={index}>
          <Card title={item.title} image={item.image}/>
        </Grid></div> */
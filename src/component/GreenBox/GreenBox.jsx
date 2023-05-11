import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const product = [
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/f06e4dd8c6e6f48c4d0ab61b02fb19ed6747f29d_1665310120.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "20%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/3f8a0786687e568ab765e11dfeb8aec6c6ec5af6_1675852745.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "16%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/0f756bdeb01b1cb864c7e0937a74fc7e968b3188_1652251677.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "22%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/700070.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "17%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/e0c30ff0ab8bb814796a68b895390a49bfd26c57_1652012531.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "15%",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/e06a70b34f359dad43119c86116cce251d23e0ad_1677929814.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    discount: "24%",
  },
];

function GreenBox() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {lg:"row",xl:"row",md:"row",sm:"column",xs:"column"},
          alignItems: "center",
          /* width: "1304px", */
         /*  height: "110px", */
          backgroundColor: "#e2f0e2",
          marginTop: "5px",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            columnGap:2
          /*   width: "467px", */
     /*        height: "62px", */
       /*      mr: "25px", */
          }}
        >
          <img
            src="https://www.digikala.com/statics/img/png/amazing/fresh.png"
            alt=""
          />
          <img
            src="https://www.digikala.com/statics/img/svg/typography/fresh.svg"
            alt=""
          />
          <Typography
            sx={{
              /* width: "111px", */
              display:{md:"none",sm:"none",xs:"none",lg:"block",xl:"block"},
              height: "28px",
              backgroundColor: "#39ae00",
              color: "white",
              padding: "5px 12px",
              borderRadius: "15px",
              fontSize: "15px",
            }}
          >
            تا ۵۷٪ تخفیف
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            columnGap:0.5,
           /*  width: "492px", */
            height: "74px",
            /* backgroundColor: "white", */
         /*    mr: "95px", */
          }}
        >
          {product.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                maxwidth: "74px",
                maxheight: "74px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            >
              <img className="img-6" src={item.img} alt="" />
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "34px",
                  position: "absolute",
                  height: "20px",
                  backgroundColor: "red",
                  mt: "5px",
                  borderRadius: "16px",
                  fontSize: "14px",
                  bottom: "4px",
                  right: "5px",
                  color: "white",
                }}
              >
                {item.discount}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: {xl:"flex",lg:"flex",md:"flex",xs:"none",
          sm:"none"},
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "144px",
            height: "50px",
            backgroundColor: "white",
            color: "#39ae00",
            ml: "25px",
            borderRadius: "25px",
            padding: "0 15px",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>بیش از ۱۰۰ کالا</Typography>
          <ArrowBackOutlinedIcon />
        </Box>
      </Box>

      {/* Mobile */}
      {/* <Box sx={{
        display:"flex",
        flexDirection:"column",
        backgroundColor: "#e2f0e2",

      }}>

      </Box> */}
    </div>
  );
}

export default GreenBox;

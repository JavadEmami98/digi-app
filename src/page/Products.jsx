import React from "react";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import { Box, Container, Divider, Typography } from "@mui/material";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import GridProdudct from "../component/GridProduct/GridProdudct";

function Products() {
  return (
    <div>
      <Banner />
      <Header />
      <Container maxWidth="100%">
        <nav>
          <Box
            sx={{
              width:"100%",
              /* maxWidth: "1488px", */
              height: "66.04px",
              padding: "20px 0px",
              display: "block",
              background: "red",
            }}
          >
            swiper swiper swiper =
          </Box>
        </nav>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            flexDirection:"row",
            alignItems: "stretch",
            justifyContent: "space-between",
            background: "#686A6C",
          }}
        >
          <Divider
            sx={{
              display: "block",
              flexGrow: 1,
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderBottom: "1px solid #e0e0e6",
                height: "50.04px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  flexGrow: 1,
                  height: "50.04px",
                  background: "blue",
                  justifyContent:"space-between",
                  columnGap:"16px"
                }}
              >
                
                  <h1 className="h1-product">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                        height: "26.04px",
                        background: "yellow",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexShrink: 0,
                          marginLeft: "8px",
                        }}
                      >
                        <MenuOpenOutlinedIcon/>
                      </Box>
                      <Typography>مرتب سازی:</Typography>
                    </Box>
                    </h1>
                    <Box sx={{display:"contents"}}>
                      <Typography component="span" sx={{color:"#ef394e", cursor:"pointer",whiteSpace:"nowrap", fontSize:"14px"}}>پرفروش‌ترین‌</Typography>
                      <Typography component="span" sx={{color:"#767790", cursor:"pointer",whiteSpace:"nowrap", fontSize:"14px"}}>پرفروش‌ترین‌</Typography>
                      <Typography component="span" sx={{color:"#767790", cursor:"pointer",whiteSpace:"nowrap", fontSize:"14px"}}>پرفروش‌ترین‌</Typography>
                      <Typography component="span" sx={{color:"#ef394e", cursor:"pointer",whiteSpace:"nowrap", fontSize:"14px"}}>پرفروش‌ترین‌</Typography>
                      <Typography component="span" sx={{color:"#ef394e", cursor:"pointer",whiteSpace:"nowrap", fontSize:"14px"}}>پرفروش‌ترین‌</Typography>
                      <Typography component="span" sx={{color:"#ef394e", cursor:"pointer",whiteSpace:"nowrap", fontSize:"14px"}}>پرفروش‌ترین‌</Typography>
                    </Box>
                  <Box sx={{
                    display:"block",
                    marginRight:"auto",
                  }}>
                    <Typography component="span" sx={{display:"flex",alignItems:"center",gap:"8px"}}>۳,۸۰۴ کالا</Typography>
                  </Box>
                
              </Box>
            </Box>
            <GridProdudct/>
          </Divider>
        </Box>
      </Container>
    </div>
  );
}

export default Products;

import { Box, Typography } from "@mui/material";
import React from "react";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function CartProduct() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "block",
          padding: "12px 8px",
          overflow: "hidden",
          position: "relative",
        /*   background: "red", */
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <br />
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "column",
              position: "relative",
              background: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "stretch",
                marginBottom: "4px",
                padding: "15px 15px",
              }}
            >
              <img
                className="g-product-img"
                src="https://dkstatics-public.digikala.com/digikala-products/004b2ef1e85f619e9332b096626ff33cbfa44d9f_1634457491.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                alt=""
                style={{width:"100%",height:"100%",maxHeight:"200px"}}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mb: "4px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "12px",
                    padding: "0px 12px",
                    color: "#81858b",
                    background: "#e0e0e6",
                  }}
                >
                  <MopedOutlinedIcon
                    sx={{ color: "red", width: "18px", height: "18px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#81858b",
                      fontWeight: 700,
                      pr: "3px",
                    }}
                  >
                    ارسال رایگان
                  </Typography>
                </Box>
              </Box>
              <Typography sx={{ fontSize: "14px", color: "#3f4064" }}>
              گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت - اکتیو
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "4px",
                }}
              >
                <Typography
                  sx={{ color: "#ef394e", fontSize: "12px", fontWeight: 400 }}
                >
                  تنها ۲ عدد در انبار باقی مانده
                </Typography>
                <Box sx={{ display: "flex",alignItems:"center" }}>
                  <Typography sx={{ fontSize: "13px" }}>4.2</Typography>
                  <StarOutlinedIcon sx={{ color: "#f9bc00",mr:"4px",width:"16px",height:"16px" }} />
                </Box>
              </Box>
              <Box sx={{display:"flex",justifyContent:"flex-end",alignItems:"center",height:"26.04"}}>
                <Typography>۱۰,۸۹۹,۰۰۰ تومان</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CartProduct;

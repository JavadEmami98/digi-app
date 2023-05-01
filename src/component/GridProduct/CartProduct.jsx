import { Box } from "@mui/material";
import React from "react";

function CartProduct() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "451.28px",
          display: "block",
          padding: "12px 8px",
          overflow: "hidden",
          position: "relative",
          background: "red",
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
              height: "397.23px",
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
                height: "240px",
                padding: "15px 15px",
              }}
            >
              <img
                className="g-product-img"
                src="https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1678188426.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                alt=""
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "28.8px",
                  mb: "4px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "23.3px",
                    cursor: "pointer",
                    borderRadius: "12px",
                    padding: "0px 12px",
                    color: "#81858b",
                    background: "#d3d3d3",
                  }}
                >
                  dfsdfs
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CartProduct;

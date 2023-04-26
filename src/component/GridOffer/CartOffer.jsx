import { Box, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function CartOffer({ image, price, offer }) {
  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "block",
            position: "relative",
            cursor: "pointer",
            overflow: "hidden",
            padding: "12px 8px",
            width: "213.06px",
            height: "277.27px",
            borderBottom: "1px solid #f1f2f4",
            borderLeft: "1px solid #f1f2f4",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              alignItems: "stretch",
              width: "196.26px",
              height: "150px",
              mb: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mx: "auto",
              }}
            >
              <img className="offer-pics" src={image} alt="" />
              <AddCircleOutlineIcon
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  mr: "4px",
                  mt: "4px",
                  color: "#ef4056",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                width: "196.26px",
                height: "34.4",
                mt: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "34px",
                  height: "20px",
                  color: "white",
                  padding: "0px 4px",
                  borderRadius: "16px",
                  backgroundColor: "#ef4056",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>13%</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexGrow: 1,
                  gap: "4px",
                  width: "162.26px",
                  height: "34.4",
                  color: "#3f4064",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>{price}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "196.26px",
                height: "26.04px",
                pl: "20px",
              }}
            >
              <Box
                sx={{
                  alignSelf: "flex-end",
                  color: "#c3c3ce",
                  mr: "auto",
                  textDecoration: "line-through",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>{offer}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CartOffer;

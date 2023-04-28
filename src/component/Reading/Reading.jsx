import React from "react";
import GridF from "../GridCartF/GridF";
import { Box, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

function Reading() {
  return (
    <div>
      <Box
        sx={{
          display: "block",
          width: "1304px",
          height: "346px",
          mt: "24px",
          mr: "122px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            width: "1304px",
            height: "66.4px",
          }}
        >
          <Typography sx={{ fontSize: "16px" }}>خواندنی‌ها</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "168.36px",
              height: "26.04px",
              color: "#19bfd3",
              fontSize: "12px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>
              مطالب بیشتر در دیجی‌کالا مگ
            </Typography>
            <ArrowBackIosNewOutlinedIcon
              sx={{ fontSize: "small", mr: "3px" }}
            />
          </Box>
        </Box>
        <GridF />
      </Box>
    </div>
  );
}

export default Reading;

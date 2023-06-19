import React from "react";
import Grid2 from "../Grid2/Grid2";
import { Box } from "@mui/material";

function Four() {
  return (
    <div>
      <Box
        sx={{
         /*  display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between", */
          border: "1px solid #e0e0e6",
          borderRadius: "16px",
          mt: "24px",
        }}
      >
        <Grid2 />
      </Box>
    </div>
  );
}

export default Four;

import { Box } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React from "react";
import HamMenu from "../HamMenu/HamMenu";

function HeaderMobile() {
  return (
    <div>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding:"12px 0px",
          borderBottom: "1px solid #f1f2f4",
          width:"100%"
        }}
      >
        <HamMenu />
        <img src="https://www.digikala.com/statics/img/svg/logo.svg" alt="" style={{ maxWidth: "92px" }} />
        <HelpOutlineIcon />
      </Box>
    </div>
  );
}

export default HeaderMobile;

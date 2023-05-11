import { Box, Typography, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";

function SearchMobile() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 0px",
          borderBottom: "1px solid #f1f2f4",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "44px",
            position: "relative",
            alignItems: "center",
            width:"100%"
          }}
        >
          <SearchIcon
            sx={{
              position: "absolute",
              right: "10px",
              top: "10px",
              zIndex: 10,
              color: "#9e9fb1",
            }}
          />
          <input className="input-mobile" type="text" placeholder="جستجو" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              mr: "8px",
            }}
          >
            <InputOutlinedIcon sx={{ padding: "2px" }} />
            <Typography sx={{ fontSize: "12px", mr: "4px" }}>ورود</Typography>
          </Box>
          <Badge badgeContent={1} color="error">
            <ShoppingCartOutlinedIcon  />
          </Badge>
        </Box>
      </Box>
    </div>
  );
}

export default SearchMobile;

import React from "react";
import { Box, Typography } from "@mui/material";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

function DigiClub() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {lg:"row",xl:"row",sm:"column",xs:"column",md:"column"},
          /* width: "1304px", */
         /*  height: "87.2px", */
          mt: "8px",
          padding: "12px 16px",
          borderRadius: "16px",
          background:
            "linear-gradient(76.02deg,#35a6c8 33.32%,#007295 71.55%),radial-gradient(21.29% 87.33% at 50% 50.67%,#7cf2f6 0,#35a6c8 100%)",
        }}
      >
        <img
          className="digi-club"
          src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg"
          alt=""
        />
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            maxWidth: {xs:"384px",sm:"384px",md:"384px",lg:"60%",xl:"60%"},
            maxHeight: {xs:"126px",sm:"126px",md:"126px",lg:"63.2px",xl:"63.2px"},
            borderRadius: "8px",
            background: "white",
            alignItems:"center",
            mt:{xs:"8px",sm:"8px",md:"8px",lg:"0px",xl:"0px"}
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              flexDirection:{xs:"column",sm:"column",md:"column",lg:"row",xl:"row"},
              /* width: "273.19px", */
            /*   height: "63.2px", */
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection:{xs:"column",sm:"column",md:"column",lg:"row",xl:"row"},
             /*    width: "85.99px", */
                /* height: "26.4px", */
                margin: "0px 16px 0px 0px",
              }}
            >
              <RiceBowlIcon sx={{ color: "#00bfd6", pr: "7px" }} />
              <Typography sx={{ fontSize: "12px", pr: "7px" }}>
                چرخ و بخت
              </Typography>
            </Box>
            <img
              className="charkh"
              src="https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.jpg"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              flexDirection:{xs:"column",sm:"column",md:"column",lg:"row",xl:"row"},
              /* width: "274.19px", */
              /* height: "63.2px", */
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection:{xs:"column",sm:"column",md:"column",lg:"row",xl:"row"},
                /* width: "85.99px", */
                /* height: "26.4px", */
                margin: "0px 16px 0px 0px",
              }}
            >
              <AddTaskIcon sx={{ color: "#00bfd6", pr: "7px" }} />
              <Typography sx={{ fontSize: "12px", pr: "7px" }}>
                ماموریت ها
              </Typography>
            </Box>
            <img
              className="charkh"
              src="https://www.digikala.com/statics/img/png/digiclub/missions.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              flexDirection:{xs:"column",sm:"column",md:"column",lg:"row",xl:"row"},
          /*     width: "256.5px", */
              /* height: "63.2px", */
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection:{xs:"column",sm:"column",md:"column",lg:"row",xl:"row"},
          /*       width: "85.99px", */
                /* height: "26.4px", */
                /* margin: "0px 16px 0px 0px", */
              }}
            >
              <ConfirmationNumberOutlinedIcon
                sx={{ color: "#00bfd6", pr: "7px" }}
              />
              <Typography sx={{ fontSize: "12px", pr: "7px" }}>
                جایزه ها
              </Typography>
            </Box>
            <img
              className="charkh"
              src="https://www.digikala.com/statics/img/png/digiclub/awards.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default DigiClub;

import { Box, Button, Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import React from "react";

function FooterGrid() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, mb: "20px" }}>
        <Grid container spacing={0.5}>
          <Grid item sm={6} xs={6} md={6} lg={3} xl={3}>
            <Box sx={{ mb: "8px" }}>
              <Typography
                sx={{
                  fontSize: "19px",
                  mb: "8px",
                  fontWeight: 400,
                  color: "#3f4064",
                }}
              >
                با دیجی‌کالا
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                اتاق خبر دیجی‌کالا
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                فروش در دیجی‌کالا
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                فرصت‌های شغلی
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                گزارش تخلف در دیجی‌کالا
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                تماس با دیجی‌کالا
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                درباره دیجی‌کالا
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6} xs={6} md={6} lg={3} xl={3}>
            <Box sx={{ mb: "8px" }}>
              <Typography
                sx={{
                  fontSize: "19px",
                  mb: "8px",
                  fontWeight: 700,
                  color: "#3f4064",
                }}
              >
                خدمات مشتریان
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                پاسخ به پرسش‌های متداول
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                رویه‌های بازگرداندن کالا
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                شرایط استفاده
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                حریم خصوصی
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                گزارش باگ
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6} xs={6} md={6} lg={3} xl={3}>
            <Box sx={{ mb: "8px",display:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"} }}>
              <Typography
                sx={{
                  fontSize: "19px",
                  mb: "8px",
                  fontWeight: 700,
                  color: "#3f4064",
                }}
              >
                راهنمای خرید از دیجی‌کالا
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                نحوه ثبت سفارش
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                رویه ارسال سفارش
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#767790",
                  mb: "8px",
                  fontWeight: 400,
                }}
              >
                شیوه‌های پرداخت
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} xs={12} md={12} lg={3} xl={3}>
            <Box sx={{ mb: "12px" }}>
              <Typography
                sx={{
                  fontSize: "19px",
                  mb: "8px",
                  fontWeight: 700,
                  color: "#3f4064",
                }}
              >
                همراه ما باشید!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "40px",
                color: "#9e9fb1",
              }}
            >
              <InstagramIcon
                sx={{ ml: "35px", width: "35px", height: "35px" }}
              />
              <TwitterIcon sx={{ ml: "35px", width: "35px", height: "35px" }} />
              <LinkedInIcon
                sx={{ ml: "35px", width: "35px", height: "35px" }}
              />
              <GroupWorkIcon
                sx={{ ml: "35px", width: "35px", height: "35px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                mt: "32px",
                height: "94.5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  mb: "12px",
                  fontWeight: 700,
                  color: "#3f4064",
                }}
              >
                با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <input
                  className="input-footer"
                  type="email"
                  placeholder="ایمیل شما"
                />
                <Button
                  variant="outlined"
                  sx={{
                    height: "48px",
                    color: "#fff",
                    background: "#e0e0e6",
                    border: "1px solid #e0e0e6",
                    borderRadius: "8px",
                    mr: "8px",
                    fontSize: "17px",
                  }}
                >
                  ثبت
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FooterGrid;

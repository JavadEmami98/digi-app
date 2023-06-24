import React from "react";
import { Badge, Box, Button, Typography } from "@mui/material";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StoreIcon from "@mui/icons-material/Store";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Tooltip from "@mui/material/Tooltip";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import ChairIcon from '@mui/icons-material/Chair';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function Header() {
  return (
    <div>
      <div className="logo-line">
        <img className="logo" src="/image/logo.svg" alt="" loading="lazy" style={{cursor:"pointer"}}/>
        <Box
          sx={{
            display: "flex",
            height: "44px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchIcon
            sx={{
              position: "absolute",
              right: "170px",
              top: "22px",
              zIndex: 10,
              color: "#9e9fb1",
              cursor:"pointer"
            }}
          />
          <input className="input" type="text" placeholder="جستجو" />
        </Box>

        <div className="head-left">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              /*  width: "134px", */
              /* height: "40px", */
              backgroundColor: "white",
              border: "1px solid #e0e0e6",
              mr: "20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <InputOutlinedIcon sx={{ ml: "5px", padding: "4px" }} />
            <Typography sx={{ ml: "8px", fontSize: "13px" }}>
              ورود | ثبت نام
            </Typography>
          </Box>
          <Typography> | </Typography>
          <Badge badgeContent={4} color="error">
            <ShoppingCartOutlinedIcon sx={{ ml: "7px", cursor: "pointer" }} />
          </Badge>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
         /*  height: "40px", */
          fontSize: "12px",
          borderBottom: "1px solid  #e0e0e6",
          pb:"5px",  position:"relative"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          /*   height: "30px", */
            fontSize: "18px",
            typography: "body2",
            cursor:"pointer",
          
          }}
        >
          <div className="open-menu h-[40px] flex items-center">
          <MenuOutlinedIcon sx={{ pr: "5px" }} />
          <Typography  sx={{mr: "5px", fontSize: "14px", typography: "body2"}}>
            دسته‌بندی کالاها
          </Typography></div>
            {/* Menu */}
            <div className="menu-bar absolute top-[40px] right-[5px] bg-white z-10">
              <div className="flex">
                {/* column right */}
                <div className=" border-l min-w-[180px]">
                  <Box sx={{"&:hover":{color:"#ef4056"}}} className="mobile flex items-center my-[10px] pr-1 py-2 cursor-pointer hover:bg-[#f1f2f4]">
                  <PhoneIphoneIcon sx={{p:"2px"}}/>
                  <Typography sx={{fontSize:"13px",pr:"3px"}}>موبایل</Typography>
                </Box>
                  <Box sx={{"&:hover":{color:"#ef4056"}}} className="kala flex items-center my-[10px] pr-1 py-2 cursor-pointer hover:bg-[#f1f2f4]">
                  <LaptopIcon sx={{p:"2px"}}/>
                  <Typography sx={{fontSize:"13px",pr:"3px"}}>کالای دیجیتال</Typography>
                </Box>
                  <Box sx={{"&:hover":{color:"#ef4056"}}} className="home flex items-center my-[10px] pr-1 py-2 cursor-pointer hover:bg-[#f1f2f4]">
                  <ChairIcon sx={{p:"2px"}}/>
                  <Typography sx={{fontSize:"13px",pr:"3px"}}>خانه و آشپزخانه</Typography>
                </Box>
                  <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex items-center my-[10px] pr-1 py-2 cursor-pointer hover:bg-[#f1f2f4]">
                  <MonitorHeartIcon sx={{p:"2px"}}/>
                  <Typography sx={{fontSize:"13px",pr:"3px"}}>زیبایی و سلامت</Typography>
                </Box>
                </div>
                {/* column left */}    
                <div className="mobile-option flex flex-col">
                  <div className=" flex py-[20px] pr-[20px] w-full">
                  <Typography sx={{fontSize:"14px"}}>همه محصولات موبایل</Typography>
                  <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </div>
                <div className="grid grid-cols-6 gap-5 pr-[20px] w-full">
                 <div>
                    <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>برند های مختلف گوشی موبایل</Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">گوشی اپل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">گوشی سامسونگ</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">گوشی سونی</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">گوشی نوکیا</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">گوشی شیامی</Box>
                 </div>
                <div>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>گوشی براساس قیمت    </Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 2 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 5 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 7 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 10 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 15 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>گوشی براساس حافظه داخلی      </Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 16 گیگابایت</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 32 گیگابایت </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   گوشی تا 64 گیگابایت</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 128 گیگابایت </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 256 گیگابایت </Box>
                </div>
                <div>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}> رزلوشن عکس</Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> تا 16 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  تا 32 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   تا 48 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   تا 50 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">    تا 108 مگاپیکسل</Box>
                </div>
                  </div>
                </div>
                {/* برای خانه و آشپزخانه */}
                <div className="home-option flex flex-col">
                  <div className=" flex py-[20px] pr-[20px] w-full">
                  <Typography sx={{fontSize:"14px"}}>همه محصولات خانه و آشپزخانه</Typography>
                  <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </div>
                <div className="grid grid-cols-6 gap-5 pr-[20px] w-full">
                 <div>
                    <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>تلویزیون</Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">ایکس ویژن </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> دوو</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> جی پلاس</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>یخچال و فریز</Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> امرسان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> ال جی</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> دوو </Box>
                 </div>
                <div>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>گوشی براساس قیمت    </Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 2 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 5 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 7 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 10 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 15 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>گوشی براساس حافظه داخلی      </Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 16 گیگابایت</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 32 گیگابایت </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   گوشی تا 64 گیگابایت</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 128 گیگابایت </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 256 گیگابایت </Box>
                </div>
                <div>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}> رزلوشن عکس</Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> تا 16 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  تا 32 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   تا 48 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   تا 50 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">    تا 108 مگاپیکسل</Box>
                </div>
                  </div>
                </div>
                {/* kala */}
                <div className="kala-option flex flex-col">
                  <div className=" flex py-[20px] pr-[20px] w-full">
                  <Typography sx={{fontSize:"14px"}}>همه محصولات خانه و آشپزخانه</Typography>
                  <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </div>
                <div className="grid grid-cols-6 gap-5 pr-[20px] w-full">
                 <div>
                    <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>تلویزیون</Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">ایکس ویژن </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> دوو</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> جی پلاس</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>یخچال و فریز</Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> امرسان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> ال جی</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> دوو </Box>
                 </div>
                <div>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>گوشی براساس قیمت    </Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 2 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 5 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 7 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 10 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 15 میلیون تومان</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}>گوشی براساس حافظه داخلی      </Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> گوشی تا 16 گیگابایت</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 32 گیگابایت </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   گوشی تا 64 گیگابایت</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 128 گیگابایت </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  گوشی تا 256 گیگابایت </Box>
                </div>
                <div>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="flex border-r-[2px] border-[#ef394e] cursor-pointer">
                <Typography sx={{fontSize:"15px",pr:"5px"}}> رزلوشن عکس</Typography>
                <ArrowBackIosNewIcon sx={{p:"7px"}}/>
                </Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer"> تا 16 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">  تا 32 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   تا 48 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">   تا 50 مگاپیکسل</Box>
                <Box sx={{"&:hover":{color:"#ef4056"}}} className="text-[13px] text-[#767790] py-2 cursor-pointer">    تا 108 مگاپیکسل</Box>
                </div>
                  </div>
                </div>
              </div>
            </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                /*  width: "110px", */
                height: "40px",
                "&:hover": {
                  borderBottom: "2px solid #e6123d",
                },
                cursor: "pointer",
                gap: 1,
              }}
            >
              <StoreIcon
                sx={{ mr: "10px", paddingRight: "5px", color: "#5a5c7a" }}
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  pl: "15px",
                  color: "#5a5c7a",
                  fontWeight: 400,
                  typography: "body2",
                }}
              >
                سوپرمارکت
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                /* width: "115px", */
                height: "40px",
                "&:hover": {
                  borderBottom: "2px solid #e6123d",
                },
                cursor: "pointer",
                gap: 1,
              }}
            >
              <WhatshotOutlinedIcon
                sx={{ mr: "8px", paddingRight: "5px", color: "#5a5c7a" }}
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  pl: "15px",
                  color: "#5a5c7a",
                  typography: "body2",
                }}
              >
                پرفروش ترینها
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                /*  width: "125px", */
                height: "40px",
                "&:hover": {
                  borderBottom: "2px solid #e6123d",
                },
                cursor: "pointer",
                typography: "body2",
                gap: 1,
              }}
            >
              <PercentOutlinedIcon
                sx={{ mr: "8px", paddingRight: "5px", color: "#5a5c7a" }}
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  pl: "15px",
                  color: "#5a5c7a",
                  typography: "body2",
                }}
              >
                تخفیف‌ها و پیشنهادها
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "40px",
                /* width: "110px", */
                "&:hover": {
                  borderBottom: "2px solid #e6123d",
                },
                cursor: "pointer",
                typography: "body2",
                gap: 1,
              }}
            >
              <LocalOfferOutlinedIcon
                sx={{ mr: "10px", paddingRight: "5px", color: "#5a5c7a" }}
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  pl: "15px",
                  color: "#5a5c7a",
                  typography: "body2",
                }}
              >
                شگفت‌انگیزها
              </Typography>
            </Box>
            <Box
              sx={{
                mr: "7px",
              }}
            >
              |
            </Box>
            <Box
              sx={{
                display: "flex",
                marginRight: "15px",
                color: "#5a5c7a",
                "&:hover": {
                  borderBottom: "2px solid #e6123d",
                  height: "40px",
                },
                alignItems: "center",
                cursor: "pointer",
                typography: "body2",
              }}
            >
              <Typography sx={{ fontSize: "12px", typography: "body2" }}>
                سوالی دارید؟{" "}
              </Typography>
            </Box>
            <Typography
              sx={{
                display: "flex",
                height: "40px",
                alignItems: "center",
                fontSize: "12px",
                color: "#5a5c7a",
                mr: "25px",
                "&:hover": {
                  borderBottom: "2px solid #e6123d",
                },
                cursor: "pointer",
                typography: "body2",
              }}
            >
              در اینجا بفروشید!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            fontSize: "12px",
            ml: "16px",
            paddingRight: "10px",
            paddingLeft: "5px",
          }}
        >
          <LocationOnOutlinedIcon
            sx={{ pr: "4px", mr: "8px", color: "#5a5c7a" }}
          />
          {/* <Typography
            sx={{ fontSize: "12px", color: "#3f4064", typography: "body2" }}
          > */}
          <Tooltip
            title="لطفا شهر خود را انتخاب کنید"
            placement="bottom"
            sx={{ fontSize: "12px", color: "#3f4064" }}
          >
            <Button>لطفا شهر خود را انتخاب کنید</Button>
          </Tooltip>
          {/*     </Typography> */}
        </Box>
      </Box>
    </div>
  );
}

export default Header;

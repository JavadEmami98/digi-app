import React from "react";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import { Box, Container, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CompareIcon from '@mui/icons-material/Compare';
import TocIcon from '@mui/icons-material/Toc';
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ErrorIcon from '@mui/icons-material/Error';


const list = [
  {title:"فناوری صفحه نمایش : ",
p:"Super Retina XDR OLED"},
{title:"اندازه :  ",
p:"6.7"},
{title:"رزولوشن عکس : ",
p:"12 مگاپیکسل"},
{title:"نسخه سیستم عامل :  ",
p:"iOS 15"}, 
{title:"اقلام همراه : ",
p:"دفترچه‌ راهنما، کابل Lightning"},
]

function Item() {
  return (
    <div>
      <Banner />
      <Header />
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 0px",
            height: "42px",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", color: "#767790" }}>
            <Typography sx={{ fontSize: "13px" }}>
              دیجی کالا / موبایل / گوشی موبایل
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#9e9fb1",
              fontSize: "12px",
            }}
          >
            <Box sx={{ display: "flex", ml: "32px" }}>
              <Typography sx={{ fontSize: "12" }}>ثبت آگهی در پیندو</Typography>
              <CampaignIcon sx={{mr:"3px"}}/>
            </Box>

            <Typography sx={{ fontSize: "12" }}>  فروش در دیجی‌کالا </Typography>
            <LocalOfferIcon sx={{p:"3px",mr:"3px"}}/>
          </Box>
        </Box>
        <Box sx={{display:"flex",flexDirection:"row",mt:"25px"}}>
            <Box sx={{display:"flex",flexDirection:"column",height:"348px",mt:"10px",rowGap:"16px",}}>
                <FavoriteBorderIcon sx={{ml:"16px"}}/>
                <ShareIcon />
                <NotificationsActiveOutlinedIcon />
                <ShowChartIcon />
                <CompareIcon />
                <TocIcon />
            </Box>
            <Box sx={{display:"flex",alignItems:"center",mt:"15px"}}>
                <img src="https://dkstatics-public.digikala.com/digikala-products/dcd6e4e843bea3f070614a95d27b1181fdf23008_1675774247.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt="" style={{width:"auto",height:"auto",maxHeight:"495px",maxWidth:"495px"}}/>
            </Box>
            <Box sx={{display:"flex",width:"100%",height:"78px",flexDirection:"column"}}>
            <Box sx={{display:"flex",alignItems:"center",height:"30px",color:"#19bfd3"}}>
                <Typography sx={{fontSize:"16px"}}>اپل / گوشی موبایل اپل</Typography>
            </Box>
            <Box sx={{display:"flex",mt:"8px",color:"#080a38",fontSize:"20px"}}>
                    <Typography sx={{fontSize:"21px"}}>گوشی موبایل اپل مدل iPhone 13 Pro Max تک سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت - اروپا نات اکتیو</Typography>
            </Box>
        <Box sx={{display:"flex",flexDirection:"row"}}>
            <Box sx={{display:"flex",flexDirection:"column",mt:"10px"}}>
                <Box sx={{display:"flex",height:"26px",color:"#c3c3ce"}}>
                    <Typography sx={{fontSize:"12.5px"}}>Apple iPhone 13 Pro Max Single SIM 256GB And 6GB RAM Mobile Phone - Europe Not Activate</Typography>
                </Box>
                <Box sx={{display:"flex",height:"34px",alignItems:"center"}}>
                    <Box sx={{display:"flex",mt:"8px",height:"26px",alignItems:"center"}}>
                        <StarIcon sx={{color:"#feb900",padding:"3px"}}/>
                        <Typography sx={{mr:"4px",fontSize:"13px"}}>4.7</Typography>
                        <Typography sx={{mr:"4px",fontSize:"11px",color:"#c3c3ce"}}>(15)</Typography>
                        <CircleIcon sx={{color:"#e0e0e6", padding:"8px"}}/>
                    </Box>
                    <Box sx={{display:"flex",mt:"8px",height:"26px",alignItems:"center"}}>
                        <Typography sx={{mr:"4px",fontSize:"14px",color:"#19bfd3"}}>37 دیدگاه</Typography>
                        <CircleIcon sx={{color:"#e0e0e6", padding:"8px"}}/>
                    </Box>
                    <Box sx={{display:"flex",mt:"8px",height:"26px",alignItems:"center"}}>
                        <Typography sx={{mr:"4px",fontSize:"14px",color:"#19bfd3"}}>32 پرسش</Typography>
                    </Box>
                    
                </Box>
                <Box sx={{display:"flex",mt:"4px",height:"106px",flexDirection:"column"}}>
                    <Typography sx={{padding:"12px",fontSize:"16px"}}>رنگ: سبز</Typography>
                    <Box sx={{display:"flex",height:"47.6px",mr:"5px"}}>
                        <CircleIcon sx={{width:"32px",height:"32px",color:"green",ml:"8px",mb:"8px"}}/>
                        <CircleIcon sx={{width:"32px",height:"32px",color:"blue",ml:"8px",mb:"8px"}}/>
                    </Box>
                </Box>
                <Box sx={{display:"flex",margin:"8px 0px",height:"124px",flexDirection:"column",}}>
            <Typography sx={{mb:"12px", fontSize:"19px"}}>بیمه</Typography>
            <Box sx={{display:"flex",height:"78px",border:"1px solid #e0e0e6",borderRadius:"8px"}}>
                <Box sx={{display:"flex",alignItems:"center",borderLeft:"1px solid #e0e0e6",padding:"0px 12px"}}>
                    <CheckBoxOutlineBlankIcon/>
                </Box>
                <Box sx={{padding:"8px",display:"flex",flexDirection:"column",height:"78px",width:"100%"}}>
                <Typography sx={{fontSize:"14px",color:"#3f4064"}}>بیمه تجهیزات دیجیتال - بیمه پارسیان</Typography>
                
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",mt:"4px",height:"30px"}}>
            <Typography>۲,۲۲۱,۴۲۰تومان</Typography>
            <Box sx={{display:"flex",color:"#19bfd3"}}>
                <Typography>جزییات</Typography>
                <ArrowBackIosNewIcon sx={{padding:"5px"}}/>
            </Box>
                </Box>
                
                </Box>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",height:"241px",borderBottom:"1px solid #f1f2f4",pb:"12px",mt:"5px"}}>
              <Typography sx={{fontSize:"16px",padding:"12px 0px"}}>ویژگی‌ها</Typography>
              {list.map((item,index)=>(
              <Box key={index} sx={{display:"flex",height:"30px",mb:"4px",alignItems:"center"}}>
              <CircleIcon sx={{color:"#767790", padding:"8px"}}/>
              <Typography sx={{color:"#767790",fontSize:"14px"}}> {item.title} </Typography>
              <Typography sx={{color:"#3f4064",fontSize:"14px",mr:"4px"}}> {item.p}</Typography>
              </Box> ))}
            </Box>
             <Box sx={{display:"flex",height:"78px",margin:"12px 0px",width:"565px"}}>
                <ErrorIcon sx={{color:"#81858b",mt:"4px",p:"2px"}}/>
                <Typography sx={{mr:"8px",color:"#767790",fontSize:"14px"}}>امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</Typography>
             </Box>
             <Box sx={{display:"flex",mt:"20px",height:"60px",border:"1px solid #e0e0e6",borderRadius:"8px",justifyContent:"space-between",alignItems:"center"}}>
              <Typography sx={{paddingTop:"12px",paddingRight:"16px",paddingBottom:"12px",fontSize:"16px"}}>ارسال رایگان برای این کالا</Typography>
              <img src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg" alt="" style={{maxWidth:"120px",objectFit:"cover"}}/>
             </Box>
                </Box>
            </Box>
        </Box>
            </Box>
        </Box>

      </Container>
    </div>
  );
}

export default Item;

import React from "react";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import { Box, Button, Container, Typography } from "@mui/material";
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
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ErrorIcon from '@mui/icons-material/Error';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ModalImage from "../component/ModalImage/ModalImage";

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

const slist = [{title:"۲,۰۳۳,۳۳۳ تومان پیش پرداخت"},{title:"۱,۸۸۱,۵۰۰ تومان ماهانه (۱۲ قسط)"},{title:"اعتبار تا سقف ۲۰,۰۰۰,۰۰۰ تومان"}]



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
            <Box sx={{display:"flex",alignItems:"center",mt:"15px",flexDirection:"column"}}>
                <img src="https://dkstatics-public.digikala.com/digikala-products/dcd6e4e843bea3f070614a95d27b1181fdf23008_1675774247.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt="" style={{width:"auto",height:"auto",maxHeight:"495px",maxWidth:"495px"}}/>
              
             <ModalImage/>
             <Box sx={{display:"flex",height:"26.04px",width:"100%",alignItems:"center"}}>
             <ErrorOutlineIcon sx={{color:"#81858b",ml:"8px",p:"4px"}}/>
             <Typography sx={{color:"#767790",ml:"8px",fontSize:"10px"}}>گزارش نادرستی مشخصات</Typography>
             </Box>
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
             <Box sx={{display:"flex",height:"78px",margin:"12px 0px"/* ,width:"565px" */}}>
                <ErrorIcon sx={{color:"#81858b",mt:"4px",p:"2px"}}/>
                <Typography sx={{mr:"8px",color:"#767790",fontSize:"12.5px"}}>امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</Typography>
             </Box>
             <Box sx={{display:"flex",mt:"20px",height:"60px",border:"1px solid #e0e0e6",borderRadius:"8px",justifyContent:"space-between",alignItems:"center"}}>
              <Typography sx={{paddingTop:"12px",paddingRight:"16px",paddingBottom:"12px",fontSize:"16px"}}>ارسال رایگان برای این کالا</Typography>
              <img src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg" alt="" style={{maxWidth:"120px",objectFit:"cover"}}/>
             </Box>
             <Box sx={{display:"flex",height:"139px",border:"1px solid #e0e0e6",paddingBottom:"16px",paddingLeft:"12px",paddingRight:"12px",mt:"10px",borderRadius:"8px",flexDirection:"column"}}>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                  <LocalParkingIcon sx={{p:"4px",ml:"8px",color:"#0040ff"}}/>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0px",height:"50px",width:"100%"}}>
                    <Typography sx={{color:"#3f4064",fontSize:"13px"}}>به اعتبار دیجی پی قسطی بخرید</Typography></Box>
                    <ChevronLeftIcon sx={{color:"#9e9fb1"}}/>
                  </Box>
                  {slist.map((item,index)=>(
                  <Box key={index} sx={{display:"flex",alignItems:"center",height:"24px"}}>
                  <CircleIcon sx={{color:"#0040ff", padding:"8px"}}/>
                  <Typography sx={{color:"#767790",fontSize:"13px",mr:"8px"}}>{item.title}</Typography>
                  </Box>))}
             </Box>
                </Box>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%"}}>
            <Box sx={{display:"flex",flexDirection:"column",border:"1px solid #e0e0e6",borderRadius:"8px",mr:"12px",mt:"10px",width:"100%",background:"linear-gradient(0deg,hsla(240,3%,94%,.5),hsla(240,3%,94%,.5)),#fff"}}>
              <Box sx={{display:"flex",justifyContent:"space-between",height:"58.4px",padding:"12px 20px",alignItems:"center"}}>
                <Typography sx={{color:"#080a38",fontSize:"17px"}}>فروشنده</Typography>
                <Typography sx={{color:"#19bfd3",fontSize:"13px"}}>۳ فروشنده دیگر</Typography>
              </Box>
              <Box sx={{display:"flex",height:"86.29px",padding:"12px 16px",borderBottom:"1px solid #e0e0e6"}}><StoreMallDirectoryIcon sx={{ml:"16px"}}/>
                    <Box sx={{display:"flex",flexDirection:"column",height:"62px"}}>
                      <Box sx={{display:"flex",height:"62px"}}>
                        <Typography sx={{fontSize:"17px",ml:"8px"}}>را یاتک</Typography>
                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"0px 8px",color:"#00a049",borderRadius:"8px",backgroundColor:"rgba(0,160,73,.1)",height:"22px"}}> 
                    <Typography sx={{fontSize:"13px"}}>منتخب</Typography>
                      </Box>
                   </Box> 
                   <Box sx={{display:"flex",height:"26px",alignItems:"center"}}>
                    <Typography sx={{color:"#767790",fontSize:"14px",ml:"4px"}}>عملکرد</Typography> 
                    <Typography sx={{color:"#00a049",fontSize:"14px"}}>عالی</Typography>
                   </Box>
                    </Box>  
              </Box>
              <Box sx={{display:"flex",alignItems:"center",height:"50px",padding:"12px 16px",borderBottom:"1px solid #e0e0e6"}}>
                      <VerifiedUserOutlinedIcon sx={{ml:"16px",padding:"1px"}}/>
                      <Typography sx={{fontSize:"14px"}}>گارانتی ۱۸ ماهه هما تلکام</Typography>
                    </Box>
                    <Box sx={{display:"flex",height:"113px",padding:"12px 16px",borderBottom:"1px solid #e0e0e6",justifyContent:"space-between"}}>
                      <Box sx={{display:"flex",flexDirection:"column",height:"88px",}}>
                        <Box sx={{display:"flex",mb:"4px",alignItems:"center"}}>
                           <AssignmentTurnedInOutlinedIcon sx={{ml:"12px",color:"#19bfd3"}}/> 
                            <Typography sx={{fontSize:"17px"}}>موجود در انبار فروشنده و دیجی‌کالا</Typography>
                        </Box>
                        <Box sx={{display:"flex",ml:"12px",alignItems:"center"}}>
                        <CircleIcon sx={{color:"#767790", padding:"8px",ml:"12px"}}/>
                        <LocalShippingOutlinedIcon sx={{p:"3px",color:"#3f4064"}}/>
                        <Typography sx={{mr:"4px",fontSize:"13px",color:"#767790"}}>ارسال دیجی‌کالا از ۱ روز کاری دیگر</Typography>
                        </Box>
                        <Box sx={{display:"flex",ml:"12px",alignItems:"center"}}>
                        <CircleIcon sx={{color:"#19bfd3", padding:"8px",ml:"12px"}}/>
                        <Person4OutlinedIcon sx={{p:"3px",color:"#d86b00"}}/>
                        <Typography sx={{mr:"4px",fontSize:"13px",color:"#767790"}}>ارسال فروشنده</Typography>
                        </Box>
                      </Box>
                      <ArrowBackIosNewIcon sx={{p:"4px",color:"#9e9fb1"}}/>
                    </Box>
                    <Box sx={{display:"flex",padding:"12px 16px",height:"50px",alignItems:"center"}}>
                      <MonetizationOnIcon sx={{color:"#f9bc00",p:"2px",ml:"16px"}}/>
                      <Typography sx={{fontSize:"13px"}}>۱۵۰ امتیاز دیجی‌کلاب</Typography>
                      <ErrorOutlineIcon sx={{color:"#81858b",p:"2px",mr:"8px"}}/>
                    </Box>
                    <Box sx={{display:"flex",height:"66px",padding:"0px 16px",alignItems:"center",justifyContent:"space-between"}}>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                          <ErrorOutlineIcon sx={{color:"#81858b"}}/>
                    <Typography sx={{color:"#767790",mr:"8px",fontSize:"13px"}}>قیمت فروشنده</Typography>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column"}}>
                      <Box sx={{display:"flex",height:"26.4px"}}>
                        <Typography sx={{ml:"4px",color:"#c3c3ce",fontSize:"13px",textDecoration:"line-through"}}>۸۱,۷۰۰,۰۰۰</Typography>
                        <Box sx={{display:"flex",background:"#ef394e",height:"20px",borderRadius:"16px",mr:"4px",padding:"0px 4px",alignItems:"center",color:"white"}}>5%</Box>
                      </Box>
                      <Box sx={{display:"flex",height:"40px",}}>
                        <Typography sx={{mr:"4px",fontSize:"18px"}}>۷۷,۲۹۰,۰۰۰</Typography>
                      </Box>
                    </Box>
                    </Box>
                    <Typography sx={{padding:"0px 16px",mb:"12px",color:"#ef4056",fontSize:"14px"}}>تنها ۲ عدد در انبار دیجی‌کالا باقی مانده</Typography>
                    
                        <Button variant="contained" sx={{background:"#ef4056",margin:"16px 16px",height:"40px"}}>افزودن به سبد</Button>   
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",height:"44px",border:"1px solid #f1f2f4",borderRadius:"4px",padding:"8px 20px",mt:"8px",mr:"12px",width:"100%"}}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                <ErrorOutlineIcon sx={{color:"#81858b",ml:"8px",p:"3px"}}/>
                <Typography sx={{color:"#5a5c7a",fontSize:"14px"}}>فرآیند قیمت‌گذاری و نظارت بر قیمت</Typography>
                </Box>
                <ArrowBackIosNewIcon sx={{p:"4px",color:"#9e9fb1"}}/>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-end",height:"24px",mt:"8px",cursor:"pointer"}}>
              <Typography sx={{color:"#9e9fb1",fontSize:"10px"}}>قیمت بهتری سراغ دارید؟</Typography>
              <LocalOfferOutlinedIcon sx={{mr:"8px", p:"4px",color:"#9e9fb1"}}/>
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

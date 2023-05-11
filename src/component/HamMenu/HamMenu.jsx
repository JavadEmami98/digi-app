import React, { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import StorefrontIcon from '@mui/icons-material/Storefront';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box, Typography } from "@mui/material";

const menubar = [{icon:<StorefrontIcon/>,title:"سوپرمارکت"},
{icon:<LocalFireDepartmentOutlinedIcon/>,title:"پرفروش‌ترین‌ها"},
{icon:<LocalOfferOutlinedIcon/>,title:"تخفیف‌ها و پیشنهادها"},
{icon:<PercentOutlinedIcon/>,title:"شگفت‌انگیزها"},
{icon:<HelpOutlineOutlinedIcon/>,title:"سوالی دارید؟"},
{icon:<StoreOutlinedIcon/>,title:"در دیجی‌کالا بفروشید"},]


const list = [{title:"موبایل"},
{title:"کالای دیجیتال"},
{title:"خانه و آشپزخانه"},{title:"مد و پوشاک"},{title:"کالاهای سوپرمارکتی"},{title:"کتاب، لوازم تحریر و هنر"},{title:"اسباب بازی، کودک و نوزاد"},{title:"زیبایی و سلامت"},{title:"ورزش و سفر"},{title:"ابزار، لوازم ساختمانی و صنعتی"},{title:"خودرو و موتورسیکلت"},{title:"محصولات بومی و محلی"},]

const HamMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <MenuIcon onClick={() => setOpen(true)}/>
      <div>
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
            <Box sx={{display:"flex",alignItems:"center",borderBottom:"1px solid #f1f2f4",width:"272px"}}>
             <img src="https://www.digikala.com/statics/img/svg/digi.svg" alt="" loading="lazy" style={{padding:"20px 0px",margin:"0px 20px 4px",maxWidth:"90px"}} />
            </Box>
            {menubar.map((item,index)=>(
            <Box key={index} sx={{display:"flex",alignItems:"center",padding:"0px 20px",height:"52px",
            borderBottom: index + 1 === menubar.length ?  "1px solid #f1f2f4": ""}}>
            <Box sx={{display:"flex",alignItems:"center",ml:"16px",color:"#9e9fb1"}}>
                {item.icon}
            </Box> 
                <Typography sx={{color:"#3f4064",typography:"body2",fontSize:"13px"}}>{item.title}</Typography>
            </Box>))}
            <Box sx={{height:"30px",paddingRight:"20px",margin:"20px 0",fontSize:"14px",}}>
                 <Typography sx={{color:"#080a38"}}>دسته‌بندی کالاها</Typography>
            </Box>
            {list.map((item,index)=>(

           
            <Box key={index} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0px 20px",height:"52px"}}>
           <Typography sx={{fontSize:"13px",color:"#3f4064"}}>{item.title}</Typography>
                <KeyboardArrowDownOutlinedIcon/>
           </Box> ))}
        </Drawer>
      </div>
    </Fragment>
  );
};

export default HamMenu;
import { Box, Switch, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";

const names = [
  {
    title: "برند",
    id: 0,
    type: "checkBox",
    detail: [
      { title: "اپل" },
      { title: "سامسونگ" },
      { title: "شیائومی" },
      { title: "هوآوی" },
      { title: "نوکیا" },
      { title: "سونی" },
    ],
  },
  {
    title: "شبکه های ارتباطی",
    id: 1,
    type: "checkBox",
    detail: [
      { title: "5G" },
      { title: "4G" },
      { title: "4.5G" },
      { title: "3G" },
    ],
  },
  { title: "ریجستر  ", id: 7, type: "switch" },
  {
    title: "رنگ",
    id: 2,
    type:"checkBox",
    detail: [
      { title: "مشکی" },
      { title: "زرد" },
      { title: "آبی" },
      { title: "سفید" },
    ],
  },
  /* { title: "محدوده قیمت" },
  { title: "نوع فروشنده" },
  ,
  { title: "ویدیو" },
  { title: "پشتیبانی از کارت حافظه" },
  { title: "دوربین‌های پشت گوشی" },
  { title: "فن‌آوری موبایل" },
  { title: "توضیحات سیم کارت" },
  { title: "نوع پردازنده" },
  { title: "فناوری فوکوس" },
  { title: "قابلیت‌های نرم‌افزاری" },
  { title: "ویژگی‌های خاص" },
  { title: "موسیقی" },
  { title: "فناوری صفحه‌نمایش" },
  { title: "سیستم عامل" },
  { title: "محافظت" },
  { title: "دسته ‌بندی" },
  { title: "حافظه داخلی" }, */
];

function Filter() {
  const [open, setOpen] = React.useState(true);

  const handleClick = (name) => {
    setOpen(name === open ? "" : name);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #e0e0e6",
          borderRadius: "8px",
          height: "auto",
          padding: "16px 20px",
          width: "250px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>فیلتر ها</Typography>
          <Typography sx={{ color: "#19bfd3", fontSize: "14px" }}>
            حذف فیلترها
          </Typography>
        </Box>

        {names.map((item, index) => (
          <Fragment key={index}>
            {item.type === "checkBox" ? (
              <Box
                sx={{
                  /*  display: "flex",  */
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                  padding: "20px 5px",
                  borderBottom: index + 1 === names.length ? "": "1px solid #f1f2f4",
                }}
              >
                <Box
                  onClick={() => handleClick(item?.title)}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography sx={{fontSize:"15px"}}>{item.title}</Typography>
                  {open === item.title ? <ExpandLess /> : <ExpandMore />}
                </Box>
                <Box>
                  <Collapse
                    in={open === item.title}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box>
                      {item.detail.map((option, index) => (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            borderBottom: "1px solid #f1f2f4",
                            pt: "5px",
                            mr: "5px",
                          }}
                          key={index}
                        >
                          <Checkbox size="small" />
                          <Typography sx={{ fontSize: "15px" }}>
                            {option.title}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                  padding: "20px 5px",
                  borderBottom: "1px solid #f1f2f4",
                }}
              >
                <Typography>{item.title}</Typography>
                <Switch/>
              </Box>
            )}
          </Fragment>
        ))}
      </Box>
    </div>
  );
}

export default Filter;

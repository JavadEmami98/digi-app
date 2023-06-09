import React from "react";
import Grid from "@mui/material/Grid";
import DigitCard from "./DigitCard";
import { Box } from "@mui/material";

const digit = [
  {
    title: "جی‌ کالا جت",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png",
    id: 0,
  },
  {
    title: "حراج استایل ",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png",
    id: 1,
  },
  {
    title: "خرید اقساطی",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png",
    id: 2,
  },
  {
    title: " جی‌کالا سرویس",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/555ad3336a60bbd1433dd7a999f4d487e96602d8_1680678388.png",
    id: 3,
  },
  {
    title: "ماه رمضان",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/269766a358cf34e58ccaf49aa3ac2d2db397af7a_1679516613.png",
    id: 4,
  },
  {
    title: "دیجی پلاس",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png",
    id: 5,
  },
  {
    title: "ماموریت‌ها ",
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png",
    id: 6,
  },
  {
    title: "  بیشتر",
    image: "https://icon-library.com/images/more-icon/more-icon-13.jpg",
    id: 7,
  },
];

function Digit() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, justifyContent: "space-between", width: "100%" }}>
        <Grid
          container
          spacing={0.25}
          sx={{
            width: "100%",
            mt: { xs: "20px", sm: "20px" },
            justifyContent: "space-between",
          }}
        >
          {digit.map((item, index) => (
            <Grid item lg={1} xl={1} xs={3}>
              <DigitCard key={index} title={item.title} image={item.image} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Digit;

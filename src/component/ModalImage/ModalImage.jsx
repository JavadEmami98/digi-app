import { Box, Modal } from "@mui/material";
import React from "react";
import SwiperModal from "./SwiperModal";

const images = [
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/8606b2495a0ff741091b441b76fcb83052beee3e_1675774260.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/73409683bedd334608bd3aff7c048fcddc3094ed_1675774258.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/bbfae5e7d0e23ce89021cd94878df040fe90fc6b_1675774255.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1675774252.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/081fcfb278d1dd56bdf49cde4bc60e80d7fd1d70_1675774248.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-products/081fcfb278d1dd56bdf49cde4bc60e80d7fd1d70_1675774248.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
  },
];


function ModalImage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
       <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "81px",
          mt: "20px",
          mb: "15px",
          justifyContent: "space-between",
          gap: 1,
          ml: "12px",
        }}
      >
        {images.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "4px",
              ml: "8x",
              border: "1px solid #e0e0e6",
              borderRadius: "8px",
              flexDirection: "row",
            }}
          >
            <img
              onClick={handleOpen}
              src={item.img}
              alt=""
              style={{ maxWidth: "72px" }}
            />
          </Box>
        ))}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: 2,
            maxWidth: "800px",
            p: 2,
            border: "none",
            outline: "none",
          }}
        >
          <SwiperModal />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalImage;

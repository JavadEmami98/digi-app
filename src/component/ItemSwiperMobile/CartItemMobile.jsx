import { Box } from '@mui/material'
import React from 'react'

function CartItemMobile({image}) {
  return (
    <div>
        <Box>
            <img src={image} alt="" style={{objectFit:"cover",maxWidth:"330px"}}/>
        </Box>
    </div>
  )
}

export default CartItemMobile
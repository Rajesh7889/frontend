import {Button, styled} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShopIcon from '@mui/icons-material/Shop';

function BuyAddBtn(props) {

    const navigate=useNavigate()
  return (
        
           <Btn2 
             onClick={()=>
         
             props?.type==='card'
              ?navigate(`/products/products-buy/buycard`)
              :navigate(`/products/products-buy/${props.id}`)} 
              variant="contained" 
              sx={{width:props.matches?"30px":"170px"}}>
              {props.matches?<ShopIcon/>:"Buy Now"}
           </Btn2>
  )
}

const Btn2=styled(Button)(()=>({
  margin:"10px auto",
  backgroundColor:"#73566f",
  ":hover":{backgroundColor:"#d1adcc"}
}))
export default BuyAddBtn
import { Typography } from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Cost(props) {
  return (
    <>
      {props.price&&
      <Typography>
            <b style={{color:"darkGreen",fontSize:"20px"}}><CurrencyRupeeIcon sx={{fontSize:"13px"}}/>{props.price } </b>
            <span style={{color:"grey"}}>M.R.P</span> 
            <i style={{textDecorationLine:"line-through",textDecorationColor:"darkred",textDecorationThickness:"3px"}}>{Math.round(props.price+((props.price)/100)*40)}</i>
            <b style={{marginLeft:"20px"}}>(40% off )</b>
      </Typography>}
    </>
  )
}

export default Cost
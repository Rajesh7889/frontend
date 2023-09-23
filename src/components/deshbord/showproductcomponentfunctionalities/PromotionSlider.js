import React, { useEffect, useState } from 'react'
import { PromotionAlert, PromotionBox, PromotionImage, PromotionText, Promotionproductdtls, Promotionscont } from '../../../styles/BannerStyle'
import { Box, Slide, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Cost from '../unitcomponents/Cost';
import BuyAddBtn from '../unitcomponents/BuyAddBtn';

function PromotionSlider(props) {

    const [show,setShow]=useState(true)
    const [itmIndx,setItmIndx]=useState(0)
    const [animatetime,setTime]=useState(true)
    const theme= useTheme()
    const matches1=useMediaQuery(theme.breakpoints.down('sm'))
    useEffect(()=>{
    const intervalId = setInterval(()=>{
        setItmIndx(i=>(i+1) %5)
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 3000);
    },4000)
    return()=>{
      clearInterval(intervalId)
    }
  },[])

   useEffect(()=>{
    const interval=setInterval(()=>setTime(pre=>!pre),1000)
    return()=>{
      clearInterval(interval)
    }
  },[])
  return (
    <Promotionscont theme={theme}>
      <Slide  direction={show?"left":"right"} in={show} timeout={{enter:500,exit:100}}>
             <Box>
                {
                  props.promote[itmIndx] ?
                   <PromotionBox theme={theme}>
                     <PromotionImage theme={theme} src={props.tryRequire(`${props.promote[itmIndx].img}`)} onClick={()=>props.productDetails(props.promote[itmIndx]._id)}></PromotionImage>
                       <Promotionproductdtls theme={theme} >
                             <PromotionText theme={theme}>{props.promote[itmIndx].name }</PromotionText>

                             <Typography sx={{color:"grey",fontSize:{md:"16px",xs:"14px"}}}>
                                    <i>{props.promote[itmIndx].about} </i> 
                             </Typography>
                             <Cost price={props.promote[itmIndx].price}/>
                              <Box sx={{maxWidth:{lg:"450px",md:"300px",sm:"430px",xs:"140px"},position:{sm:"relative",xs:"absolute"},top:{sm:0,xs:60},left:matches1&&"60%"}}>
                                 <BuyAddBtn id={props.promote[itmIndx]._id} matches={matches1}/>
                              </Box>
                        </Promotionproductdtls>
                     </PromotionBox>:""
               }
            </Box>
      </Slide>
      <PromotionAlert noWrap sx={{width:animatetime?"100px":0,height:animatetime?"42px":0}}> Best-offers</PromotionAlert>
      </Promotionscont>
  )
}

export default PromotionSlider
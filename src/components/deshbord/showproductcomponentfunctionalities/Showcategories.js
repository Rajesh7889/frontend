import { Box,Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopIcon from '@mui/icons-material/Shop';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {Button1, Button2,ProductBox,ProductCatContainer,ProductDetailsBox,ProductHeading, ProductImage} from '../../../styles/Showcategories'
import PromotionSlider from './PromotionSlider';
import { tryRequire } from '../../API/APIreq';
import LikeCardInforoptn from './LikeCardInforoptn';


function Showcategories(props) {
  const lists = props.allprdct
  const navigate=useNavigate()
  const [promote,setpromote]=useState([])
  const [itms,setItms]=useState(4)
  const [grd,setGrd]=useState(3)
  const theme=useTheme()
  const match1=useMediaQuery(theme.breakpoints.up('lg'))
  const match2=useMediaQuery(theme.breakpoints.up('md'))
  
  useEffect(()=>
      setpromote(lists[0]),[props.allprdct])

  useEffect(()=>{
     if(match1){
         setGrd(3);
         setItms(4)}
    else {setGrd(6);
          setItms(2)}
  },[match1])
 
  return (
  <>
      <Grid item xs={12} sx={{padding:"10px"}}>
          { 
            <PromotionSlider  
               tryRequire={tryRequire} 
               promote={promote} 
               productDetails={props.productDetails}/>
          }

           </Grid>
           
          {
             lists.map((products,index)=>{
              if(products.length>0){
              return(
                 <ProductCatContainer
                  theme={theme} 
                  container 
                  key={index}
                  onClick={()=>{
                       props.callcomp==='home'?
                       navigate(`/categorical-search/${products[0].categorytitle}/${products[0].category}`):
                       navigate(`/subcategories-search/${products[0].category}/${products[0].subcatcod}`)
                     }}    
                  >

                <ProductHeading>
                    {
                     props.callcomp==='home'
                     ?products[0].categorytitle
                     :products[0].subcat
                    }
                </ProductHeading>

                   <Grid item  xs={12} sx={{height:"304px",display:"flex",justifyContent:"center",flexDirection:{sm:"row",xs:"column"}}}>
                      <Box  sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"30px",height:{sm:"304px",xs:"100px"},width:{sm:300,xs:"100%"}}}>
                         <Box sx={{textAlign:"center"}}>
                              <Typography sx={{fontSize:{md:"18px",sm:"15px",xs:"11px"}}}>Here are the best quality</Typography>
                              <Box  sx={{fontSize:{md:"20px",sm:"18px",xs:"14px"},fontWeight:700,color:"#352133"}}>
                                       {
                                          props.callcomp==='home'
                                          ?products[0].categorytitle
                                          :products[0].subcat
                                       }
                              </Box>
                              <Typography sx={{fontSize:{md:"18px",sm:"15px",xs:"11px"}}}>products for you..</Typography>
                              <Button1 variant='contained' size='small'>click here</Button1>
                         </Box>
                      </Box>
                      <Box  sx={{width:{sm:`calc(100% - 300px)`,xs:"100%"},height:"304px",}}>
                        <Grid container sx={{height:"100%"}}>
                           {
                             products.length>0?
                             products.slice(-itms).map((item,index)=>{
                                 let name=item.name;
                                 if(!match1&&match2){
                                    name=`${name.slice(0,7)}..`
                                    }
                               return (
                                 <ProductBox key={index} item xs={grd}>
                                        <ProductImage  src={tryRequire(`${item.img}`)} alt=""/>
                                        <LikeCardInforoptn productDetails={props.productDetails} item={item}/>
                                        <ProductDetailsBox>

                                           <Box  sx={{width:"80%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>  
                                              <Typography sx={{minWidht:"70%",fontFamily:"Arial Narrow,Arial, sans-serif",fontSize:"20px",fontWeight:600}}><i>{name}</i></Typography>
                                              <Typography sx={{minWidth:"30%"}}><CurrencyRupeeIcon sx={{fontSize:"10px"}}/>{item.price}</Typography>
                                           </Box>

                                           <Button2 
                                              endIcon={<ShopIcon/>} 
                                              onClick={(e)=>{
                                                 e.stopPropagation();
                                                 navigate(`/products/products-buy/${item._id}`)
                                           }}>
                                              BUY NOW
                                           </Button2>
                                           
                                    </ProductDetailsBox>
                                 </ProductBox>)}):""
                              }
                      </Grid>
                   </Box>
                </Grid>
             </ProductCatContainer>
             )}})}
  </>
  )
}

export default React.memo(Showcategories)
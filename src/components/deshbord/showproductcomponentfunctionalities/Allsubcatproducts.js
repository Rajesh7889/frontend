import { Box, Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button2, ProductBox, ProductDetailsBox, ProductHeading, ProductImage } from '../../../styles/Showcategories'
import ShopIcon from '@mui/icons-material/Shop';
import { useNavigate } from 'react-router-dom';
import Cost from '../unitcomponents/Cost';
import { tryRequire } from '../../API/APIreq';
import RemoveButtom from '../unitcomponents/RemoveButtom';
import LikeCardInforoptn from './LikeCardInforoptn';

function Allsubcatproducts(props) {
 
    const navigate=useNavigate()  
    const theme=useTheme()
    const[grdcnt,setGrdcnt]=useState(3)
    let match1=useMediaQuery(theme.breakpoints.up('lg'))
    let match2=useMediaQuery(theme.breakpoints.down('md'))
    let match3=useMediaQuery(theme.breakpoints.down('sm'))
    useEffect(()=>{
        match1&&!match3?
        setGrdcnt(3):
        !match1&&!match3?
        setGrdcnt(4):
        setGrdcnt(6)
    },[match1,match2,match3])
    const productDetails=(id)=>{
      navigate(`/products/products-details/${id}`)
     }
  return (
    <Grid container spacing={2}>
          {props.comptype!=='specific'&&<ProductHeading sx={{marginTop:"30px",textAlign:"center"}}>{props.product[0].subcat&&props.product[0].subcat}</ProductHeading>}
                            {
                             props.product?
                             props.product.map((item,index)=>{
                               return (
                                  <ThisProductCont key={index} xs={grdcnt} item >
                                     <ThisProductBox onClick={()=>props.comptype==="specific"?productDetails(item._id):navigate(`/identical-products/${item.name}`)}>
                                           <ProductHeading>{item.name}</ProductHeading>
                                           <ProductImage src={tryRequire(`${item.img}`)} sx={{padding:"0px 15px"}} alt=""/>
                                           <ProductDetailsBox>

                                               <Box sx={{position:"absolute",top:60,left:40,width:"100px"}}>
                                                 {
                                                  !props.type
                                                       ?<LikeCardInforoptn caller={props.caller} productDetails={productDetails} item={item} DeleteItm={props.DeleteItm}/>
                                                       :(props.caller!=='seller')&&<RemoveButtom type={props.type} fxn={props.fxn} id={item._id}/>
                                                 }
                                               </Box>
                                               <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",padding:"0px 15px 15px 15px"}}>  
                                                       <Details theme={theme}><i>{item.about&&item.about.length>100&&item.about.slice(0,100)}...</i></Details><br/>
                                                       <Cost price={item.price}/>

                                                       {(!props.caller)&&
                                                             <Button2 
                                                               endIcon={<ShopIcon/>}
                                                               onClick={(e)=>{
                                                                   e.stopPropagation();
                                                                   navigate(`/products/products-buy/${item._id}`)
                                                             }}>
                                                                   BUY NOW
                                                             </Button2>
                                                       }
                                              </Box>
                                              
                                           </ProductDetailsBox>
                                     </ThisProductBox>
                                  </ThisProductCont>
                                 )}):""
                              }
      </Grid>
  )
}

export const ThisProductBox= styled(Box)(()=>({
      width:"90%",
      backgroundColor:"white",
      border:"3px solid #d1adcc",
      ":hover":{border:"3px solid #73566f"}
}))

export const ThisProductCont= styled(ProductBox)(()=>({
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"transparent",
}))

 export const Details=styled(Typography)(({theme})=>({
      fontFamily:"Arial Narrow,Arial, sans-serif",
      wordBreak:"break-all",
      fontWeight:600,
      [theme.breakpoints.up('xl')]:{fontSize:"20px"}
}))
export default Allsubcatproducts
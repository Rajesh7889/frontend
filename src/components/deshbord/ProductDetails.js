import React, { Fragment, useEffect, useState }  from 'react'
import {useNavigate, useParams } from "react-router-dom"
import { Box,Button,Divider,Grid, Rating, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import Cost from './unitcomponents/Cost';
import BuyAddBtn from './unitcomponents/BuyAddBtn';
import Allsubcatproducts, { Details, ThisProductBox, ThisProductCont } from './showproductcomponentfunctionalities/Allsubcatproducts';
import { ProductDetailsBox, ProductHeading, ProductImage } from '../../styles/Showcategories';
import { searchItem, tryRequire ,getSpecificProducts} from '../API/APIreq';
import LikeCardInforoptn from './showproductcomponentfunctionalities/LikeCardInforoptn';
import Loader from './unitcomponents/Loader';
import DeliveryDate from './unitcomponents/DeliveryDate';

function ProductDetails() {
  const params=useParams()
  const theme=useTheme()
  const navigate=useNavigate()

  const [data,setData]=useState([])
  const [product,setProduct]=useState([])
  const [Ava,setAva]=useState(true)
  const [loader,setLoader]=useState(false)
 
 const match=useMediaQuery(theme.breakpoints.down('sm'))

 const dtls=async()=>{
    let dtl= await getSpecificProducts(params.id)
    setProduct(dtl)
    setLoader(false)
 }

 async function getData(){
  setData(await searchItem({value:product[0]?.subcat}))
}

    useEffect(()=>{
        setLoader(true)
        dtls()
        getData()
    },[product[0]?.name,params.id])

  const ABOUT=[
    {title:"Product Name",value:product[0]?.name},
    {title:"Brand",value:product[0]?.company},
    {title:"Category",value:product[0]?.subcat},
  ]

  const details=[
    {title:"Upgraded Wearing Experience - Precision design, quality plastics, unibody headband construction, superior quality mic makes this call center cell phone headphone with microphone sturdier and more durable. Adjustable headset to fit all head sizes, high quality and soft leatherette ear cushion enhance all-day wearing comfort."},
    {title:"Upgraded Wearing Experience - Precision design, quality plastics, unibody headband construction, superior quality mic makes this call center cell phone headphone with microphone sturdier and more durable. Adjustable headset to fit all head sizes, high quality and soft leatherette ear cushion enhance all-day wearing comfort."},
    {title:"Upgraded Wearing Experience - Precision design, quality plastics, unibody headband construction, superior quality mic makes this call center cell phone headphone with microphone sturdier and more durable. Adjustable headset to fit all head sizes, high quality and soft leatherette ear cushion enhance all-day wearing comfort."},
    {title:"Upgraded Wearing Experience - Precision design, quality plastics, unibody headband construction, superior quality mic makes this call center cell phone headphone with microphone sturdier and more durable. Adjustable headset to fit all head sizes, high quality and soft leatherette ear cushion enhance all-day wearing comfort."},
    {title:"Upgraded Wearing Experience - Precision design, quality plastics, unibody headband construction, superior quality mic makes this call center cell phone headphone with microphone sturdier and more durable. Adjustable headset to fit all head sizes, high quality and soft leatherette ear cushion enhance all-day wearing comfort."},
    {title:"Upgraded Wearing Experience - Precision design, quality plastics, unibody headband construction, superior quality mic makes this call center cell phone headphone with microphone sturdier and more durable. Adjustable headset to fit all head sizes, high quality and soft leatherette ear cushion enhance all-day wearing comfort."},
    {title:"Upgraded Wearing Experience - Precision design, quality plastics, unibody headband construction, superior quality mic makes this call center cell phone headphone with microphone sturdier and more durable. Adjustable headset to fit all head sizes, high quality and soft leatherette ear cushion enhance all-day wearing comfort."},
  ]
  
    

  const productDetails=(id)=>{
    navigate(`/products/products-details/${id}`)
   }
  return (
        <>
          {loader?<Loader/>:
           <>
              { product.length&&
                 <Grid container> 
                   <ThisProductCont xs={12} item>
                     <ThisProductBox sx={{width:"100%"}}>
                         
                         <ProductHeading>{product[0]?.name}</ProductHeading>
                         <ThisProductCont xs={12} item sx={{flexDirection:match?"column":"row"}}>
                             <Available sx={{backgroundColor:Ava?"green":"orange"}}>
                               {Ava?"Available":"Out-of-stock"}
                             </Available>
                             <ProductImage src={tryRequire(product[0]?.img)} sx={{padding:"15px",maxWidth:400}} alt=""/>
                             <ProductDetailsBox sx={{width:match?"100%":"50%"}}>
                                 <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",padding:"0px 15px 15px 15px"}}>  
                                     <Details theme={theme} sx={{textAlign:"center"}}>
                                       <i>{product[0]?.about}</i>
                                     </Details><br/>
                                     <Cost price={product[0]?.price}/>
                                     <Rating name="disabled" value={3.5} readOnly />
                                 </Box>
                             </ProductDetailsBox>
                         </ThisProductCont>
                    
                         <Divider sx={{marginLeft:"10%",width:"80%"}}/>
                    
                         <ThisProductCont xs={12} item sx={{flexDirection:match?"column":"row"}}>
                           <ProductDetailsBox sx={{width:!match?"50%":"100%",position:"relative"}}>
                               <Box sx={{minWidth:"100px",height:"45px",position:"relative"}}>
                                    <LikeCardInforoptn caller={'dtls'}  item={product[0]&&product[0]}/>
                                 </Box>
                                 <Box sx={{ marginTop:"20px",maxWidth:"400px",textAlign:"center",position:"relative",padding:"0px 30px"}}>
                                     <span style={{fontWeight:700,color:"darkOrange"}}>FREE delivery </span>
                                     <DeliveryDate/>
                                     <i style={{color:"#73566f"}}> on your first order in this category.</i> 
                                     <span style={{fontWeight:700,color:"green",fontSize:"15px"}}> Order within 24 hrs.</span>
                                 </Box>
                                 <Box sx={{minWidth:"100px",marginBottom:"20px",height:"45px",position:"relative"}}>
                                     <BuyAddBtn id={product[0]._id}/>
                                 </Box>
                           </ProductDetailsBox>
                           
                            {!match
                               ?<Divider orientation={!match&&"vertical"} flexItem />
                               :<Divider sx={{width:"80%",marginTop:"20px"}}/>
                            }
                           
                           <ProductDetailsBox sx={{width:!match?"50%":"100%",marginBottom:"50px"}}>
                               <Grid container sx={{padding:"10px"}}>
                                  {ABOUT.map((item,index)=>{
                                    return(
                                         <Fragment key={index}>
                                             <Grid xs={6} sx={{textAlign:"end",paddingRight:"20px",lineHeight:2,fontWeight:600}} item>
                                               {item.title}
                                             </Grid>
                                             <Grid xs={6} sx={{paddingLeft:"20px",borderLeft:"1px solid lightGrey",fontWeight:700}} item>
                                               {item.value}
                                             </Grid>
                                         </Fragment>)
                                   })}
                                 
                               </Grid>
                           </ProductDetailsBox>

                           {!match
                               ?<Divider orientation={!match&&"vertical"} flexItem />
                               :<Divider sx={{width:"80%",marginTop:"20px"}}/>
                            }
                      </ThisProductCont>

                      <ProductDetailsBox sx={{width:"90%",padding:"40px",margin:"5px 5% 30px 5%",borderRadius:"15px",outline:"1px solid grey",border:"1px solid black"}}>
                               <ProductHeading sx={{textAlign:"center",width:'80%',padding:"5px",marginBottom:"20px",borderRadius:"10px"}}>Details</ProductHeading>
                                <ul style={{}}>
                                  {details.map((item,index)=>{
                                    return(
                                      <Fragment key={index}>
                                         <li style={{margin:"15px 0px 10px 0px",lineHeight:1.5}}>
                                          {item.title}
                                         </li>
                                      </Fragment>)})
                                      }
                                </ul>
                         </ProductDetailsBox>
                     </ThisProductBox>
                  </ThisProductCont>
                
               </Grid>
            }
          <Box>
            <ThisProductCont>
                    <ThisProductBox sx={{width:"100%"}}>
                      <ProductHeading sx={{textAlign:"center",marginBottom:"10px"}}>Related items </ProductHeading>
                      {
                          data.length&&
                          <Allsubcatproducts comptype={'specific'} product={data} productDetails={productDetails}/>
                       }
                       
                    </ThisProductBox>
            </ThisProductCont>
        </Box>
        <Button onClick={()=>{window.scrollX=0;window.scrollY=0}}>top</Button>
   </>}
</>)
}

export const Available=styled(Typography)(()=>({
  position:"absolute",
  top:10,
  right:10,
  width:"150px",
  borderRadius:"5px",
  textAlign:"center",
  fontSize:"20px",
  fontWeight:"700",
  color:"white",
}))
export default React.memo(ProductDetails)
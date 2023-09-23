import React, { Fragment, useEffect, useState } from 'react'
import {  Button1, ProductImage } from '../../../styles/Showcategories'
import { Box,Grid, Typography, styled} from '@mui/material'
import { savings, tryRequire } from '../../API/APIreq'
import { Divider } from './BuyProduct'
import Cost from '../unitcomponents/Cost'
import DeliveryDate from '../unitcomponents/DeliveryDate'
import { LogDfltComp } from './BuyPrdtSubcomp'

function Ordersummery({data,updtCost,updtsave,ordrsmry,email,history}) {
    
    let records={}
    const [items,setItems]=useState()
    const [recstat,setRecstat]=useState(records)
    
    useEffect(()=>{
            setItems(data)
    },[data[0].name])


    useEffect(()=>{

            if(history===undefined){
              data.map((item)=>{
                  records[item._id] = 1;
                  return 0
              })
               setRecstat(records)
            }else{
               setRecstat(history)
            }
          
    },[Object.keys(recstat).length])



    const inc=(id,price,saving)=>{
          setRecstat({...recstat,[id]:recstat[id]+1})
          updtCost(price)
          updtsave(saving)
    }
  
    const dec=(id,price,saving)=>{
      if(recstat[id]>1){
          setRecstat({...recstat,[id]:recstat[id]-1})
          updtCost(-price)
          updtsave(-saving)}
    }

    const orderSummerysave=()=>{
          ordrsmry(recstat)
    }

  return(
    <>
        <Grid container spacing={2}>
          <Grid item xs={12} ><Typography sx={{paddingLeft:"5px"}}>Your order will be placed on <DeliveryDate/></Typography></Grid>
           {data?.length&&data.map((itm,index)=>{
            return(
                <Fragment key={index}>
                     <Grid item sm={4} xs={6}>
                         <ProductImage src={tryRequire(itm.img)} sx={{maxHeight:"100px"}}></ProductImage>
                          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                 <CstmBtn onClick={()=>dec(itm._id,itm.price,savings(itm))}>-</CstmBtn>
                                 <ShowNmbr>{recstat[itm._id]}</ShowNmbr>
                                 <CstmBtn onClick={()=>inc(itm._id,itm.price,savings(itm))}>+</CstmBtn>
                          </Box>
                     </Grid>
                     <Grid item sm={8} xs={6}>
                         <Box sx={{padding:"5px"}}>
                            <Typography>{itm.name}</Typography>
                            <Typography>{itm.company}</Typography>
                            <Cost price={itm.price*recstat[itm._id]}/>
                          </Box>
                     </Grid>
                     
                    <Divider sx={{width:'90%',marginLeft:"7%"}}/>
                </Fragment> 
               )})
          }
          <Grid item xs={12} sx={{textAlign:"center"}}>
               <LogDfltComp msg={'Order confirmation email will be sent to'} email={email}/>
          </Grid>
          <Grid item xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center",}}>
              <Button1 sx={{color:'white',marginBottom:"20px",width:"60%"}} onClick={()=>{orderSummerysave()}}>continue</Button1>
          </Grid>
       </Grid>
    </>
  )
}

export default Ordersummery

const CstmBtn=styled(Box)(()=>({
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     height:"20px",
     width:"20px",
     borderRadius:"5px",
     paddingBottom:"4px",
     cursor:"pointer",
     backgroundColor:"#73566f",
     color:"white",
     "&:hover":{
        border:"2px solid #73566f",
        color:"#73566f",
        backgroundColor:"#d1adcc"
     }
}))


const ShowNmbr=styled(Typography)(()=>({
  width:"30px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  fontSize:"20px",
  fontWeight:700,
  color:"#73566f"
}))
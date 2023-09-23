import React, { Fragment, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { favandCardprdctdtls, getSpecificProducts, savings} from '../../API/APIreq'
import Loader from '../unitcomponents/Loader'
import { Box,Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import { ThisProductBox, ThisProductCont } from '../showproductcomponentfunctionalities/Allsubcatproducts'
import { Button1, ProductDetailsBox, ProductHeading } from '../../../styles/Showcategories'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


import Ordersummery from './Ordersummery'
import { AdrsDfltComp, LogDfltComp, LogUpdtComp, Ordrsmrydflt, Prictitl } from './BuyPrdtSubcomp'
import { AdrsUpdtComp } from './Addrsupdt'
import Payment from './Payment'


function BuyProduct() {

  const navigate=useNavigate()
  const params=useParams()
  const theme=useTheme()
  const match=useMediaQuery(theme.breakpoints.down('sm'))
  let list=JSON.parse(localStorage.getItem('user'))
  const [data,setdata]=useState(null)
  const [load,setLoad]=useState(false)
  const [totalcost,settotalCost]=useState(0)
  const [saved,setSaved]=useState(0)
  const [reqfulfil,setreqfulfil]=useState(0)
  const [editreq,setEditreq]=useState(-1)
  const [ordrdtls,setordrdtls]=useState()
  const [rndr,setRndr]=useState(0)
  const [order,setOrder]=useState({
                                    prdctId:[],
                                    CnsmrId:'',
                                    OrderTracking:{
                                                  lat:'',
                                                  lng:'',
                                                  },
                                    OrdrStatus:false,
                                    OrdrDate:null,
                                    OrdrTiming:0,
                                    deliveryCharges:0,
                                    totalamount:0
                                  })

   useEffect(()=>{
    setLoad(true);
     if( params.id==='buycard'){
          getProduct()
      }else{
          dtl()
      }
   },[])


   useEffect(()=>{

          if(list===null){
                setreqfulfil(0)
          }else {
                 if(list!==null){
                       setOrder({...order,CnsmrId:list?._id})
                       setreqfulfil(1)
                      }

                 if(  
                       list?.name
                       &&list?.nmbr
                       &&list?.address.pincode
                       &&list?.address.Country
                       &&list?.address.City
                       &&list?.address.District
                       &&list?.address.State
                    ){
                       setreqfulfil(2)
                     }
                 if(order.prdctId?.length>0){
                       setreqfulfil(3)
                    }
                  
                 setEditreq(reqfulfil)
          }
   },[reqfulfil,rndr])


 const getProduct=async()=>{
        let url='/user/get-products/card/'+list?._id
        let a = await favandCardprdctdtls(url)
        settotalCost(0)
        setSaved(0)
        a&&a.map(item=>{
              settotalCost(pre=>pre+item.price)
              setSaved(pre=>pre+savings(item))
              return 0
         })
        setdata(a)
        setLoad(false)
 }

 const dtl=async()=>{
        let a=await getSpecificProducts(params.id)
        settotalCost(0)
        setSaved(0)
        settotalCost(a[0].price)
        setSaved(savings(a[0]))
        setdata(a)
        setLoad(false)
 }

const updtCost=(cost)=>{
        settotalCost(pre=>pre+cost)
}

const updtsave=(save)=>{
        setSaved(pre=>pre+save)
}

const ordrsmry=(details)=>{
        let keys=Object.keys(details)
        let values=Object.values(details)
        let arr=[]
        for(let i=0;i<keys.length;i++){
          arr.push({[keys[i]]:values[i]})
          
        }
        setOrder({...order,prdctId:arr,totalamount:totalcost})
        setRndr(pre=>pre+1)
        setordrdtls(details)
}

const changelog=(index)=>{
        setEditreq(index)
}

const logUpdt=()=>{
        setEditreq(reqfulfil)
}

const adrsupdt=(value)=>{
        setreqfulfil(value)
}
 
 const pricdtls=[
  {title:<Prictitl/>,        icon:<CurrencyRupeeIcon sx={{fontSize:"15px"}}/>, value:totalcost},
  {title:"Delivery Charges", icon:'',                                          value:"FREE"},
  {title:<Divider/>,         icon:'',                                          value:<Divider/>},
  {title:"Total Payable",    icon:<CurrencyRupeeIcon sx={{fontSize:"15px"}}/>, value:totalcost},
 ]

 const requirements=[
  {title:"LOGIN",           show1:<LogDfltComp email={list?.email}/>,  show2:<LogUpdtComp logUpdt={logUpdt}/>},
  {title:"DELIVERY ADDRESS",show1:<AdrsDfltComp list={list}/>,         show2:<AdrsUpdtComp adrsupdt={adrsupdt} list={list}/>},
  {title:"ORDER SUMMARY",   show1:<Ordrsmrydflt data={data?.length}/>, show2:<Ordersummery history={ordrdtls} email={list?.email} data={data} updtCost={updtCost} updtsave={updtsave} ordrsmry={ordrsmry}/>},
  {title:"PAYMENT OPTIONS", show1:"You Can't proceed",                 show2:<Payment order={order}/>},
 ]

  return (
    <>
    {load
      ?<Loader/>
      :<>
         <Grid container sx={{minHeight:"60vh"}}>
         <ThisProductCont md={4} xs={12} item sx={{position:"relative"}}>
              <ThisProductBox  sx={{position:{md:'fixed',xs:"relative"},marginTop:{md:'400px'},left:{md:"320px"},width:{lg:"25%",md:"20%"}}}>
                    <ProductHeading sx={{textAlign:"center",padding:"5px",fontFamily:"b",fontSize:match?"15px":"20px"}}>PRICE DETAILS</ProductHeading>
                    <ProductDetailsBox>
                        <Grid container sx={{padding:"3px",margin:"20px 0px"}}>
                              {pricdtls.map((item,index)=>{
                                return(
                                  <Fragment key={index}>
                                     <ThisProductCont xs={7} item sx={{fontWeight:700}}>
                                          {item.title}
                                      </ThisProductCont>
                                     <ThisProductCont xs={5} item sx={{textAlign:"start",fontWeight:800,color:item.value==="FREE"&&"green"}}>
                                     {item.icon}{item.value}
                                     </ThisProductCont>
                               </Fragment>
                                )
                              })}
                              <ThisProductCont xs={12} item >
                                   <Divider/>
                              </ThisProductCont>
                              <ThisProductCont xs={12} item >
                                  <Typography sx={{fontWeight:600,color:"green",textAlign:"center"}}>Your total saving on this order is 
                                     <span style={{fontSize:"20px",fontWeight:800}}>
                                       <CurrencyRupeeIcon sx={{paddingTop:"5px"}}/>{saved}
                                     </span>
                                  </Typography> 
                              </ThisProductCont>
                        </Grid>
                    </ProductDetailsBox>
              </ThisProductBox>
            </ThisProductCont>
             
             
             <ThisProductCont  md={8} xs={12} item>
             <Grid container>
              {requirements.map((item,index)=>{
                return(
                <ThisProductCont key={index} xs={12} item>
                  <ThisProductBox>
                        <ProductHeading sx={{ display:"flex",justifyContent:"space-between",padding:"5px",fontFamily:"b",fontSize:match?"15px":"20px"}}>
                           <span>{index+1}. {item.title} 
                             {(reqfulfil>index)&&editreq!==index&&<CheckCircleOutlineIcon sx={{paddingTop:"9px",fontSize:match?"20px":"25px"}}/>}
                           </span>
                            {list===null&&index===0&&<Button1 sx={{color:"white"}} onClick={()=>navigate('/login')}>Login</Button1>}
                            {(reqfulfil>index)&&editreq!==index&&<Button1 sx={{color:"white"}} onClick={()=>changelog(index)}>Change</Button1>}
                        </ProductHeading>
                      
                           {(reqfulfil>index)&&editreq!==index?item.show1:""}
                           {editreq===index?item.show2:""}
                      
                  </ThisProductBox>
                 </ThisProductCont>
                )})}
              </Grid>
            </ThisProductCont>
            <Box sx={{height:"40px"}}>.</Box>
         </Grid>
      </>}
 </>
    
  )
}

export const Divider=styled(Box)(()=>({
  borderBottom:"1px solid lightGrey",
  width:"100%"
}))

export default BuyProduct
import React, { useEffect, useState } from 'react'
import { Button1, ProductImage } from '../../../styles/Showcategories';
import UPI from './img/upi-btm-img-2.png'
import Wallet from './img/wallet-icon.png'
import Credit from './img/Credit-cards.ico'
import NetBanking from './img/net.png'
import Cash from './img/cash.png'
import EMI from './img/emi.png'
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import ReCAPTCHA from "react-google-recaptcha";
import {useNavigate } from 'react-router-dom';
import { orderAPI } from '../../API/APIreq';


function Payment({order}) {
   
    const [choice,setChoise]=useState(0)
    const [subchoice,setSubChoise]=useState(null)
    const [orderr,setOrder]=useState(order)
    const [ordrscss,setOrdrscss]=useState(false)

    useEffect(()=>{
        if(orderr.OrdrStatus){
        let status =orderAPI(orderr)
        status&&setOrdrscss(true)
    }
    },[orderr.OrdrStatus])
    
    const comformOrder=()=>{
        setOrder({...orderr,OrdrStatus:true,
                            OrdrDate:new Date().toLocaleDateString(),
                            OrdrTiming:new Date().getTime()
                        })
    }


    const paymentoptns=[
        {value:0,cmpnent:<CashOnDelivery comformOrder={comformOrder}/>, icon:Cash,      title:"Cash on Delivery",          choises:[]},
        {value:1,cmpnent:'', icon: UPI,      title:"UPI",                       choises:['PhonePe','Your UPI ID']},
        {value:2,cmpnent:'', icon:Wallet,    title:"Wallets",                   choises:['PhonePe Wallet','Paytm Wallet']},
        {value:3,cmpnent:'', icon:Credit,    title:"Credit / Debit / ATM Card", choises:[]},
        {value:4,cmpnent:'', icon:NetBanking,title:"NetBanking",                choises:['HDFC Bank','ICICI Bank','State Bank of India']},
        {value:5,cmpnent:'', icon:EMI,       title:"EMI",                       choises:[]},

    ]
   
    
   

  return (<>
             {ordrscss
             ?<Confirmed/>
             :<FormControl>
                 <FormLabel id="demo-radio-buttons-group-label" sx={{padding:"10px 0px 0px 10px"}}> Choose a payment option</FormLabel>
                    <RadioGroup 
                      defaultValue={0}
                      onChange={(e)=>{setChoise(e.target.value)}}
                      >
                     {
                        paymentoptns.map((itm,index)=>{
                            return(
                                <Box key={index} sx={{padding:'10px'}}>
                                    <FormControlLabel
                                        value={itm.value} 
                                        control={<Radio />} 
                                        label={
                                            <>
                                                <ProductImage 
                                                    src={itm.icon} 
                                                    style={{width:"20px",height:"20px",marginRight:"5px"}}
                                                    alt=''
                                                />
                                                {itm.title}
                                            </>}
                                        /> 
                                        {(parseInt(choice)===index)&&
                                        <Box sx={{marginLeft:'40px'}}>
                                            <FormControl>
                                                <FormLabel id="demo-radio-buttons-group-label">
                                                    {itm.choises.length
                                                          ?' Choose an option'
                                                          :itm.title==="Cash on Delivery"?" provide required information":<NotEnabled/>
                                                    }
                                                    </FormLabel>
                                                <RadioGroup>
                                                 { itm.choises.length
                                                    ?itm.choises.map((choise,indx)=>
                                                    { return(
                                                         <>
                                                            <FormControlLabel
                                                            key={indx}
                                                            value={indx} 
                                                            control={<Radio />} 
                                                                label={<>{choise}</>}
                                                            onChange={()=>setSubChoise(indx)}
                                                            /> 
                                                            {
                                                                parseInt(subchoice)===indx?<NotEnabled/>:""
                                                            }
                                                      </>
                                                     )})
                                                    :itm.cmpnent
                                                    
                                                }
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                        }
                                    </Box> 
                                )})}
                      </RadioGroup>
                  </FormControl>}
            </>
        )
 }



 const CashOnDelivery=({comformOrder})=>{
    const [verified,setVerified]=useState(false)
    const [ve,setVe]=useState(undefined)

    const onChange=(value)=> {
        setVe(value);
        value!==undefined
              ?setVerified(true)
              :setVerified(false)
      }

      useEffect(()=>{
        ve===null&&setVerified(false)
      },[ve])


    return(
        <>
          <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:{lg:"row",xs:"column"},width:"90%"}}>
             <ReCAPTCHA
                sitekey='6LcK4kUoAAAAAHTyk0imTZyX44CG20579Kn0C016'
                onChange={(value)=>onChange(value)}
             />
             <Button1 
                 disabled={!verified} 
                 onClick={()=>{
                    comformOrder()
                 }}
                 sx={{color:'white',width:"200px",margin:'10px',height:{lg:"75px"}}}>Confirm order</Button1>
             </Box>

        </>
    )
 }

 const NotEnabled=()=>{
    return(
        <Box sx={{height:"80px",backgroundColor:"lightGrey",padding:'10px',display:"flex",justifyContent:"center",alignItems:"center",color:"grey"}}>
                  THis FUnCionAlitY IS nOT ENableD YeT...
        </Box>
    )
 }

 const Confirmed=()=>{
     const navigate=useNavigate()
      return(
            <Box sx={{position:"fixed",backgroundColor:'rgba(0, 0, 0, 0.651)',display:"flex",justifyContent:'center',alignItems:'center',top:0,zIndex:120,left:0,width:"100%",height:'100vh'}}>
                <Box sx={{border:'3px solid #73566f',display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center',outline:'1px solid white',width:{sm:'500px',xs:'300px'},height:{sm:'300px',xs:'200px'},backgroundColor:'#d1adcc'}}>
                     <Typography sx={{color:'green',fontWeight:700,fontSize:{sm:'25px',xs:'15px'}}}>ORdeR ConFroMEd SuccEsSfuLlY</Typography><br/>
                     <Box>
                         <Button1 sx={{color:'white',fontSize:'12px'}} onClick={()=>navigate('/orderstatus')}>order status</Button1>
                         <Button1 sx={{marginLeft:'10px',color:'white',fontSize:'12px'}} onClick={()=>navigate('/')}>Go to home</Button1>
                     </Box>
                     
               </Box>
            </Box>
      )
 }
export default Payment
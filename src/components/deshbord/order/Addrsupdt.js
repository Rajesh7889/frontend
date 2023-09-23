import { useEffect, useState } from "react"
import { updtAdrs } from "../../API/APIreq"
import { Grid, Typography } from "@mui/material"
import { ErrorBox, ErrorTxt, TxtfieldCstm } from "../../../styles/Signin&upStyles"
import { Button1 } from "../../../styles/Showcategories"
import ErrorIcon from '@mui/icons-material/Error';

export function AdrsUpdtComp({list,adrsupdt}){
    const [errMsg,setErr]=useState('')
    const [naame,setName]=useState(list.name)
    const [nmbrr,setNmbr]=useState(list.nmbr)
    const [address,setAddress]=useState({  Country:"",
                                            State:"",
                                            District:"",
                                            City:"",
                                            LandMark:"",
                                            HouseNmbr:"",
                                            pincode:""
                                          })
    useEffect(()=>{
      setAddress({  Country:list?.address.hasOwnProperty('Country')?list.address.Country:"",
                    State:list?.address.hasOwnProperty('State')?list.address.State:"",
                    District:list?.address.hasOwnProperty('District')?list.address.District:"",
                    City:list?.address.hasOwnProperty('City')?list.address.City:"",
                    LandMark:list?.address.hasOwnProperty('LandMark')?list.address.LandMark:"",
                    HouseNmbr:list?.address.hasOwnProperty('HouseNmbr')?list.address.HouseNmbr:"",
                    pincode:list?.address.hasOwnProperty('pincode')?list.address.pincode:""
                  })
    },[list?.name])
     
    const updateAddress=async()=>{
         if(naame.trim().length<1){
          setErr("Please enter a valid name..")
         }else if(nmbrr<999999999 || nmbrr>9999999999){
          setErr("Please enter a valid number")
         }else if(!address.Country.trim()){
          setErr("Country name is required")
         }else if(!address.State.trim()){
          setErr("State name is required")
         }else if(!address.City.trim()){
          setErr("City name is required")
         }else if(!address.District.trim()){
          setErr("District name is required")
         }else if(!address.LandMark.trim()){
          setErr("LandMark is required")
         }else if(address.pincode<99999 || address.pincode>999999){
          setErr("Please enter a valid Pincode")
         }else if(naame.trim()!==list.name 
                  || nmbrr!==list.nmbr 
                  || address.Country.trim() !== list.address.Country 
                  || address.State.trim()!== list.address.State
                  || address.City.trim()!== list.address.City
                  || address.District.trim()!== list.address.District
                  || address.LandMark.trim()!==list.address.LandMark
                  || address.HouseNmbr.trim()!==list.address.HouseNmbr
                  || address.pincode!==list.address.pincode){
                    
                    let details={naame,nmbrr,address}
                    let value=await updtAdrs(list?._id,details)
                        value === true
                        ? adrsupdt(3)
                        :console.log("wrong")
  
         }else{
          adrsupdt(0);
        }
    }
  return(
      <>
        <Typography gutterBottom variant="body2" component="p" color="textSecondary" sx={{marginTop:"20px",paddingLeft:"20px",fontWeight:700}}> Address :</Typography>
               { errMsg!==""&&
                       <ErrorBox>
                          <ErrorIcon sx={{color:"#352133"}}/> <ErrorTxt>{errMsg}</ErrorTxt>
                       </ErrorBox>
               }  
         <Grid container spacing={2} sx={{padding:"15px"}}>
                    <Grid item xs={12}>
                        <TxtfieldCstm name="user_name" type="text" label="Name" value={naame} placeholder="Enter your name.."   fxn={(e)=>setName(e)} helperText={"Enter a valid name"}/>
                    </Grid>
                    <Grid item xs={12}>
                                  <TxtfieldCstm type="number" label="Mobile-number" value={nmbrr} placeholder="Enter mobile number.." fxn={(e)=>setNmbr(e)} helperText={"Enter a valid number"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <TxtfieldCstm name="Country" type="text" label="Country" value={address.Country} placeholder="Enter your Country name.."   fxn={(e)=>setAddress({...address,Country:e})} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <TxtfieldCstm name="State" type="text" label="State" value={address.State} placeholder="Enter your State.."   fxn={(e)=>setAddress({...address,State:e})}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <TxtfieldCstm name="District" type="text" label="District" value={address.District} placeholder="Enter your District name.."   fxn={(e)=>setAddress({...address,District:e})}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <TxtfieldCstm name="City" type="text" label="City"  value={address.City} placeholder="Enter your City name.."   fxn={(e)=>setAddress({...address,City:e})}/>
                    </Grid>
                    <Grid item xs={12}>
                       <TxtfieldCstm name="LandMark" type="text" label="Landmark(town/street)" value={address.LandMark} placeholder="Please mention some landmark.."   fxn={(e)=>setAddress({...address,LandMark:e})}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <TxtfieldCstm name="HouseNmbr" type="text" label="House Number" value={address.HouseNmbr} placeholder="Enter your house number.."   fxn={(e)=>setAddress({...address,HouseNmbr:e})}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <TxtfieldCstm name="pincode" type="number" label="Pin code" value={address.pincode} placeholder="Enter Pin code.."   fxn={(e)=>setAddress({...address,pincode:e})}/>
                    </Grid>
  
                    <Grid item xs={12}>
                       <Typography sx={{padding:"20px 0",fontSize:"13px"}}>To verify your number, we will make a pseudo call , please ignore it.</Typography>
                    </Grid>
  
                    <Grid item xs={12}>
                       <Button1  sx={{fontWeight:"600","&:hover":{color:"#352133"}}} type="submit" variant="contained"  fullWidth  onClick={()=>updateAddress()}>Continue</Button1>
                    </Grid>
        </Grid>
      </>
    )
  }
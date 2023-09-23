import {Grid,Typography,useTheme  } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ErrorTxt, Heading, MainBox, OuterBox, SubHeading, TxtfieldCstm } from "../../styles/Signin&upStyles"
import { ErrorBox } from "../../styles/BannerStyle"
import ErrorIcon from '@mui/icons-material/Error';
import { Button1 } from "../../styles/Showcategories"


export default function AddProducts(){
    const theme=useTheme()
     const [name,setName]=useState("")
     const [price,setPrice]=useState("")
     const [about,setabout]=useState("")
     const [company,setCompany]=useState("")
     const [errMsg,setErrMsg]=useState("")
     const params=useParams()
    
    useEffect(()=>{
            getOldRecord(); 
    },[])
    const getOldRecord=async()=>{
        try{
            const result= await axios.get(`get-products-details/${params.id}`)
            if(result.data===false){ 
              setErrMsg("Can't fetch data.. Please try again ..")}else if(result.status>499){
              setErrMsg("Server is not working.. Try again later..")}else{
              setName(result.data[0].name)
              setPrice(result.data[0].price)
              setabout(result.data[0].about)
              setCompany(result.data[0].company)}
        }catch(err){setErrMsg("Site not working")} 
    }
    const navigate=useNavigate()
    const userId=JSON.parse(localStorage.getItem("user"))._id
    
    const updateProduct=async()=>{
        let details={
          name,
          price,
          about,
          company,
          userId
      }
     
           if(name===""||price===""||about===""||company===""){
            setErrMsg("Please enter all required fields")
            return
          }
           else{
               setErrMsg("")
            try{
                const response= await axios.put(`update-product/${params.id}`,details)
                if(response.data===false){ 
                    setErrMsg("Product records not updated. Please try again.")}else if(response.status>499){
                    setErrMsg("Server is not working.. Try again later..")}else{
                    navigate("/myProducts")}
              }catch(err){setErrMsg("Site not working")}
           }
      }
   

    return(
        <OuterBox>
           <MainBox>
                 { errMsg!==""&&
                     <ErrorBox >
                        <ErrorIcon sx={{color:"#352133"}}/> <ErrorTxt >{errMsg}</ErrorTxt>
                     </ErrorBox>
                 }
            
              <Heading gutterBottom theme={theme}>Update Product</Heading>
              <SubHeading gutterBottom theme={theme}>Modify and update your product:</SubHeading>
              <Typography gutterBottom variant="body2" component="p" color="textSecondary">Update your product form better results.</Typography>
             
              <Grid container spacing={1}>
                 
                 <Grid item xs={12}>
                      <TxtfieldCstm  type={"text"} name={name}  label={"Product Name"} value={name} placeholder={"Enter product name.."} fxn={(e)=>setName(e)} /> 
                 </Grid>
                 
                 <Grid item xs={12}>
                      <TxtfieldCstm type={"number"} name={price} value={price} label={"Product Price"}  placeholder={"Enter product price.."} fxn={(e)=>setPrice(e)} /> 
                 </Grid>
                 
                 <Grid item xs={12}>
                       <TxtfieldCstm  type={"text"}   label="Product details" value={about} placeholder="Enter product details.." fxn={(e)=>setabout(e)}/>
                 </Grid>
                 
                 <Grid item xs={12}>
                 <TxtfieldCstm type={"text"} label={"Company Name"} name={company} value={company} placeholder={"Enter product company.."} fxn={(e)=>setCompany(e)} />
                 </Grid>
                 
                 <Grid item xs={12}>
                   <Button1 type="submit" variant="contained" sx={{":hover":{color:"#352133"}}} onClick={updateProduct} fullWidth> Update Product </Button1>
                 </Grid>
          
            </Grid>
      
      </MainBox>
        </OuterBox>
    )
}
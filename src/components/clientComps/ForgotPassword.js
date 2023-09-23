import {useState} from "react"
import {Typography,Grid} from '@mui/material';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { ErrorBox, ErrorTxt, Heading, MainBox, OuterBox, SubHeading, TxtfieldCstm } from "../../styles/Signin&upStyles";
import ErrorIcon from '@mui/icons-material/Error';
import { Button1 } from "../../styles/Showcategories";

export default function Forgotpassword() {
   

    const [email,setEmail]=useState("")
    const [errMsg,setErrMsg]=useState("")

    const [emailVal,setEmailVal]=useState(false)

    const navigate=useNavigate()
    const theme=useTheme()


  const emailfxn=(e)=>{
    let eml = e
    let reg=/^[a-zA-Z0-9.!#$&'*+/=?^_~`{|}-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/
    if(reg.test(eml)){
      setEmailVal(false)
      setEmail(eml)
    }else{setEmailVal(true)}
}
   const check=async()=>{
      if(email.length>4){
         try{
            const result= await axios.post(`checkemail/${email}`)
            if(result.data=== false){
              setErrMsg("No account associated with this email")}else if(result.status>499){
              setErrMsg("Server not working")}else{
                navigate(`/chagnepassword/${result.data}`)
            }  
         }catch(err){
          setErrMsg("Site not working")
         } 
    }else{setErrMsg("please enter a valid mail")}}
    
  return (
    <OuterBox>
          <MainBox theme={theme}>
                  { errMsg!==""&&
                     <ErrorBox>
                        <ErrorIcon sx={{color:"#352133"}}/> <ErrorTxt>{errMsg}</ErrorTxt>
                     </ErrorBox>
                  }
                  <Heading theme={theme} gutterBottom >Password assistance</Heading>
                  <SubHeading theme={theme} gutterBottom>Enter the email address associated with your this platform.</SubHeading>
                  <Typography gutterBottom variant="body2" component="p" color="textSecondary">Let us help you for getting your account back...</Typography>
           
              <Grid container spacing={1}>

                 <Grid  item xs={12}>
                     <TxtfieldCstm error={emailVal} type="email" label="Enter email" placeholder="Enter email associated with your.." fxn={(e)=>emailfxn(e)} helperText={"Enter valide email"}/>
                 </Grid>

                 <Grid item xs={12} sx={{marginTop:"10px"}}>
                     <Button1  type="submit" variant="contained" sx={{fontWeight:"600","&:hover":{color:"#352133"}}} onClick={check} fullWidth >Continue</Button1>
                 </Grid>
             </Grid>
        
      <div style={{position:"relative",margin:"40px",padding:"10px 5px"}}>
              <SubHeading>Has your email address or mobile phone number changed? </SubHeading>
              <Typography sx={{fontSize:"13px",color:"grey"}}>If you no longer use the e-mail address associated with your Swadeshi account, you may contact  <Link style={{color:"#352133"}} to="/forgotpassword"> Customer Service </Link> for help restoring access to your account.</Typography>
      </div>
      
    
    </MainBox>
    </OuterBox>
  );
}
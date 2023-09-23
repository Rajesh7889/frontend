import {useEffect, useState} from "react"
import {Typography,Grid} from '@mui/material';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from 'react-redux'
import {signinn} from '../../features/Signstatus'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ErrorBox, ErrorTxt, Heading, MainBox, OuterBox, SubHeading, TxtfieldCstm } from "../../styles/Signin&upStyles";
import { useTheme } from '@mui/material/styles';
import ErrorIcon from '@mui/icons-material/Error';
import { Button1, Button2 } from "../../styles/Showcategories";
import {signout} from '../../features/Signstatus'
export default function Login() {


 
    
    const dispatch = useDispatch()
    const [email,setEmail]=useState("")
    const [pswd,setPswd]=useState("")

    const [emailVal,setEmailVal]=useState(false)
    const [pswdVal,setPswdVal]=useState(false)
    const [errMsg,setErrMsg]=useState("")

  
  const theme=useTheme()
  const navigate=useNavigate()

  useEffect(()=>{
    dispatch(signout())
    Cookies.remove("auth")
    localStorage.clear()
 },[])

  const emailfxn=(e)=>{
    let eml = e
    let reg=/^[a-zA-Z0-9.!#$&'*+/=?^_~`{|}-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/
    if(reg.test(eml)){
      setEmail(eml)
      setEmailVal(false)
    }else{setEmailVal(true)}     
}


const pswdfxn=(e)=>{
  if(e.length>6){
   setPswd(e)
   setPswdVal(false)
  }else{setPswdVal(true)}
       
}

    const checkAll=()=>{
       if( emailVal|| pswdVal  || email==="" || pswd===""){
          return true
       }else{ return false}
    }

    const login=async()=>{
      let details={
              email,
              pswd }
         try{
            const result= await axios.post("login",details)
            if(result.data=== false){
              setErrMsg("Invalid email/password")}else if(result.status>499){
              setErrMsg("Server not working")}else{
                Cookies.set("auth",result.data.tokens[0].token)
                localStorage.setItem("user",JSON.stringify(result.data))
                dispatch(signinn())
                navigate("/")
                setErrMsg("")
            }  
         }catch(err){
          setErrMsg("Site not working")
         } 
    }
    
  return (
    <OuterBox>
     <MainBox theme={theme}>
                  { errMsg!==""&&
                     <ErrorBox >
                        <ErrorIcon sx={{color:"#352133"}}/> <ErrorTxt>{errMsg}</ErrorTxt>
                     </ErrorBox>
                  }
              <Heading theme={theme} gutterBottom >Sign-In</Heading>
              <SubHeading theme={theme} gutterBottom >Fill-details:</SubHeading>
              <Typography gutterBottom variant="body2" component="p" color="textSecondary">Please login for better experience...</Typography>
           
              <Grid container spacing={1}>
                   <Grid  item xs={12}>
                       <TxtfieldCstm error={emailVal} type="email" label="Email" placeholder="Enter email.." fxn={(e)=>emailfxn(e)} helperText={"Enter valide email"}/>
                   </Grid>
                   <Grid item xs={12} sx={{}}>
                       <TxtfieldCstm error={pswdVal} autoComplete='none' type="password" label="Password" placeholder="Enter your password.." fxn={(e)=>pswdfxn(e)} helperText={"Password is too short"}/>
                   </Grid>
                   <Grid item xs={12}>
                      <Typography gutterBottom sx={{fontSize:"12px",color:"grey"}}>Forgot input details?
                         <Link style={{textDecoration:"none",color:"#352133"}} to="/forgotpassword"> Forgot Password<ArrowRightIcon sx={{marginBottom:"-7px"}}/></Link>
                      </Typography>
                   </Grid>

                   <Grid item xs={12}>
                     <Button1 disabled={checkAll()} type="submit" variant="contained"  onClick={login} fullWidth sx={{"&:hover":{color:"#352133"}}}>Sign in</Button1>
                   </Grid>
                 
                   <Grid item xs={12} sx={{display:"flex",justifyContent:"center",position:"relative",borderTop:"1px solid lightgrey",height:"0px",marginTop:"40px"}}>
                     <Typography gutterBottom sx={{fontSize:"12px",color:"#352133",position:"absolute",top:-10,backgroundColor:"#d1adcc",fontWeight:"600",padding:"0 15px"}}>New to our site?</Typography>
                   </Grid>
                
                   <Grid item xs={12} sx={{display:"flex",justifyContent:'center'}}>
                     <Button2   variant="outlined" onClick={()=> navigate("/signup")} sx={{backgroundColor:"white",color:"#352133",border:"1px solid #352133",marginTop:"10px"}} fullWidth >Create your account</Button2>
                   </Grid>
             </Grid>
     </MainBox> 
    </OuterBox>
  );
}

import {  useNavigate, useParams } from "react-router-dom"
import {useState} from "react"
import {Typography,Grid} from '@mui/material';
import axios from "axios";
import { ErrorBox, ErrorTxt, Heading, MainBox, OuterBox, SubHeading, TxtfieldCstm } from "../../styles/Signin&upStyles";
import ErrorIcon from '@mui/icons-material/Error';
import { useTheme } from '@mui/material/styles';
import { Button1 } from "../../styles/Showcategories";

export default function Changepassword(){
    const params=useParams()
    const theme=useTheme()
    const [password,setPassword]=useState("")
    const [varifypas,setVarifypas]=useState("")
    const [errMsg,setErrMsg]=useState("")

    const [passval,setPassVal]=useState(false)
    const [conpassval,setConPassVal]=useState(false)

    const navigate=useNavigate()

    const  pasfxn=(e)=>{
        let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
           if(regex.test(e)){
            setPassword(e)
            setPassVal(false)
           }else{setPassVal(true)}
                
       }
   

    const passwordVari=(e)=>{
        if(e!==password){
            setConPassVal(true)
        }else{
            setConPassVal(false)
            setVarifypas(e)
        }

    }
    
   const change=async()=>{
     if(password!==""&& !conpassval && varifypas===password){
        const details={password}
         try{
            const result= await axios.put(`update-password/${params.id}`,details)
            if(result.data=== false){
              setErrMsg("Password not updated due to some problem . Please try again... ")}else if(result.status>499){
              setErrMsg("Server not working")}else{
                setErrMsg("Congrats, password changed successfully..")
               setTimeout(() => {
                navigate(`/login`)
               }, 1000);
            }  
         }catch(err){
          setErrMsg("Site not working")
         } 
    }else{setErrMsg("Password doesn't match...")}
}
    
  return (
    
    <OuterBox>
          <MainBox theme={theme}>
                  { errMsg!==""&&
                     <ErrorBox>
                        <ErrorIcon sx={{color:"#352133"}}/> <ErrorTxt>{errMsg}</ErrorTxt>
                     </ErrorBox>
                  }
             <Heading gutterBottom >Create new password</Heading>
             <SubHeading gutterBottom >We'll ask for this password whenever you sign in</SubHeading>
             <Typography gutterBottom variant="body2" component="p" color="textSecondary">Your security is our first priority...</Typography>
           
              <Grid container spacing={1}>

                 <Grid  item xs={12}>
                     <TxtfieldCstm type="password" error={passval}  label="New password" placeholder="Give a strong password as you are.." fxn={(e)=>pasfxn(e)} helperText={"Password is too short"}/>
                 </Grid>

                 <Grid  item xs={12} sx={{marginTop:"10px"}}>
                     <TxtfieldCstm type="password" error={conpassval} label="Conform password" placeholder="Re-enter your password.." fxn={(e)=>passwordVari(e)} helperText={"Password doesn't match. Let's try again"}/>
                 </Grid>

                 <Grid item xs={12} sx={{marginTop:"10px"}}>
                     <Button1  type="submit" variant="contained" sx={{fontWeight:"600","&:hover":{color:"#352133"}}} onClick={change} fullWidth >Save changes</Button1>
                 </Grid>

             </Grid>
     
      <div style={{position:"relative",minHeight:"200px",margin:"30px auto",padding:"10px 5px"}}>
          <Typography style={{fontWeight:700}}>Secure password tips:</Typography>
           <ul style={{listStyle:"outside",marginLeft:"15px",fontSize:"14px",fontWeight:600,color:"grey",lineHeight:1.5,marginTop:"10px"}}>
                <li>Use at least 8 characters, a combination of numbers and letters is best.</li>
                <li>Do not use the same password you have used with us previously.</li>
                <li>Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained.</li>
                <li>Do not use the same password for multiple online accounts.</li>
           </ul>   
     </div>
      </MainBox>
   </OuterBox>

  );
}
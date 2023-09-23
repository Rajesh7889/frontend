
import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";

export const ProductCatContainer =styled(Grid)(({theme})=>({
   border:"3px solid #d1adcc",
   backgroundColor:"white",
   height:"350px",
   margin:"5px",
   position:"relative",
   ":hover":{border:"3px solid #73566f"},
   [theme.breakpoints.down('sm')]:{height:"450px"}
}))

export const ProductHeading=styled(Box)(()=>({
    fontFamily:"dancing script,sans-serif",
    height:"40px",
    fontWeight:800,
    paddingLeft:"20px",
    backgroundColor:"#d1adcc",
    color:"#352133",
    width:"100%",
    fontSize:"25px"
}))

export const Button1 = styled(Button)(()=>({
    backgroundColor:"#73566f",
    ":hover":{backgroundColor:"#d1adcc"}
}))


export const Button2 = styled(Button)(()=>({
    color:"#d1adcc",
    width:"80%",
     border:"2px solid #d1adcc",
    ":hover":{color:"#73566f",border:"2px solid #73566f"}
}))

export const ProductBox =styled(Grid)(()=>({
    position:"relative",
    backgroundColor:"white",
    width:"100%",
    height:"100%",
    padding:"10px 0px"
 }))


 export const ProductImage = styled('img')(({src})=>({
    width:"100%",
    height:"60%",
    aspectRatio:1/1,
    objectFit:"contain"
 }))


 export const ProductDetailsBox=styled(Box)(()=>({
    height:"40%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
 }))

 export const Alert=styled(ProductHeading)(()=>({
    display:"flex",
    alignItems:"center",
    color:'darkred',
    marginTop:"10px",
    marginBottom:'30px',
    height:"300px",justifyContent:"center"
  }))
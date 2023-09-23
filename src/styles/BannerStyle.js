import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";


export const Promotionscont =styled(Box)(({theme})=>({
    backgroundColor:"#d1adcc",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    overflow:"hidden",
    height:"400px",
    [theme.breakpoints.down('md')]:{height:"300px"},
    [theme.breakpoints.down('sm')]:{height:"450px"},
}))

export const PromotionAlert= styled(Typography)(()=>({
    overflow:"hidden",
    position:"absolute",
    backgroundColor:"orange",
    padding:"10px",
    borderRadius:"50px",
    color:"darkred",
    top:30,
    right:50,
    transition:"all 0.1s",

}))

export const PromotionBox=styled(Box)(({theme})=>({
    display:"flex",
    width:"100%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    padding:"10px",
    [theme.breakpoints.down('sm')]:{flexDirection:"column",alignItems:"start"}
}))
export const Promotionproductdtls=styled(Box)(({theme})=>({
    flexDirection:"column",
    width:"calc(100% - 300px)",
    marginLeft:"20px",
    height:"300px",
    [theme.breakpoints.down('md')]:{height:"200px",width:"calc(100% - 200px)"},
    [theme.breakpoints.down('sm')]:{width:"80%"},
}))


export const PromotionText=styled(Typography)(({theme})=>({
    fontFamily:"dancing script,sans-serif",
    fontWeight:800,
    color:"black",
    fontSize:"50px",
    [theme.breakpoints.down('md')]:{fontSize:"35px"}
}))

export const PromotionImage= styled("img")(({theme,src})=>({
         src:`url(${src})`,
         width:"300px",
         height:"300px",
         objectFit:"contain",
         background:"grey",
         border:"5px solid #73566f",
         borderRadius:"50%",
         cursor:"pointer",
         ":hover":{border:"3px solid darkred"},
         [theme.breakpoints.down('md')]:{ height:"200px",width:"200px",borderRadius:"10px"},
}))
export const ProductBox=styled(Grid)(()=>({
    aspectRatio:1/1.5,
    width:"100%",
    marginTop:"5px",
    display:"flex",
    overflow:"hidden",
    justifyContent:"center",
    alignItems:"center"
}))

export const ProductContent=styled(Grid)(()=>({
    width:"95%",
    position:"relative",
    aspectRatio:1/1.5,
    textAlign:"center",
    border:"1px solid lightgrey",
    backgroundColor:"white"
}))

export const ErrorBox=styled("div")(()=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:"10px",
    borderRadius:"10px",
    width:"70%",
    margin:"auto",
    backgroundColor:"orange"
}))

export const ErrorCntnt= styled(Typography)(()=>({
    width:"100%",
    height:"50%",
    textAlign:"center",
    color:"black",
    fontFamily:"inherit",
    fontWeight:800, 
    fontSize:"30px",
    transition:"all 2s",
}))





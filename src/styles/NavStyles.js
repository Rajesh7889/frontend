import { Box, Button,ListItemButton } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";


export const Logo=styled(Box)(()=>({
    left:15,
    top:15,
    position:"fixed",
    fontFamily:"dancing script,sans-serif",
    border:"1px solid darkred",
    fontSize:20,
    padding:"5px 10px",
    borderRadius:"10px",
    backgroundColor:"darkred",
    ":hover":{border:"1px solid white",
              cursor:"pointer",
              outline:"1px solid white"
            }
}))


export const SellerBox=styled(Box)(({theme})=>({
    top:"57px",
    right:"13%",
    [theme.breakpoints.down('md')]:{right:5},
    color:"white",
    zIndex:12,
    position:"absolute",
    borderRadius:"5px",
    border:"1px solid grey",
    backgroundColor:"black"
}))

export const Aboutus=styled(Box)(({theme})=>({
    top:"59px",
    right:"2%",
    [theme.breakpoints.down('md')]:{display:"none"},
    color:"white",
    zIndex:12,
    position:"absolute",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"5px",
    borderRadius:"5px",
    border:"1px solid grey",
    ":hover":{border:"1px solid white"}
}))

export const NavButton=styled(Button)(()=>({
    color:'white',
    ":hover":{border:'1px solid white'}
}))
export const Header=styled(Box)(()=>({
    position:'fixed',
    width: '100%',
    height:"110px",
    top:0,
    backgroundColor:'rgb(0, 0, 0)',
    color:'white',
    padding:'13px',
    fontWeight: 600,
    zIndex:"10"
}))

export const HeadNav=styled("ul")(({theme})=>({
    listStyleType:'none',
    textDecoration: 'none', 
    display: 'flex',
    marginRight:"550px",
    [theme.breakpoints.down('lg')]:{marginRight:"350px"},
    [theme.breakpoints.down('md')]:{marginRight:0},
    justifyContent:"end",
    position:"relative",
    color:"white"
  }))

  export const Courses=styled(Box)(()=>({
    cursor:"pointer",
    position:"absolute",
    left:"100px",
    border:"1px solid rgb(69, 52, 52)",
    backgroundColor:"rgb(34, 31, 31)",
    borderRadius:"5px",
    ":hover":{border:"1px solid white"},
    padding:"5px 10px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:'white',
}))  

export const HeadLink=styled(Link)(()=>({
    
    ":hover":{border:"1px solid white",borderRadius:"5px"},
    padding:"5px 10px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color:'white',
}))

export const Mobilefxns=styled(Box)(({theme})=>({
   height:"40px",
   width:"550px",
    top:"10px",
    right:3,
    [theme.breakpoints.down('lg')]:{width:"350px"},
    [theme.breakpoints.down('md')]:{
                 right:0,
                 top:"95vh",
                 bottom:0,
                 width:"100%"
                },
    color:"white",
    zIndex:12,
    position:"fixed",
    backgroundColor:"black"
}))

export const ListItembtn=styled(ListItemButton)(()=>({
    
    display:"flex",
    justifyContent:"center",
    alignItem:"center",
    padding:"3px",
    borderRadius:"3px",
    ":hover":{border:'1px solid white'}
}))


export const UserWlcm=styled(Box)(()=>({
    left:'13%',
    height:"50px",
    borderRadius:"5px",
    border:"1px solid rgb(69, 52, 52)",
    wordWrap:"break-word",
    overflow:"hidden",
    backgroundColor:"rgb(34, 31, 31)",
    paddingTop:5,
    width:"10%",
    top:54,
    position:"fixed",
    fontSize:"15px",
    zIndex:11,
    color:"white",
    display:"flex",
    justifyContent:"center",
    
}))

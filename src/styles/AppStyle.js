import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const SideBar =styled(Box)(({theme,wdth,height})=>({
    overflow:"auto",
    marginTop:"110px",
    height:height,
    backgroundColor:"white",
    borderRight:"1px solid lightgrey",
    width:wdth,
    [theme.breakpoints.down('md')]:{display:"none"},
    display:{md:"block",xs:"none"}
}))

export const MainComp =styled(Box)(({theme,wdth,height})=>({
    backgroundColor:"rgb(255, 240, 255)",
    overflow:"auto",
    marginTop:"110px",
    height:height,
    position:"relative",
    width:"100%",
}))

export const SideBarbutton=styled(Button)(()=>({
    left:15,
    fontWeight:"700",
    top:57,
    position:"fixed",
    fontSize:"17px",
    zIndex:11,
    color:"white",
    ":hover":{border:"1px solid white"},
}))


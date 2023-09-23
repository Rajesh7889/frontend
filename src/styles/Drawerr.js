import { List, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CatHeading=styled(Typography)(()=>({
    paddingLeft:"20px",
    marginTop:"10px",
    fontWeight:"800"
}))

export const Sublist=styled(List)(()=>({
    position:"absolute",
    top:30,
    minWidth:"150px",
    maxHeight:"500px",
    overflow:"auto",
    right:-20,
    border:"1px solid #73566f",
    backgroundColor:"#73566f",
    zIndex:1,
    ":hover":{border:"1px solid black"}
}))
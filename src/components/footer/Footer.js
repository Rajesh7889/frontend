import { Box } from "@mui/material"
import React from "react"

export default function Footer(){
    return(
        <Box sx={{ backgroundColor:"rgb(0, 0, 0)", color:'white', position:'fixed', width:'100%', textAlign:'center', bottom:0,zIndex: 11}}>
           Footer content
        </Box>
    )
}
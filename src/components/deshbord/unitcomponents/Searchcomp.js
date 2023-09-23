import { Grid, IconButton, TextField, styled } from '@mui/material'
import React, { useState } from 'react'
import Search from "@mui/icons-material/Search"
import { useNavigate } from 'react-router-dom'

function Searchcomp(props) {
    const navigate=useNavigate()
    const[search,setSearch]=useState('')
  return (
    <SearchBox item xs={12} >
       <Searchinput size="small" placeholder="Search.." onChange={(e)=>setSearch(e.target.value)}  fullWidth />
       <IconButton onClick={()=>navigate(`/identical-products/${search}`)}><Search/></IconButton>
    </SearchBox> 
  )
}

const SearchBox=styled(Grid)(()=>({
    position:"fixed",
    borderRadius:"10px",
    backgroundColor:"orange",
    width:"50%",
    left:"25%",
    top:"59px",
    zIndex:111,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}))

const Searchinput=styled(TextField)(()=>({
    borderTopLeftRadius:"10px",
    borderBottomLeftRadius:"10px",
    backgroundColor:"white",
    border:"none",
    outline:"none"
}))
export default Searchcomp
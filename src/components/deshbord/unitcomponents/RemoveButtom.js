import {styled} from '@mui/material'
import React, {useEffect, useState } from 'react'
import { Button2 } from '../../../styles/Showcategories'
import { favAndCard } from '../../API/APIreq'

function RemoveButtom(props) {
    const [update,setupdate]=useState([])
    const user=JSON.parse(localStorage.getItem('user'))
   
    useEffect(()=>{
        props.fxn()
    },[update])

    const like=async()=>{
        let url='/user/product/liked/'
        let a=await favAndCard(url,user?._id,props.id)
       setupdate(a)
      }
    
      const card=async()=>{ 
        let url='/user/product/card/'
        let a=await favAndCard(url,user?._id,props.id)
        setupdate(a)
      }
     

  return (
      <>
        <Removebtn 
             onClick={(e)=>{
             e.stopPropagation()
             props.type==='like'
             ?like()
             :props.type==='card'
             &&card()
             }}>Remove</Removebtn>
      </>
  )
}
const Removebtn=styled(Button2)(()=>({
      position:"absolute",
      top:10,
      padding:0,
      backgroundColor:"white",
     ":hover":{backgroundColor:"white"}
}))

export default RemoveButtom
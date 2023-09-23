import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Allsubcatproducts from '../deshbord/showproductcomponentfunctionalities/Allsubcatproducts'
import { favandCardprdctdtls } from '../API/APIreq'
import { ProductHeading } from '../../styles/Showcategories'
import Yetnoproduct from '../deshbord/Yetnoproduct'
import Loader from '../deshbord/unitcomponents/Loader'
import { Box } from '@mui/material'

function Favlist() {
   
  const navigate=useNavigate()
  const[data,setdata]=useState([])
  const [load,setLoad]=useState(false)

   let list=JSON.parse(localStorage.getItem('user'))
    
   useEffect(()=>{
    setLoad(true)
    list&&getProduct()},[])
   
   const getProduct=async()=>{
     let url='/user/get-products/liked/'+list?._id
     let a = await favandCardprdctdtls(url)
     setdata(a)
     setLoad(false)
   }
   const productDetails=(id)=>{
    navigate(`/products/products-details/${id}`)
   }

  return (
    <>
       
        <ProductHeading sx={{marginBottom:'30px',textAlign:"center"}}>My favourit product list </ProductHeading>

       {list
           ?data.length>0
               ?<Allsubcatproducts caller={'like'} type={'like'} fxn={getProduct} comptype={'specific'} product={data&&data} productDetails={productDetails}/>
               :load?<Loader/>
                 :<Yetnoproduct/>
           :<Yetnoproduct message={'Please login first to get out services'}/>
       }
       <Box sx={{height:"200px"}}>..</Box>
    </>
  )
}



export default React.memo(Favlist)
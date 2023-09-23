import React,{useState,useEffect} from 'react'
import {  useNavigate, useParams } from "react-router-dom"
import {Box} from "@mui/material";
import Cookies from "js-cookie";
import {signout} from '../../features/Signstatus'
import { useDispatch} from 'react-redux'
import Showcategories from './showproductcomponentfunctionalities/Showcategories';
import { getProducts} from '../API/APIreq';
import Loader from './unitcomponents/Loader';
import Yetnoproduct from './Yetnoproduct';


function ShowProductComponent(props) {
  
  const dispatch = useDispatch()
  let cookie=Cookies.get("auth")
  const params=useParams()

  const navigate=useNavigate()
    const [products,setProducts]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
      if(cookie===undefined){
         dispatch(signout())
         localStorage.clear()
      }
    },[])

    useEffect(()=>{
      setLoad(true)
      const data=async()=>{
        setProducts(await getProducts({url:props.urlproduct,header:props.header}))
       setLoad(false)
      }
       data()
    },[params.code,products?.length])

      const productDetails=(id)=>{
        navigate(`/products/products-details/${id}`)
       }
    
  return (
    <>
   
      { products?.length
         ?<Showcategories callcomp={props.callcomp}  allprdct={products} productDetails={productDetails} />
         :load?<Loader/>
              :<Yetnoproduct/>
      }
         
        <Box sx={{height:"200px"}}>..</Box>
   </>
  )
}

export default ShowProductComponent

import axios from "axios";
import Cookies from "js-cookie";
import Allsubcatproducts from "../deshbord/showproductcomponentfunctionalities/Allsubcatproducts";
import Loader from "../deshbord/unitcomponents/Loader";
import { useEffect, useState } from "react";
import { getProducts, tryRequire } from "../API/APIreq";
import { useNavigate } from "react-router-dom";
import { ProductHeading } from "../../styles/Showcategories";
import { Box } from "@mui/material";

export default function ProductItems(){

    const navigate=useNavigate()
    const [products,setProducts]=useState(null)
    const [load,setLoad]=useState(false)
    const [del,setDel]=useState(false)

    let cookie=Cookies.get("auth")
    const DeleteItm=async(id)=>{
        try{  
              const itm= await axios.delete(`delete-product/${id}`)
              setDel(itm.data)
              if(itm.status>499){
                alert("Server is not working")}else if(itm.data===false){
                alert("Can't delete item. Please try again")
              }
        }catch(err){alert("Site not working")}
    }
    useEffect(()=>{
        setLoad(true)
        const data=async()=>{
          setProducts(await getProducts({url:"lists",header:cookie}))
         setLoad(false)
        }
         data()
      },[products?.length,del])
  
        const productDetails=(id)=>{
          navigate(`/products/products-details/${id}`)
         }
      
  
    
  
    return(
        <Box sx={{paddingBottom:"100px"}}>
           <ProductHeading sx={{marginBottom:'30px',textAlign:"center"}}>My selling product list </ProductHeading>  
            {
                products?.length?
                  <Allsubcatproducts caller={'seller'} comptype={'specific'} product={products} productDetails={productDetails} tryRequire={tryRequire} DeleteItm={DeleteItm}/>
               :load&&<Loader/>
   }
        </Box>
    )
    
}
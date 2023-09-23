import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Allsubcatproducts from '../deshbord/showproductcomponentfunctionalities/Allsubcatproducts'
import { favandCardprdctdtls } from '../API/APIreq'
import { ProductHeading } from '../../styles/Showcategories'
import Yetnoproduct from '../deshbord/Yetnoproduct'
import Loader from '../deshbord/unitcomponents/Loader'
import { Box } from '@mui/material'
import { MainBox } from '../../styles/Signin&upStyles'
import BuyAddBtn from '../deshbord/unitcomponents/BuyAddBtn'

function ShopingCard() {
   
    const navigate=useNavigate()
    const[data,setdata]=useState([])
    const [load,setLoad]=useState(false)
    const [totalcost,settotalCost]=useState(0)

    let list=JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
      setLoad(true)
      getProduct()},[])

   const getProduct=async()=>{
     let url='/user/get-products/card/'+list._id
     let a = await favandCardprdctdtls(url)
     settotalCost(0)
     a&&a.map(item=>settotalCost(pre=>pre+item.price))
     setdata(a)
     setLoad(false)
   }
   
   

   const productDetails=(id)=>{
    navigate(`/products/products-details/${id}`)
   }
  return (
    <>
        <ProductHeading sx={{marginBottom:'10px',textAlign:"center"}}>My Shoping Card... </ProductHeading>
       
        <MainBox sx={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",fontWeight:700,color:'#2d0202',marginBottom:"10px"}}>
          
              <Box>
                  Total Number of ITEMS : 
                  <span style={{marginLeft:"15px"}}>
                      {data&&data.length} items
                  </span>
              </Box>
              <Box>
                  Total estimated cost : 
                  <span style={{marginLeft:"15px"}}>
                    RS.{totalcost}
                  </span>
              </Box>

               <BuyAddBtn type={"card"}/>

        </MainBox>
       
       {list
          ?data.length
          ?<Allsubcatproducts caller={'card'} fxn={getProduct} type={'card'} comptype={'specific'} product={data&&data} productDetails={productDetails}/>
          :load?<Loader/>
              :<Yetnoproduct/>
          :<Yetnoproduct message={'Please login first to get out services'}/>
          }
          <Box sx={{height:"200px"}}>..</Box>
    </>
  )
}


export default ShopingCard
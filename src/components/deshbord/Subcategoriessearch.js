import React, { useEffect, useState } from 'react'
import { getsubcaterogies } from '../API/APIreq'
import { useNavigate, useParams } from 'react-router-dom'
import Allsubcatproducts from './showproductcomponentfunctionalities/Allsubcatproducts'
import Loader from './unitcomponents/Loader'
import Yetnoproduct from './Yetnoproduct'

function Subcategoriessearch() {

    const navigate=useNavigate()
    const[subcatprodutlist,setsubcatprodutlist]=useState([])
    const [load,setLoad]=useState(false)
    const params=useParams()
    useEffect(()=>{
      setLoad(true)
        async function getData(){
            setsubcatprodutlist(await getsubcaterogies({cat:params.cat,subcat:params.subcat}))
            setLoad(false)
          }
        getData()
    },[params])

const productDetails=(id)=>{
    navigate(`/products/products-details/${id}`)
   }
  return (
    <>
        {
          subcatprodutlist?.length
           ?<Allsubcatproducts product={subcatprodutlist} productDetails={productDetails}/>
           :load
             ?<Loader/>
             :<Yetnoproduct/>
        }
    </>
  )
}

export default Subcategoriessearch
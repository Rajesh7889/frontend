import React from 'react'
import {useParams } from "react-router-dom"
import ShowProductComponent from "./ShowProductComponent";

function CategoriesSearch() {
    const params=useParams()
    
    const tryRequire = (code) => {
      try {
       return "/categorical-search/"+ code
      } catch (err) {
       return `/`;
      }
    };
    let urlproduct=tryRequire(params.code)

  return (
    <> 
      <ShowProductComponent callcomp={'subcats'} seller={false} urlproduct={urlproduct} />
    </>
    
  )
}

export default CategoriesSearch



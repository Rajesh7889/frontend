
import React from "react";
import ShowProductComponent from "./ShowProductComponent";

function Deshboard(){
  let urlproduct="all-products/categories"
    return(
        <> 
          <ShowProductComponent callcomp={'home'} seller={false} header="" urlproduct={urlproduct}/>
        </>
    )
}
export default React.memo(Deshboard)
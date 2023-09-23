import axios from "axios";


//search api requist...
export const searchItem=async({value})=>{
    try{
            let url='/categorical-search/itm/'+ value;
            const itm= await axios.get(url)
            if(itm.data===false){
              return ""}else if(itm.status>499){
              return false}else{
              return itm.data

            }
     }catch(err){return false}
  }


//all product fetching api...
export const getProducts=async(props)=>{
 
  try{
      const result= await axios.get(props.url,{headers:{'Authorization':props.header}})
       if(result.data===false||result.status>499){
      return false
      }else{
       return result.data}
   }catch(err){return false} 
}

//subcatgories api..
export const getsubcaterogies=async({cat,subcat})=>{
    try{
       let url='/subcateries-search/'+cat+'/'+subcat;
       const result= await axios.get(url)
       if(result.data===false||result.status>499){
          return false}else{
          return result.data}
    }catch(err){
        return false
    }
}  

//other functions..
export const tryRequire = (path) => {
  try {
     return require(`../../images/${path}`);
  } catch (err) {
     return null;
  }
  };


 
//favorite and shoping card  id's...

export const favAndCard=async(url,userId,productId)=>{
   let compurl=url+userId+'/'+productId
   let result=await axios.put(compurl)
   localStorage.setItem('user',JSON.stringify(result.data))
   return result.data.liked.slice(-1)
}


//favorite item details..
export const favandCardprdctdtls=async(url)=>{
           let result=await axios.post(url)
           return result.data
}


///filter likes...
export const filterlikedandCard=(user,item)=>{
   let alreadyliked= user.filter(itm=>itm===item._id)
   return alreadyliked?.length?true:false
 }

 //specific Product details.

 export  const getSpecificProducts=async(id)=>{
   try{
       const result= await axios.get(`get-products-details/${id}`)
       if(result){
          return result.data;
       }else{alert("Not found")}
    }catch(err){alert("Page is not getting loaded")} 
}

//update order address..

export const updtAdrs=async(id,detials)=>{
   try{
        const result=await axios.put(`/update-details/${id}`,detials)
         localStorage.setItem("user",JSON.stringify(result.data)) 
         return result.data?true:false
      }catch(err){
      alert("can't update address , something went wrong..")
   }
}

//savings calculation...
export const savings=(itm)=>{
  return Math.ceil((40/100)*itm.price)
}


//making an order..

export const orderAPI=async(orderdtls)=>{
   try{
      const response= await axios.post("/order",orderdtls)
     
      if(response.data=== false || response.status>499){
        return false
       }else{
         return response.data&&true
       }
   }catch(err){alert("Site not working")}
}
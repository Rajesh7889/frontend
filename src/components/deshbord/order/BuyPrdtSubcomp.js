import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Button1 } from "../../../styles/Showcategories"

export function LogDfltComp({msg,email}){
    return(
      <>
         <Typography sx={{padding:"18px",fontSize:"15px"}}>{ msg ? msg :'Your order updates will be send on'} 
             <span style={{fontWeight:700,color:"#73566f",fontSize:"18px"}}> {email}</span> 
         </Typography>
      </>
    )
  }
  
  export const Ordrsmrydflt=({data})=>{
    return(
      <>
          <Typography sx={{padding:"18px",fontSize:"15px"}}>
             ({data} item{data>1 &&'s'})
          </Typography>
      </>
    )
  }
  
  export function AdrsDfltComp({list}){
    return(
      <>
          <Typography sx={{padding:"18px",fontSize:"15px"}}>
            {list.name}, {list.nmbr}, ({list.address.State}), {list.address.District} ({list.address.pincode}), {list.address.City}, ({list.address.LandMark})
          </Typography>
      </>
    )
  }
  
  export function LogUpdtComp({logUpdt}){
    return(
      <> 
         <Typography sx={{padding:"18px",fontSize:"15px"}}>
               <Link to='/login'>If you want to make order from another account you can logout from here and login to other one</Link>
         </Typography>
         <Button1 sx={{color:'white',margin:"0px 0px 18px 18px"}} onClick={()=>logUpdt()}>Continue</Button1>
      </>
    )
  }


  export const Prictitl=({data})=>{
    return(
    <>
       Price ({data?.length} item{data?.length>1 &&'s'})
    </>)
   }
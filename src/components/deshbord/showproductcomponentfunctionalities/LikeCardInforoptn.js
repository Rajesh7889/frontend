import { Box, Grid, styled} from '@mui/material';
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { favAndCard,filterlikedandCard} from '../../API/APIreq';
import { useSelector} from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate } from 'react-router-dom';


function LikeCardInforoptn({item,productDetails,caller,DeleteItm}) {

  const navigate=useNavigate()

  const auth=useSelector((state) => state.signin.signin)
  const [showliked,setShowliked]=useState(false)
  const [showCard,setShowcard]=useState(false)

  const [clickedlike,setClickedlike]=useState(false)
  const [clickedcard,setClickedcard]=useState(false)

  const [updatlikes,setupdatlikes]=useState('')
  const [updatmycard,setupdatmycard]=useState('')

   let user=JSON.parse(localStorage.getItem('user'));
   
  useEffect(()=>{user&&setShowliked(filterlikedandCard(user?.liked,item))},[updatlikes])
  useEffect(()=>{user&&setShowcard(filterlikedandCard(user?.card,item))},[updatmycard])

  const like=async()=>{
    setClickedlike(true)
    let url='/user/product/liked/'
    let a=await favAndCard(url,user?._id,item._id)
    setupdatlikes(a)
    setClickedlike(false)
  }

  const card=async()=>{ 
    setClickedcard(true)
    let url='/user/product/card/'
    let a=await favAndCard(url,user?._id,item._id)
    setupdatmycard(a)
    setClickedcard(false)
  }
 
  return (
    <>
          <OptnCntnr 
             onClick={(e)=>{
                     e.stopPropagation()}}
          >
          
             <Grid container>

                 {auth&&caller==="seller" ?
                 <>
                     <Optns item xs={4}>
                        <DeleteIcon 
                               sx={{border:"1px solid white",borderRadius:"50%",backgroundColor:"white"}}
                               onClick={(e)=>{e.stopPropagation();
                                              DeleteItm(item._id)}}/>
                     </Optns>
                     <Optns item xs={4}>
                        <UpdateIcon 
                               sx={{border:"1px solid white",borderRadius:"50%",backgroundColor:"white"}}
                               onClick={(e)=>{e.stopPropagation();navigate(`/update/${item._id}`)}}/>
                    </Optns>

                 </>
                 :auth?
                 <> 
                      <Optns item xs={4}>
                         <FavoriteIcon 
                               sx={{color:clickedlike?"grey":showliked?"darkred":"black",border:"1px solid white",borderRadius:"50%",backgroundColor:"white"}} 
                               onClick={like}/>
                      </Optns>

                      <Optns item xs={4}>
                         <ShoppingCartIcon 
                               sx={{color:clickedcard?"grey":showCard?"darkred":"black",border:"1px solid white",borderRadius:"50%",backgroundColor:"white"}} 
                               onClick={card}/>
                      </Optns>
                   </>:""
                  }
                  

                  <Optns item xs={4}>
                        <InfoIcon 
                               sx={{border:"1px solid white",borderRadius:"50%",backgroundColor:"white"}}
                               onClick={()=>
                                caller!=="dtls" 
                                  ?productDetails(item._id):""}/>
                  </Optns>
                  
           </Grid>
        </OptnCntnr>
      
    </>
  )
}

const OptnCntnr=styled(Box)(()=>({
  left:"10%",
  position:"absolute",
  top:'50%',
  height:"30px",
}))

const Optns=styled(Grid)(()=>({
  cursor:"pointer",
  textAlign:"center",
  padding:'2px',
  ":hover":{color:'#d1adcc92'}
}))

export default React.memo(LikeCardInforoptn)
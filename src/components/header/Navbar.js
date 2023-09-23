import '../../App.css';
import React, { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Cookies from 'js-cookie';
import { Box,List, ListItem,Typography,useMediaQuery } from '@mui/material';
import {signinn,signout} from '../../features/Signstatus'
import { useDispatch} from 'react-redux'
import { useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SellerBox,Logo,HeadLink, HeadNav, Header, Mobilefxns, ListItembtn, Aboutus, UserWlcm, Courses, NavButton  } from '../../styles/NavStyles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';


export default function Nav(){
    
   const dispatch = useDispatch()
   const navigate=useNavigate()
   const auth=JSON.parse(localStorage.getItem("user"))
   const [sellerToggle,setSelertToggle]=useState(false)
   useEffect(()=>{auth && dispatch(signinn())},[])
   

   //media query...
   const theme=useTheme();
   const matches= useMediaQuery(theme.breakpoints.up('md'));
   const matches1= useMediaQuery(theme.breakpoints.up('lg'));
   const matches2= useMediaQuery(theme.breakpoints.down('sm'));
   const matches3= useMediaQuery(theme.breakpoints.up('xl'));
   const logout=()=>{
    dispatch(signout())
    Cookies.remove("auth")
    localStorage.clear()
    navigate("/")
}
   
   const navoptions=[
                          {path:"/orderstatus", text:"Order-Lookup"},
           !matches2&&    {path:"/orderproduct",text:"Quick-Order"},
           auth===null && {path:"/login",       title:!matches?"login":"",  icon:<LoginIcon/>,         text:!matches2&&"Login"},
           auth===null && {path:"/signup",      title:!matches?"signup":"", icon:<TheaterComedyIcon/>, text:!matches2&&"Signup"},
           auth &&        {path:"/profile",     title:"",                   icon:<AccountBoxIcon/>,    text:matches?"My-profile":""},
           auth &&        {path:"/",            title:!matches?"logout":"", icon:<LogoutIcon/>,        text:matches?"Logout":""},
        ]  
        
   const functionalities=[
                          {path:auth?"/favoritelist":'/login', icon:<FavoriteIcon sx={{fontSize:"30px",marginRight:"5px"}}/>,        text:matches1&&"Favorite"},
                          {path:"/notifications",icon:<NotificationAddIcon sx={{fontSize:"30px",marginRight:"5px"}}/>, text:matches1&&"Notifications"},
                          {path:auth?"/card":'/login',         icon:<ShoppingCartIcon sx={{fontSize:"30px",marginRight:"5px"}}/>,    text:matches1&&"Card"},
                          {path:"/help",         icon:<HelpIcon sx={{fontSize:"30px",marginRight:"5px"}}/>,            text:matches1&&"Help"},
   ]     


   const selleroptions=[
                         {path:"/myProducts", text:"MY-PRODUCTS"},
                         {path:"/add", text:"ADD-PRODUCTS"},

   ]
    return(<>
       <Header onClick={()=>{sellerToggle&&setSelertToggle(false);}}>
        <HeadNav theme={theme}><li>

        {/* logo */}
            <HeadLink sx={{":hover":{border:"none"}}} to="/">
                 <Logo>Swadeshi</Logo>
            </HeadLink></li>

        {/* handcrafting link */}
           {matches3&&
             <li>
              <Courses onClick={()=>navigate("/get-videoCourses")}>Learn or teach Handcrafting (at minimum prices)..</Courses></li>
           }
  
         {/* top navigation buttons */}
           {    navoptions.map((itm,index)=>{
                return( <li key={index}>
                        {itm &&
                              <HeadLink to={itm.path} sx={{borderLeft:"1px solid grey"}} title={itm &&itm.title } onClick={()=>itm.text===logout()}>
                                {itm.icon}{itm.text}
                              </HeadLink>
                          }</li>
                )})
           }
       </HeadNav>
    </Header>

    {/* responsive navigations */}
    <Mobilefxns theme={theme}>
         <Box>
            <List sx={{display:"flex",padding:0}}>
                {functionalities.map((itm,index)=>{
                    return(
                 <ListItem key={index} sx={{borderLeft:"1px solid grey",height:"40px"}}>
                    <ListItembtn onClick={()=>{navigate(itm.path);setSelertToggle(false)}}>
                        {itm.icon}{matches&&itm.text}
                    </ListItembtn>
                </ListItem>)})}
            </List>
         </Box>
    </Mobilefxns>

   {/* seller corner links */}
   { auth && 
     <SellerBox theme={theme}>
        <NavButton size={matches2?'small':"medium"} fullWidth onClick={(e)=>{e.stopPropagation();setSelertToggle(!sellerToggle)}}  endIcon={sellerToggle?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}>SEller</NavButton>
         <Box sx={{display:sellerToggle?"block":"none"}}>
            <List>
               {selleroptions.map((itm,indx)=>{
                return(
                <ListItem key={indx} sx={{backgroundColor:"black"}} >
                     <ListItembtn  onClick={()=>{navigate(itm.path);setSelertToggle(false)}}>
                        {itm.text}
                    </ListItembtn>
                </ListItem>)
               }) }
            </List>
         </Box>
    </SellerBox>}

    {/* all about us */}
    <Aboutus>
        <InfoIcon/>About-Us
    </Aboutus>

    {/* welcome message */}
   {
    matches1 &&
     <UserWlcm>
        <FaceRetouchingNaturalIcon/>
        <Typography sx={{fontSize:"12px",marginTop:auth?'-5px':"10px",paddingLeft:"5px",textAlign:"center"}}>
            {auth
               ?<>Hi <span style={{fontSize:"20px"}}>{auth.name.slice(0,7)}!..</span> Welcome to swadeshi bazaar</>
               :<>Login for better experience..</>}
         </Typography>
     </UserWlcm>
   } 
   </>
    )
}
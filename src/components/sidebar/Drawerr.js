import React, {useState } from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FaceIcon from '@mui/icons-material/Face';
import HouseIcon from '@mui/icons-material/House';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LuggageIcon from '@mui/icons-material/Luggage';
import ToysIcon from '@mui/icons-material/Toys';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ConstructionIcon from '@mui/icons-material/Construction';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { List, ListItem, ListItemIcon, ListItemButton, Divider, Typography, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import {signout} from '../../features/Signstatus'
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CatHeading, Sublist } from '../../styles/Drawerr';

function Drawerr(props) {

  const[moreoptns, setMoreoptns]=useState(false)
  const[subCategories,setSubcategories]=useState(false)
  const auth=useSelector((state) => state.signin.signin)
  const dispatch=useDispatch()
  const navigate=useNavigate()

 //action functions on clicking button..
  const actionFxn=(title,code)=>
             {
              props.fxn && props.fxn();
              navigate(`/categorical-search/${title}/${code}`)
            }
  const signinnn=()=> 
             {
              props.fxn && props.fxn();
              navigate("/login")
            }
  const orders=()=>
             {
              props.fxn && props.fxn();
              navigate("/orderstatus")
            }
  const favorite=()=>
             {
              props.fxn && props.fxn();
              auth?navigate("/favoritelist"):navigate('/login')
            }
  const help=()=>
             {
              props.fxn && props.fxn();
              navigate("/help")
            }
  const about=()=>
             {
              props.fxn && props.fxn();
              navigate("/help")
            }
  const shopingcard=()=>
             {
              props.fxn && props.fxn();
              auth?navigate("/card"):navigate('/login')
            }
  const notification=()=>
             {
              props.fxn && props.fxn();
              navigate("/notifications")
            }
  const createCourse=()=>
             {
              props.fxn && props.fxn();
              navigate('/create-videoCourses')
            }
  const getCourse=()=>
             {
              props.fxn && props.fxn();
              navigate('/get-videoCourses')
            }
  
             const moreopt=()=>setMoreoptns(!moreoptns)
  
  const signoutt=()=>{
      props.fxn && props.fxn()
      dispatch(signout())
      Cookies.remove("auth")
      localStorage.clear()
      navigate("/")
    }
    
  const options=[
    {icon:"",title:"",category:"Handcraft-Courcses"},
    {icon:<VideoLibraryIcon/>,action:getCourse,title:"Get-Course",category:""},
    {icon:<DesignServicesIcon/>,action:createCourse,title:"Create-Course",category:""},
    {icon:"",title:"",category:"Trending"},
    {value:109,icon:<TrendingUpIcon/>,action:actionFxn,title:" Best Sellers",category:""},
    {value:110,icon:<NewReleasesIcon/>,action:actionFxn,title:"New Releases",category:""},
    {icon:"",title:"",category:"Shop By Category"},
    {value:111,icon:<PhoneAndroidIcon/>,action:actionFxn,title:"Mobiles, Music appliances",category:"",subcats:[
                                                                                                                 {title:"Mobiles",action:""},
                                                                                                                 {title:"Mobile Accessories",action:""},
                                                                                                                 {title:"Power Banks",action:""},
                                                                                                                 {title:"Headphones",action:""},
                                                                                                                 {title:"Cases & Covers",action:""},
                                                                                                                 {title:"Screen Protectors",action:""},
                                                                                                                 {title:"Tablets",action:""},
                                                                                                                 {title:"Best Sellers",action:""},
                                                                                                                 {title:"Latest Launches",action:""},
                                                                                                                 {title:"others",action:""},
                                                                                                                 
                                                                                                                ]},
    {value:112,icon:<DevicesOtherIcon/>,action:actionFxn,title:" Computers, Laptops",category:"",subcats:[
                                                                                                          {title:"Computers",action:""},
                                                                                                          {title:"Laptops",action:""},
                                                                                                          {title:"Drives & Storage",action:""},
                                                                                                          {title:"Printers & ink",action:""},
                                                                                                          {title:"Networking Devices",action:""},
                                                                                                          {title:"Monitors",action:""},
                                                                                                          {title:"Desktops",action:""},
                                                                                                          {title:"Components",action:""},
                                                                                                          {title:"Accessories",action:""},
                                                                                                          {title:"Others",action:""},     
                                                                                                         ]},
    {value:113,icon:<SmartDisplayIcon/>,action:actionFxn,title:` TV, Appliances`,category:"",subcats:[
                                                                                                                 {title:"Televisions",action:""},
                                                                                                                 {title:"Entertainment Systems",action:""},
                                                                                                                 {title:"Headphones",action:""},
                                                                                                                 {title:"Speakers",action:""},
                                                                                                                 {title:"Cameras",action:""},
                                                                                                                 {title:"Camera Accessories",action:""},
                                                                                                                 {title:"Musical Instruments",action:""},
                                                                                                                 {title:"Air Conditioners",action:""},
                                                                                                                 {title:"Refrigerators",action:""},
                                                                                                                 {title:"Washing Machines",action:""},
                                                                                                                 {title:"Kitchen & Home Appliances",action:""},
                                                                                                                 {title:"Heating & Cooling Appliances",action:""},
                                                                                                                 {title:"Latest Appliances",action:""},
                                                                                                                 {title:"Latest TV's",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                 
                                                                                                     ]},
    {value:114,icon:<WomanIcon/>,action:actionFxn,title:`Women's Fashion`,category:"",subcats:[
                                                                                               {title:"Clothes",action:""},
                                                                                               {title:"Ethnic Wear",action:""},
                                                                                               {title:"NightWear",action:""},
                                                                                               {title:"Top Brands",action:""},
                                                                                               {title:"Watches",action:""},
                                                                                               {title:"HandBags",action:""},
                                                                                               {title:"Gold & Diamond Jewellery",action:""},
                                                                                               {title:"Fashion & Silver Jewellery",action:""},
                                                                                               {title:"Sunglasses",action:""},
                                                                                               {title:"Shoes",action:""},
                                                                                               {title:"Fashion Sandals",action:""},
                                                                                               {title:"Ballerinas",action:""},
                                                                                               {title:"Designer Boutique",action:""},
                                                                                               {title:"Handicraft Store",action:""},
                                                                                               {title:"Sportswear",action:""},
                                                                                               {title:"Shingar",action:""},
                                                                                               {title:"Cosmetics",action:""},
                                                                                               {title:"Makeup",action:""},
                                                                                               {title:"Beauty Products",action:""},
                                                                                               {title:"Others",action:""},
                                                                                                                 
                                                                                              ]},
    {value:115,icon:<ManIcon/>,action:actionFxn,title:`Men's Fashion`,category:"",subcats:[
                                                                                            {title:"Clothes",action:""},
                                                                                            {title:"T-shirts & Polos",action:""},
                                                                                            {title:"Shirts",action:""},
                                                                                            {title:"Jeans",action:""},
                                                                                            {title:"Innerwear",action:""},
                                                                                            {title:"Watches",action:""},
                                                                                            {title:"Bags & Luggage",action:""},
                                                                                            {title:"Sunglasses",action:""},
                                                                                            {title:"Jewellery",action:""},
                                                                                            {title:"Wallets",action:""},
                                                                                            {title:"Shoes",action:""},
                                                                                            {title:"Sports Shoes",action:""},
                                                                                            {title:"Formal Products",action:""},
                                                                                            {title:"Men's Fashion",action:""},
                                                                                            {title:"Traditionals",action:""},  
                                                                                            {title:"Others",action:""},  
                                                                                          ]},
    moreoptns&&{value:116,icon:< FaceIcon/>,action:actionFxn,title:`Kid's Fashion`,category:"",subcats:[
                                                                                                        {title:"Kid's Clothes",action:""},
                                                                                                        {title:"Kid's Shoes",action:""},
                                                                                                        {title:"School Bags",action:""},
                                                                                                        {title:"Kid's Watches",action:""},
                                                                                                        {title:"Kid's Fashion",action:""},
                                                                                                        {title:"Toys & Games",action:""},
                                                                                                        {title:"Baby Products",action:""},
                                                                                                        {title:"Diapers",action:""},
                                                                                                        {title:"Toys Gifts",action:""},
                                                                                                        {title:"Baby care",action:""},
                                                                                                        {title:"Others",action:""},
                                                                                                      ]},
    moreoptns&&{value:117,icon:<HouseIcon/>,action:actionFxn,title:`Home`,category:"",subcats:[
                                                                                                {title:"Showroom",action:""},
                                                                                                {title:"Furniture",action:""},
                                                                                                {title:"Fine Art",action:""},
                                                                                                {title:"Home Furnishing",action:""},
                                                                                                {title:"Bedroom Linen",action:""},
                                                                                                {title:"Home Decor",action:""},
                                                                                                {title:"Garden & Outdoors",action:""},
                                                                                                {title:"Home Storage",action:""},
                                                                                                {title:"Indoor Lighting",action:""},
                                                                                                {title:"Home Improvement",action:""},
                                                                                                {title:"Others",action:""}
                                                                                              ]},
    moreoptns&&{value:118,icon:<KitchenIcon/>,action:actionFxn,title:`Kitchen`,category:"",subcats:[
                                                                                                   {title:"Kitchen",action:""},
                                                                                                   {title:"Dining",action:""},
                                                                                                   {title:"Kitchen Storage",action:""},
                                                                                                   {title:"Containers",action:""},
                                                                                                   {title:"Kitchen Electronics",action:""},
                                                                                                   {title:"Kitchen Cooking",action:""},
                                                                                                   {title:"Kitchen Cultural",action:""},
                                                                                                   {title:"Mud Cooking",action:""},
                                                                                                   {title:"Latest Kitchen",action:""},
                                                                                                   {title:"Others",action:""},          
                                                                                                 ]},
    moreoptns&&{value:119,icon:<LocalGroceryStoreIcon/>,action:actionFxn,title:`Grocery`,category:"",subcats:[
                                                                                                              {title:"Bakery",action:""},
                                                                                                              {title:"Breakfast Cereal",action:""},
                                                                                                              {title:"Canned & Jarred Food",action:""},
                                                                                                              {title:"Coffee, Tea & Beverages",action:""},
                                                                                                              {title:"Cooking & Baking Supplies",action:""},
                                                                                                              {title:"Dairy, Plant-Based ",action:""},
                                                                                                              {title:"Fresh Fruits & Vegetables",action:""},
                                                                                                              {title:"Dried Fruits, Nuts & Seeds",action:""},
                                                                                                              {title:"Hampers & Gourmet Gifts",action:""},
                                                                                                              {title:"Jams, Honey & Spreads",action:""},
                                                                                                              {title:"Pasta & Noodles",action:""},
                                                                                                              {title:"Pickles",action:""},
                                                                                                              {title:"Rice, Flour & Pulses",action:""},
                                                                                                              {title:"Snacks & Sweets",action:""},
                                                                                                              {title:"Indian Traditional",action:""},
                                                                                                              {title:"Top Selling",action:""},
                                                                                                              {title:"Sports Diet",action:""},
                                                                                                              {title:"Others",action:""},
                                                                                                                 
                                                                                                            ]},
    moreoptns&&{value:120,icon:<LocalFloristIcon/>,action:actionFxn,title:`Beauty`,category:"",subcats:[
                                                                                                        {title:"Bath & Body",action:""},
                                                                                                        {title:"Fragrance",action:""},
                                                                                                        {title:"Hair Care",action:""},
                                                                                                        {title:"Make-up",action:""},
                                                                                                        {title:"Manicure & Pedicure",action:""},
                                                                                                        {title:"Salon & Spa Equipment",action:""},
                                                                                                        {title:"Skin Care",action:""},
                                                                                                        {title:"Tools & Accessories",action:""},
                                                                                                        {title:"Beauty Brands",action:""},
                                                                                                        {title:"Nail Care",action:""},
                                                                                                        {title:"Make-up Remover",action:""},
                                                                                                        {title:"Make-up Palettes",action:""},
                                                                                                        {title:"Make-up Sets & Kits",action:""},
                                                                                                        {title:"Traditional Beauty Products",action:""},
                                                                                                        {title:"Best Sellers",action:""},
                                                                                                        {title:"Latest",action:""},
                                                                                                        {title:"Others",action:""},
                                                                                                                 
                                                                                                      ]},
    moreoptns&&{value:121,icon:<MedicalInformationIcon/>,action:actionFxn,title:`Health`,category:"",subcats:[
                                                                                                                 {title:"Bath & Shower",action:""},
                                                                                                                 {title:"Beauty Tools & Accessories",action:""},
                                                                                                                 {title:"Diet & Nutrition",action:""},
                                                                                                                 {title:"Health Care",action:""},
                                                                                                                 {title:"Healthcare Packages",action:""},
                                                                                                                 {title:"Home Medical Supplies & Equipment",action:""},
                                                                                                                 {title:"Household Supplies",action:""},
                                                                                                                 {title:"Medication & Treatments",action:""},
                                                                                                                 {title:"Oral Care",action:""},
                                                                                                                 {title:"Personal Care",action:""},
                                                                                                                 {title:"Skin Care",action:""},
                                                                                                                 {title:"Best Sellings",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                 
                                                                                                                ]},
    moreoptns&&{value:122,icon:<SportsBasketballIcon/>,action:actionFxn,title:`Sports`,category:"",subcats:[
                                                                                                                 {title:"Cricket Products",action:""},
                                                                                                                 {title:"Kabaddi Products",action:""},
                                                                                                                 {title:"Hockey Products",action:""},
                                                                                                                 {title:"Footballs & others",action:""},
                                                                                                                 {title:"Sports Products",action:""},
                                                                                                                 {title:"Athelete's Store",action:""},
                                                                                                                 {title:"Swimming & Tracking",action:""},
                                                                                                                 {title:"Camping & Hiking",action:""},
                                                                                                                 {title:"Badminton",action:""},
                                                                                                                 {title:" Cycling",action:""},
                                                                                                                 {title:"Running",action:""},
                                                                                                                 {title:"Best & Latest",action:""},
                                                                                                                 {title:"Others",action:""}, 
                                                                                                                ]},
    moreoptns&&{value:123,icon:<FitnessCenterIcon/>,action:actionFxn,title:`Fitness`,category:"",subcats:[
                                                                                                                 {title:"Battle Ropes",action:""},
                                                                                                                 {title:"Toning Belts",action:""},
                                                                                                                 {title:"Water Bottles",action:""},
                                                                                                                 {title:"Wristbands",action:""},
                                                                                                                 {title:"Straps",action:""},
                                                                                                                 {title:"Skipping Ropes",action:""},
                                                                                                                 {title:"Sauna Suits",action:""},
                                                                                                                 {title:"Power Wristbands",action:""},
                                                                                                                 {title:"Massage Belts & Electric Stimulators",action:""},
                                                                                                                 {title:"Jumping Trainers",action:""},
                                                                                                                 {title:"Joint Wraps",action:""},
                                                                                                                 {title:"Gyroscopic Hand Exercise Balls",action:""},
                                                                                                                 {title:"Gloves",action:""},
                                                                                                                 {title:"Fitness Wall Charts",action:""},
                                                                                                                 {title:"Fitness Trampoline",action:""},
                                                                                                                 {title:"Fitness Planners",action:""},
                                                                                                                 {title:"Fitness Hoops",action:""},
                                                                                                                 {title:"Exercise Mats",action:""},
                                                                                                                 {title:"Exercise Equipment Mats",action:""},
                                                                                                                 {title:"Exercise Balls & Accessorie",action:""},
                                                                                                                 {title:"Best & latest",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                ]},
    moreoptns&&{value:124,icon:<LuggageIcon/>,action:actionFxn,title:`Bags, Luggage`,category:"",subcats:[
                                                                                                                 {title:"Casual Backpacks",action:""},
                                                                                                                 {title:"Laptop Backpacks",action:""},
                                                                                                                 {title:"Rucksacks & Trekking Backpacks",action:""},
                                                                                                                 {title:"Camera Backpacks",action:""},
                                                                                                                 {title:"Rucksacks",action:""},
                                                                                                                 {title:"Suticases",action:""},
                                                                                                                 {title:"Trolley Bags",action:""},
                                                                                                                 {title:"Travel Duffles",action:""},
                                                                                                                 {title:"Best & Latest",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                 
                                                                                                                ]},
    moreoptns&&{value:125,icon:<ToysIcon/>,action:actionFxn,title:`Toys, Baby Products`,category:"",subcats:[
                                                                                                                 {title:"Baby Care",action:""},
                                                                                                                 {title:"Activity & Play Time",action:""},
                                                                                                                 {title:"Baby Safety",action:""},
                                                                                                                 {title:"Baby Shoes",action:""},
                                                                                                                 {title:"Bedding, Furniture",action:""},
                                                                                                                 {title:"Carriers & Accessories",action:""},
                                                                                                                 {title:"Feeding",action:""},
                                                                                                                 {title:"Gift Packs",action:""},
                                                                                                                 {title:"Best Sellers & Latest",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                 
                                                                                                                ]},
    moreoptns&&{value:126,icon:<TwoWheelerIcon/>,action:actionFxn,title:`Car, Motorbike`,category:"",subcats:[
                                                                                                                 {title:"Motorbike Accessories",action:""},
                                                                                                                 {title:"Motorbike Parts",action:""},
                                                                                                                 {title:"Cars Accessories",action:""},
                                                                                                                 {title:"Cars Parts",action:""},
                                                                                                                 {title:"Car Care",action:""},
                                                                                                                 {title:"Bike Care",action:""},
                                                                                                                 {title:"Best Sellers",action:""},
                                                                                                                 {title:"Latest",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                ]},
    moreoptns&&{value:127,icon:<ConstructionIcon/>,action:actionFxn,title:`Industrial`,category:"",subcats:[
                                                                                                                 {title:"Abrasive & Finishing Products",action:""},
                                                                                                                 {title:"Additive Manufacturing Products",action:""},
                                                                                                                 {title:"Agricultural Equipment ",action:""},
                                                                                                                 {title:"Commercial Door Products",action:""},
                                                                                                                 {title:"Cutting Tools",action:""},
                                                                                                                 {title:"Fasteners",action:""},
                                                                                                                 {title:"Filtration",action:""},
                                                                                                                 {title:"Food Service Equipment",action:""},
                                                                                                                 {title:"Hydraulics, Pneumatics & Plumbing",action:""},
                                                                                                                 {title:"Industrial Electrical",action:""},
                                                                                                                 {title:"Industrial Hardware",action:""},
                                                                                                                 {title:"Janitorial & Sanitation Supplies",action:""},
                                                                                                                 {title:"Lab & Scientific Products",action:""},
                                                                                                                 {title:"Material Handling Products",action:""},
                                                                                                                 {title:"Occupational Health & Safety Products",action:""},
                                                                                                                 {title:"Packaging & Shipping Supplies",action:""},
                                                                                                                 {title:"Power & Hand Tools",action:""},
                                                                                                                 {title:"Power Transmission Products",action:""},
                                                                                                                 {title:"Professional Dental Supplies",action:""},
                                                                                                                 {title:"Professional Medical Supplies",action:""},
                                                                                                                 {title:"Retail Store Fixtures & Equipment",action:""},
                                                                                                                 {title:"Robotics",action:""},
                                                                                                                 {title:"Tapes, Adhesives",action:""},
                                                                                                                 {title:"Test, Measure & Inspect",action:""},
                                                                                                                 {title:"Best Sellers & latest",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                ]},
    moreoptns&&{value:128,icon:<LibraryBooksIcon/>,action:actionFxn,title:`Books`,category:"",subcats:[
                                                                                                                 {title:"Vedic Books",action:""},
                                                                                                                 {title:"Bhartiya Histories",action:""},
                                                                                                                 {title:"Sanatan Texts",action:""},
                                                                                                                 {title:"",action:""},
                                                                                                                 {title:"Fiction Books",action:""},
                                                                                                                 {title:"Editor's Corner",action:""},
                                                                                                                 {title:"School TextbooksChildren's Books",action:""},
                                                                                                                 {title:"Exam Central",action:""},
                                                                                                                 {title:"Textbooks",action:""},
                                                                                                                 {title:"Indian Language Books",action:""},
                                                                                                                 {title:"Best Sellers & Latest",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                ]},
    moreoptns&&{value:129,icon:<SportsEsportsIcon/>,action:actionFxn,title:`Movies, Music & Video Games`,category:"",subcats:[
                                                                                                                 {title:"All Movies & TV Shows",action:""},
                                                                                                                 {title:"Blu-ray",action:""},
                                                                                                                 {title:"Cultural & vedic",action:""},
                                                                                                                 {title:"All Hindi",action:""},
                                                                                                                 {title:"All English",action:""},
                                                                                                                 {title:"Entertainment Collectibles",action:""},
                                                                                                                 {title:"Video Games",action:""},
                                                                                                                 {title:"Gaming Consoles",action:""},
                                                                                                                 {title:"Latest Video Games",action:""},
                                                                                                                 {title:"Gaming Accessories",action:""},
                                                                                                                 {title:"PC Games",action:""},
                                                                                                                 {title:"Video Games Deals",action:""},
                                                                                                                 {title:"All Video Games",action:""},
                                                                                                                 {title:"All Music",action:""},
                                                                                                                 {title:"Bhajans",action:""},
                                                                                                                 {title:"International Music",action:""},
                                                                                                                 {title:"Film Songs",action:""},
                                                                                                                 {title:"Indian Classical",action:""},
                                                                                                                 {title:"Musical Professional Audio",action:""},
                                                                                                                 {title:"Latest Songs",action:""},
                                                                                                                 {title:"Others",action:""},
                                                                                                                ]},
    {icon:moreoptns?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>,action:moreopt,title:moreoptns?"see less":"see more",category:"Help & Settings"},
    {icon:"",title:"",category:"Others"},
    {icon:<ProductionQuantityLimitsIcon/>,action:orders,title:"Order-summery",category:""},
    {icon:<FavoriteIcon/>,action:favorite,title:"Favorites",category:""},
    {icon:<NotificationAddIcon/>,action:notification,title:"Notifications",category:""},
    {icon:<ShoppingCartIcon/>,action:shopingcard,title:"My shoping-card",category:""},
    {icon:<HelpIcon/>,action:help,title:"Help",category:""},
    {icon:<InfoIcon/>,action:about,title:"About-us",category:""},
    {icon:"",title:"",category:"Help & Settings"},
    {icon:<AccountCircleIcon/>,action:actionFxn,title:"Your Account",category:""},
    {icon:< MiscellaneousServicesIcon/>,action:actionFxn,title:"Customer Service",category:""},
    {icon:auth?<LockIcon/>:<VpnKeyIcon/>,action:auth?signoutt:signinnn,title:auth?"Sign out":"Sign in",category:""},
]
  return (
    <Box sx={{marginBottom:"20px"}} onClick={()=>setSubcategories(0)}>
     {options.map((option,index)=>{
      return(
        <div key={index} >
               {option.title===""?
                  <>
                    <Divider/>
                    <CatHeading sx={{color:"#352133"}}>{option.category}</CatHeading>
                  </>:""
                }

               { option.title?
                <List sx={{width:"90%",p:0,m:0,height:"50px"}}>
                   <ListItem  sx={{padding:0,margin:"0px"}}>
                      <ListItemIcon  sx={{display:"flex",justifyContent:"center",color:"#352133"}}>{option.icon}</ListItemIcon>
                      <ListItemButton onClick={()=>{option.action(option.title,option.value)}} sx={{padding:0,margin:"0px",height:"50px"}}>{option.title}</ListItemButton>
              
                      {option.value&&
                         <ListItemIcon  sx={{display:"flex",justifyContent:"center",position:"relative"}}>
                             <Button sx={{color:"darkgrey"}}
                                onClick={(e)=>
                                     {e.stopPropagation();
                                      !subCategories?
                                         setSubcategories(option.value):
                                         setSubcategories(0) 
                                         setSubcategories(option.value)
                                      }}
                               >
                               {subCategories===option.value?<KeyboardArrowUpIcon/>:<KeyboardArrowRightIcon/>}
                             </Button>
                             {subCategories?
                             <Sublist sx={{display:subCategories===option.value?"block":"none"}} >
                                {option.subcats&&option.subcats.map((itm,indx)=>{
                                  return(
                                <ListItem key={indx}>
                                 { <ListItemButton 
                                      sx={{color:"white","&:hover":{backgroundColor:"#d1adcc",color:"#352133"}}} 
                                      onClick={()=>{
                                          props.fxn&&props.fxn();
                                          navigate(`/subcategories-search/${option.value}/a${indx}`)}}
                                    >

                                       {itm.title}
                                       
                                  </ListItemButton>}
                               </ListItem>)})}
                             </Sublist>:""}
                         </ListItemIcon>}
                   </ListItem>
                </List>:""}
         </div>
      )})}
  </Box>
  )
}

export default React.memo(Drawerr);
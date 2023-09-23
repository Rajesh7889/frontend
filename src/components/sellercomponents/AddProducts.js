import {  Grid,Typography,Box, List, ListItem, ListItemButton } from "@mui/material"
import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ErrorIcon from '@mui/icons-material/Error';
import {Button1} from "../../styles/Showcategories"
import { ErrorBox, ErrorTxt, Heading, MainBox, OptBox, OptButton, OuterBox, SubHeading, TxtfieldCstm } from "../../styles/Signin&upStyles";
import { useTheme } from '@mui/material/styles';


export default function AddProducts(){
    const theme=useTheme()
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [categorycode,setCategoryCode]=useState("")
    const [subcategory,setsubCategory]=useState("")
    const [subcategorycode,setsubCategoryCode]=useState("")
    const [about,setAbout]=useState("")
    const [company,setCompany]=useState("")
    const [img,setImg]=useState([])

    const [subcategorylist,setsubCategorylist]=useState([])
    const [openCtgry,setOpnCtgry]=useState(false)
    const [opensubCtgry,setOpnsubCtgry]=useState(false)
    const [errMsg,setErrMsg]=useState("")


    const categories=[
        
        {value:111,title:"Mobiles, Music appliances",subcats:[
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
        {value:112,title:"Computers, Laptops",subcats:[
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
        {value:113,title:" TV, Appliances",subcats:[
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
        {value:114,title:"Women's Fashion",subcats:[
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
        {value:115,title:"Men's Fashion",subcats:[
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
        {value:116,title:"Kid's Fashion",subcats:[
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
        {value:117,title:`Home`,subcats:[
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
        {value:118,title:`Kitchen`,subcats:[
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
        {value:119,title:"Grocery",subcats:[
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
        {value:120,title:"Beauty",subcats:[
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
        {value:121,title:"Health",subcats:[
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
        {value:122,title:"Sports",subcats:[
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
        {value:123,title:"Fitness",subcats:[
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
        {value:124,title:"Bags, Luggage",subcats:[
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
        {value:125,title:"Toys, Baby Products",subcats:[
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
        {value:126,title:"Car, Motorbike",subcats:[
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
        {value:127,title:"Industrial",subcats:[
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
        {value:128,title:"Books",subcats:[
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
        {value:129,title:"Movies, Music & Video Games",subcats:[
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
    ]

    const userId=JSON.parse(localStorage.getItem("user"))._id
    
    const addProduct=async(e)=>{
       e.preventDefault()

           const formData=new FormData();
           formData.append("img",img)
           formData.append("name",name)
           formData.append("price",price)
           formData.append("category",categorycode)
           formData.append('categoryTitle',category)
           formData.append("company",company)
           formData.append("userId",userId)
           formData.append("about",about)
           formData.append("subcat",subcategory)
           formData.append("subcatcod",subcategorycode)
         
            try{
              const response= await axios.post("add-product",formData)
              
                if(response.data===false){
                    setErrMsg("Product records not saved. Please try again.")}else if(response.status>499){
                    setErrMsg("Server is not working.. Try again later..")}else if(response.data){
                         navigate("/")
              }}catch(err){setErrMsg("Site not working")}
     }

     const check=()=>{
          (name===""||img===""||price===""||subcategorycode===""||categorycode===""||company==="")?setErrMsg("Please enter all required fields"):setErrMsg("")
     }

   
    return(
        
           <OuterBox 
                  theme={theme}  
                  onClick={()=>{
                  openCtgry&&setOpnCtgry(false);
                  setOpnsubCtgry(false);}}>
                  
                  <MainBox theme={theme} >

                    { errMsg!==""&&
                     <ErrorBox >
                        <ErrorIcon sx={{color:"#352133"}}/> <ErrorTxt >{errMsg}</ErrorTxt>
                     </ErrorBox>}

                     <Heading gutterBottom theme={theme}>Add New Product</Heading>
                     <SubHeading gutterBottom theme={theme}>Fill-products-details:</SubHeading>
                     <Typography gutterBottom variant="body2" component="p" color="textSecondary">Let the people know about your product.</Typography>
        
                     <form onSubmit={(e)=>addProduct(e)}>
                      <Grid container spacing={1}>
                         <Grid item xs={12}>
                             <TxtfieldCstm  type={"text"} name={name}  label={"Product Name"}  placeholder={"Enter product name.."} fxn={(e)=>setName(e)} /> 
                         </Grid>

                         <Grid item xs={6} >
                            <Box sx={{position:"relative"}}>
                                <OptButton 
                                  onClick={(e)=>{
                                    e.stopPropagation(); 
                                    setsubCategory("")
                                    setsubCategoryCode("")
                                    setOpnCtgry(true)}} 
                                    name={category} 
                                    endIcon={<ArrowDropDownIcon 
                                    sx={{position:"absolute",top:17,right:7}}/>}>
                                    {category?category:"category"}
                                </OptButton>

                                 <OptBox sx={{display:openCtgry?"block":"none"}}>
                                     { categories.map((item,index)=>{
                                         return(
                                            <List key={index}>
                                               <ListItem>
                                                    <ListItemButton sx={{"&:hover":{backgroundColor:"#d1adcc",color:"#352133",}}} 
                                                    onClick={()=>{
                                                        setErrMsg("")
                                                        setOpnCtgry(false);
                                                        setCategoryCode(item.value);
                                                        setCategory(item.title);
                                                        setsubCategorylist(item.subcats)}} >
                                                        {item.title}
                                                   </ListItemButton>
                                              </ListItem>
                                           </List>) })
                                    }
                                </OptBox>
                            </Box>
                         </Grid>


                         <Grid item xs={6}>
                         <Box sx={{position:"relative"}}>
                                 <OptButton 
                                    onClick={(e)=>{
                                        e.stopPropagation();
                                        category===""
                                        ?setErrMsg("Please select catagory first...")
                                        :setOpnsubCtgry(true)}} 
                                         name={subcategory}
                                         endIcon={<ArrowDropDownIcon 
                                         sx={{position:"absolute",top:17,right:7}}/>}>
                                         {subcategory?subcategory:"sub-category"}
                                 </OptButton>
                                 
                                 <OptBox sx={{display:opensubCtgry?"block":"none"}}>
                                     { subcategorylist.map((item,index)=>{
                                            return(
                                            <List key={index}>
                                               <ListItem>
                                                    <ListItemButton sx={{"&:hover":{backgroundColor:"#d1adcc",color:"#352133",}}} 
                                                       onClick={()=>{
                                                        setOpnsubCtgry(false);
                                                        setsubCategoryCode('a'+index);
                                                        setsubCategory(item.title)}} >
                                                        {item.title}
                                                   </ListItemButton>
                                              </ListItem>
                                           </List>)
                                     })
                                    }
                                </OptBox>
                            </Box>
                         </Grid>

                         

                         <Grid item xs={12}>
                          <TxtfieldCstm type={"number"} name={price}  label={"Product Price"}  placeholder={"Enter product price.."} fxn={(e)=>setPrice(e)} /> 
                         </Grid>
                        
                         <Grid item xs={12}>
                            <TxtfieldCstm type={"text"} label={"Company Name"} name={company} placeholder={"Enter product company.."} fxn={(e)=>setCompany(e)} />
                         </Grid>
                 
                         <Grid item xs={12}>
                             <TxtfieldCstm  type={"text"}   label="Product details"  placeholder="Enter product details.." fxn={(e)=>setAbout(e)}/>
                         </Grid>

                         <Grid item xs={12} >
                             <TxtfieldCstm  type={'file'} fxn={(e)=>setImg(e)} />
                         </Grid>
            
                         <Grid item xs={12}>
                             <Button1 type="submit" onClick={check} variant="contained" sx={{":hover":{color:"#352133"}}} fullWidth> Add Product </Button1>
                         </Grid>
                      </Grid>
                     </form>
                 </MainBox>
         </OuterBox>     
    )
}
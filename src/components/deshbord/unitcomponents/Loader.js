import React from 'react'
import '../../../App.css';
import { Box } from '@mui/material';

function Loader() {
  return (
     <div  className='main'>
     <Box sx={{zIndex:"200px",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className='loader'></div>
        <div className='loader'></div>
        <div className='loader'></div>
        <span className='lodingcolor'>loading...</span>
    </Box>  
     </div>
  )
}

export default Loader
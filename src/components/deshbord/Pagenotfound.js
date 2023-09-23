import React from 'react'
import { Alert, Button1 } from '../../styles/Showcategories'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Notfound() {
  const navigate=useNavigate()
  return (
    <>
        <Alert sx={{flexDirection:"column"}}>
          <Box>404</Box>
          <Typography>Page Not Found..</Typography>
          <Button1 
              sx={{color:"white",border:"3px solid #73566f","&:hover":{color:"#73566f",border:"3px solid #73566f"}}}
              onClick={()=>navigate('/')}>BACK to home</Button1>
        </Alert>
    </>
  )
}

export default Notfound
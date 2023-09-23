import React from 'react'
import { Alert } from '../../styles/Showcategories'

function Yetnoproduct(props) {
  return (
    <>
          <Alert sx={{fontSize:{lg:"50px",xs:'20px'},}}>
            {props.message? props.message: "Yet no product in this list.."}
          </Alert>

    </>
  )
}



export default Yetnoproduct
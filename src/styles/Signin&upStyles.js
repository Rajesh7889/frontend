import * as React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import { Box, Button, Typography } from '@mui/material';

const customTheme = () => createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
                color: '#352133',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {      
            '&:before, &:after': {
                borderBottom: '1px solid #706372',
              },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid #352133',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid #352133',
            },
          },
        },
      },
    },
  });


export  const TxtfieldCstm = (props)=> {
  const theme = useTheme();
  return (
      <ThemeProvider theme={customTheme(theme)}>
        <TextField 
          error={props.error?props.error:false} 
          autoComplete='none' 
          type={props.type} 
          name={props.name} 
          value={props.value&&props.value}  
          onChange={(e)=>props.type==="file"
                           ?props.fxn(e.target.files[0])
                           :props.fxn(e.target.value)}  
          label={props.label} 
          variant="filled" 
          placeholder={props.placeholder} 
          helperText={props.error?props.helperText:""} 
          fullWidth 
          required />
      </ThemeProvider>
  );
}

export const OuterBox=styled(Box)(({theme})=>({
    overflow:"auto",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    padding:0,
    [theme.breakpoints.up('sm')]:{padding:"50px"}
}))

export const MainBox=styled(Box)(({theme})=>({
    maxWidth:"100%", 
    padding:"20px",
     backgroundColor:"#d1adcc",
     [theme.breakpoints.up('sm')]:{maxWidth:"550px"}
}))

export const ErrorBox=styled(Box)(()=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border:"3px solid #73566f",
    padding:"5px"
}))

export const ErrorTxt=styled(Typography)(()=>({
    display:"flex",
    color:"#2d0202",
     alignItems:"center",
     justifyContent:"center",
     width:"80%",
     height:"40px",
     fontFamily:"sans-serif,cursive",
     fontWeight:600,
     fontSize:"17px",
     paddingLeft:"15px",
     lineHeight:1.2
}))


export const Heading=styled(Typography)(({theme})=>({
    fontWeight:800,
    textAlign:"center",
    fontFamily:"dancing script,sans-serif",
    fontSize:"30px",
    color:"#352133",
    [theme.breakpoints.up('sm')]:{fontSize:'35px'},
    [theme.breakpoints.up('md')]:{fontSize:'40px'}
}))


export const SubHeading=styled(Typography)(({theme})=>({
    fontSize:"15px",
    fontWeight:600,
    color:"#352133",
    [theme.breakpoints.up('sm')]:{fontSize:'17px'},
    [theme.breakpoints.up('md')]:{fontSize:'20px'}
}))

export const OptButton=styled(Button)(()=>({
    width:"100%",
    color:"white",
    backgroundColor:"#73566f",
    position:"relative",
    height:"55px",
    padding:0,
    textalign:"left",
    "&:hover":{border:"1px solid #73566f",
               color:"#352133"}
}))

export const OptBox=styled(Box)(()=>({
    zIndex:10,
    borderRadius:"5px",
    backgroundColor:"#73566f",
    overflow:"auto",
    color:"white",
    position:"absolute",
    top:50,
    height:"300px"
}))
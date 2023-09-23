import { createSlice } from '@reduxjs/toolkit'

export const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    signin:0
  },
  reducers: {
    signinn:(state)=>{
      state.signin=1
    },
    signout:(state)=>{
      state.signin=0
    },
  },
})
export const {signinn,signout} = signinSlice.actions

export default signinSlice.reducer
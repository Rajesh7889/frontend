import { configureStore } from '@reduxjs/toolkit'
import Signstatus from '../features/Signstatus'
export default configureStore({
  reducer: {
    signin:Signstatus
  },
})
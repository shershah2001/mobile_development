import {configureStore} from '@reduxjs/toolkit';
import UserDetails  from '../features/UserDetail'
export const store = configureStore({
  reducer:{
    app:UserDetails
  }
})
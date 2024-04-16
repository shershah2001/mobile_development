import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import userData from '../AllData';
export const UserDetails = createSlice({
  name: 'UserDetails',
  initialState: {
    currentIndex: 0,
    user: userData[0] || {},
    loading: false,
    error: null,
  },
  reducers: {
    addData(state, action) {
      state.currentIndex = userData.findIndex(items => items.id === action.payload);
      state.user = userData[state.currentIndex];
    },
    nextData(state) {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex < userData.length) {
        state.currentIndex = nextIndex;
        state.user = userData[state.currentIndex];
      }
    },
    prevData(state) {
      const prevIndex = state.currentIndex - 1;
      if (prevIndex >= 0) {
        state.currentIndex = prevIndex;
        state.user = userData[state.currentIndex];
      }
    },
  },
});

export default UserDetails.reducer;
console.log(UserDetails.actions);
export const {addData, nextData, prevData} = UserDetails.actions;

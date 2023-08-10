import { createReducer } from '@reduxjs/toolkit';
import {
  setUser
} from './actions';

type UserState = {
  profile: any
};

const initialState: UserState = {
  profile: null
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setUser, (state, action) => {
      state.profile = action.payload;
    })
});
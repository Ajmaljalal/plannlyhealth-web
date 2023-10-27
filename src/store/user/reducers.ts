import { createReducer } from '@reduxjs/toolkit';
import {
  setUser,
  setAssessmentPostponed
} from './actions';

type UserState = {
  profile: any
  isAssessmentPostponed: boolean

};

const initialState: UserState = {
  profile: null,
  isAssessmentPostponed: false
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setUser, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(setAssessmentPostponed, (state, action) => {
      state.isAssessmentPostponed = action.payload;
    })
});
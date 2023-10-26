import { createReducer } from '@reduxjs/toolkit';
import {
  setUser,
  setAssessmentProgress
} from './actions';

type UserState = {
  profile: any
  assessmentProgress: boolean

};

const initialState: UserState = {
  profile: null,
  assessmentProgress: false
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setUser, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(setAssessmentProgress, (state, action) => {
      state.assessmentProgress = action.payload;
    })
});
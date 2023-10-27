import { createReducer } from '@reduxjs/toolkit';
import {
  setUser,
  setAssessmentPostponed,
  setAsssessmentsTracker
} from './actions';

type UserState = {
  profile: any
  isAssessmentPostponed: boolean
  assessmentsTracker: any

};

const initialState: UserState = {
  profile: null,
  isAssessmentPostponed: false,
  assessmentsTracker: null
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setUser, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(setAssessmentPostponed, (state, action) => {
      state.isAssessmentPostponed = action.payload;
    })
    .addCase(setAsssessmentsTracker, (state, action) => {
      state.assessmentsTracker = action.payload;
    })
});
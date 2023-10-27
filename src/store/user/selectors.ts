import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectUserProfile = (state: RootState) => state.user.profile;
export const selectUserAssessmentProgress = (state: RootState) => state.user.isAssessmentPostponed;



export const userProfileSelector = createSelector(selectUserProfile, state => state);
export const userAssessmentProgressSelector = createSelector(selectUserAssessmentProgress, state => state);
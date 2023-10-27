import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectUserProfile = (state: RootState) => state.user.profile;
export const selectUserAssessmentProgress = (state: RootState) => state.user.isAssessmentPostponed;
export const selectAssessmentsTracker = (state: RootState) => state.user.assessmentsTracker;



export const userProfileSelector = createSelector(selectUserProfile, state => state);
export const userAssessmentProgressSelector = createSelector(selectUserAssessmentProgress, state => state);
export const assessmentsTrackerSelector = createSelector(selectAssessmentsTracker, state => state);
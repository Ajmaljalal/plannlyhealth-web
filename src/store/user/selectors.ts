import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectUserProfile = (state: RootState) => state.user.profile;



export const userProfileSelector = createSelector(selectUserProfile, state => state);
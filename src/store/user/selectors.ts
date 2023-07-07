import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectUser = (state: RootState) => state.users.currentUser;
export const selectCompanyUser = (state: RootState) => state.users.runAsUser;
export const selectCompanyUsers = (state: RootState) => state.users.companyUsers;
export const selectCompanyFilteredUsers = (state: RootState) => state.users.filteredCompanyUsers;

export const userSelector = createSelector(selectUser, state => state);
export const companyUserSelector = createSelector(selectCompanyUser, state => state);
export const companyUsersSelector = createSelector(selectCompanyUsers, state => state);
export const companyFilteredUsersSelector = createSelector(selectCompanyFilteredUsers, state => state);
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCompany = (state: RootState) => state.companies.currentCompany;
export const selectDetailsCompany = (state: RootState) => state.companies.runAsCompany;

export const companySelector = createSelector(selectCompany, state => state);
export const detailsCompanySelector = createSelector(selectDetailsCompany, state => state);
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectOnboardintStep = (state: RootState) => state.company.currentStep;
export const selectCompanyDetails = (state: RootState) => state.company.companyDetails;
export const selectBenefits = (state: RootState) => state.company.benefits;
export const selectIntegrations = (state: RootState) => state.company.integrations;
export const selectEmployees = (state: RootState) => state.company.employees;

export const selectPrimaryBenefits = (state: RootState) => state.company.benefits?.filter((benefit: any) => benefit.isPrimary);
export const selectVoluntaryBenefits = (state: RootState) => state.company.benefits?.filter((benefit: any) => !benefit.isPrimary);

export const selectCompanyPaymentMethod = (state: RootState) => state.company.companyPaymentMethod;
export const selectCompanyPlan = (state: RootState) => state.company.companyPlan;

export const selectCurrentyEmployee = (state: RootState) => state.company.currentEmployee;


export const currentStepSelector = createSelector(selectOnboardintStep, state => state);
export const companyDetailsSelector = createSelector(selectCompanyDetails, state => state);
export const benefitsSelector = createSelector(selectBenefits, state => state);
export const primaryBenefitsSelector = createSelector(selectPrimaryBenefits, state => state);
export const voluntaryBenefitsSelector = createSelector(selectVoluntaryBenefits, state => state);
export const integrationsSelector = createSelector(selectIntegrations, state => state);
export const employeesSelector = createSelector(selectEmployees, state => state);
export const companyPaymentMethodSelector = createSelector(selectCompanyPaymentMethod, state => state);
export const companyPlanSelector = createSelector(selectCompanyPlan, state => state);
export const currentEmployeeSelector = createSelector(selectCurrentyEmployee, state => state);

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectOnboardintStep = (state: RootState) => state.company_onboarding.currentStep;
export const selectCompanyDetails = (state: RootState) => state.company_onboarding.companyDetails;
export const selectBenefits = (state: RootState) => state.company_onboarding.benefits;
export const selectIntegrations = (state: RootState) => state.company_onboarding.integrations;
export const selectEmployees = (state: RootState) => state.company_onboarding.employees;

export const selectPrimaryBenefits = (state: RootState) => state.company_onboarding.benefits.filter((benefit: any) => benefit.isPrimary);
export const selectVoluntaryBenefits = (state: RootState) => state.company_onboarding.benefits.filter((benefit: any) => !benefit.isPrimary);

export const selectCompanyPaymentMethod = (state: RootState) => state.company_onboarding.companyPaymentMethod;
export const selectCompanyPlan = (state: RootState) => state.company_onboarding.companyPlan;


export const currentStepSelector = createSelector(selectOnboardintStep, state => state);
export const companyDetailsSelector = createSelector(selectCompanyDetails, state => state);
export const benefitsSelector = createSelector(selectBenefits, state => state);
export const primaryBenefitsSelector = createSelector(selectPrimaryBenefits, state => state);
export const voluntaryBenefitsSelector = createSelector(selectVoluntaryBenefits, state => state);
export const integrationsSelector = createSelector(selectIntegrations, state => state);
export const employeesSelector = createSelector(selectEmployees, state => state);
export const companyPaymentMethodSelector = createSelector(selectCompanyPaymentMethod, state => state);
export const companyPlanSelector = createSelector(selectCompanyPlan, state => state);

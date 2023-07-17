import { createReducer } from '@reduxjs/toolkit';
import {
  setCompanyDetails,
  setStep,
  setBenefits,
  setIntegration,
  removeIntegration,
  setEmployees,
  toggleBenefitActivation,
  updateBenefit,
  addIntegrations
} from './actions';

type CompanyOnboardingState = {
  currentStep: number;
  companyDetails: {};
  benefits: [];
  integrations: [];
  employees: [];
};

const initialState: CompanyOnboardingState = {
  currentStep: 1,
  companyDetails: {},
  benefits: [],
  integrations: [],
  employees: [],
};

export const companyOnboardingReducer = createReducer(initialState, builder => {
  builder
    .addCase(setStep, (state, action) => {
      state.currentStep = action.payload;
    })
    .addCase(setCompanyDetails, (state, action) => {
      state.companyDetails = action.payload;
    })
    .addCase(setBenefits, (state, action) => {
      state.benefits = action.payload;
    })
    .addCase(toggleBenefitActivation, (state, action) => {
      const updatedBenefits: any = state.benefits.map((benefit: any) => {
        if (benefit.title === action.payload.title) {
          benefit.isActive = action.payload.isActive;
        }
        return benefit;
      });
      state.benefits = updatedBenefits;
    })
    .addCase(setIntegration, (state, action) => {
      const updatedBenefits: any = state.benefits.map((benefit: any) => {
        if (benefit.title === action.payload.title) {
          benefit = action.payload;
        }
        return benefit;
      });
      state.benefits = updatedBenefits;
    })
    .addCase(removeIntegration, (state, action) => {
      const updatedBenefits: any = state.benefits.map((benefit: any) => {
        if (benefit.title === action.payload.title) {
          benefit.integration = null;
        }
        return benefit;
      });
      state.benefits = updatedBenefits;
    })
    .addCase(updateBenefit, (state, action) => {
      const updatedBenefits: any = state.benefits.map((benefit: any) => {
        if (benefit.title === action.payload.title) {
          benefit = action.payload;
        }
        return benefit;
      });
      state.benefits = updatedBenefits;
    })
    .addCase(setEmployees, (state, action) => {
      state.employees = action.payload;
    })
    .addCase(addIntegrations, (state, action) => {
      state.integrations = action.payload;
    }
    );
});
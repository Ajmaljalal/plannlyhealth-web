import { createAction } from "@reduxjs/toolkit"
export const setStep = createAction<any>('onboarding/setStep')
export const setCompanyDetails = createAction<any>('onboarding/setCompanyDetails')
export const setBenefits = createAction<any>('onboarding/setBenefits')
export const setIntegration = createAction<any>('onboarding/setIntegrations')
export const setEmployees = createAction<any>('onboarding/setEmployees')
export const toggleBenefitActivation = createAction<any>('onboarding/toggleBenefitActivation')
export const removeIntegration = createAction<any>('onboarding/removeIntegration')
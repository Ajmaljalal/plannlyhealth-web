import { createAction } from "@reduxjs/toolkit"
export const setUser = createAction<any>('user/setUser');
export const setAssessmentProgress = createAction<any>('user/setAssessmentProgress');
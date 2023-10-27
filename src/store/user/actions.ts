import { createAction } from "@reduxjs/toolkit"
export const setUser = createAction<any>('user/setUser');
export const setAssessmentPostponed = createAction<any>('user/setAssessmentProgress');
export const setAsssessmentsTracker = createAction<any>('user/setAsssessmentsTracker');
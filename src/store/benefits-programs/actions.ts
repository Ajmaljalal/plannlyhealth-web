import { createAction } from "@reduxjs/toolkit"
export const setPrograms = createAction<any>('programs/setPrograms')
export const setCurrentProgram = createAction<any>('programs/setCurrentProgram')
export const updatePrograms = createAction<any>('programs/updatePrograms')

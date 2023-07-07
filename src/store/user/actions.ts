import { createAction } from "@reduxjs/toolkit"

export const setUser = createAction<any>('user/setUser')
export const setRunAsUser = createAction<any>('user/setCompanyUser')
export const setCompanyUsers = createAction<any>('user/setCompanyUsers')
export const updateCompanyUsers = createAction<any>('user/updateCompanyUsers')
export const filterCompanyUsers = createAction<any>('user/filterCompanyUsers')
export const addNewCompanyUser = createAction<any>('user/addNewCompanyUser')
export const addNewCompanyUsers = createAction<any>('user/addNewCompanyUsers')
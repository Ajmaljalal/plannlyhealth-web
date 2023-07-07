import { createReducer } from '@reduxjs/toolkit';
import {
  setUser,
  setRunAsUser,
  setCompanyUsers,
  filterCompanyUsers,
  updateCompanyUsers,
  addNewCompanyUser,
  addNewCompanyUsers
} from './actions';

type UserState = {
  currentUser: any;
  runAsUser: any;
  companyUsers: any;
  filteredCompanyUsers: any;

};

const initialState: UserState = {
  currentUser: null,
  runAsUser: null,
  companyUsers: null,
  filteredCompanyUsers: null
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setUser, (state, action) => {
      state.currentUser = action.payload;
    })
    .addCase(setRunAsUser, (state, action) => {
      state.runAsUser = action.payload;
    })
    .addCase(setCompanyUsers, (state, action) => {
      state.companyUsers = action.payload;
    })
    .addCase(updateCompanyUsers, (state, action) => {
      const updatedCompanyUsers = state.companyUsers.map((companyUser: any) => {
        if (companyUser.id === action.payload.id) {
          return action.payload;
        }
        return companyUser;
      });
      state.companyUsers = updatedCompanyUsers;
    })
    .addCase(filterCompanyUsers, (state, action) => {
      state.filteredCompanyUsers = action.payload;
    })
    .addCase(addNewCompanyUser, (state, action) => {
      state.companyUsers = [action.payload, ...state.companyUsers];
    })
    .addCase(addNewCompanyUsers, (state, action) => {
      state.companyUsers = [...action.payload, ...state.companyUsers];
    })
});
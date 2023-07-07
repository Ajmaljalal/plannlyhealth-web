import { createReducer } from '@reduxjs/toolkit';
import {
  setCompany,
  setDetailsCompany
} from './actions';

type CompanyState = {
  currentCompany: any;
  runAsCompany: any;
};

const initialState: CompanyState = {
  currentCompany: null,
  runAsCompany: null
};

export const companyReducer = createReducer(initialState, builder => {
  builder
    .addCase(setCompany, (state, action) => {
      state.currentCompany = action.payload;
    })
    .addCase(setDetailsCompany, (state, action) => {
      state.runAsCompany = action.payload;
    })
});
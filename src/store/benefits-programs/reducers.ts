import { createReducer } from '@reduxjs/toolkit';
import {
  setCurrentProgram,
  setPrograms,
  updatePrograms,
} from './actions';
import { BenefitsProgram } from '@/lib/types/benefit-programs';

type programsState = {
  allPrograms: BenefitsProgram[] | null;
  currentProgram: BenefitsProgram | null;
};

const initialState: programsState = {
  allPrograms: null,
  currentProgram: null,
};

export const programsReducer = createReducer(initialState, builder => {
  builder
    .addCase(setPrograms, (state, action) => {
      state.allPrograms = action.payload;
    })
    .addCase(setCurrentProgram, (state, action) => {
      state.currentProgram = action.payload;
    })
    .addCase(updatePrograms, (state, action) => {
      // update all programs with onew from action.payload
      const newPrograms: BenefitsProgram [] = state.allPrograms?.map(program => {
        if (program.id === action.payload.id) {
          return action.payload;
        }
        return program;
      }) || [];
      state.allPrograms = newPrograms;
    });
    
});
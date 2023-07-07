import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectAllPrograms = (state: RootState) => state.benefitsPrograms.allPrograms;
export const selectActivePrograms = (state: RootState) => {
  const allPrograms = selectAllPrograms(state);
  return allPrograms?.filter(program => program.is_active);
};

export const selectInActivePrograms = (state: RootState) => {
  const allPrograms = selectAllPrograms(state);
  return allPrograms?.filter(program => !program.is_active);
};

export const selectCurrentProgram = (state: RootState) => state.benefitsPrograms.currentProgram;

export const programsSelector = createSelector(selectAllPrograms, state => state);
export const activeProgramsSelector = createSelector(selectActivePrograms, state => state);
export const inActiveProgramsSelector = createSelector(selectInActivePrograms, state => state);
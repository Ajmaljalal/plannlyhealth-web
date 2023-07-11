import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';
import { companyOnboardingReducer } from './company';


// Creates a store and includes all the slices as reducers.
export const store = configureStore({
  reducer: {
    company_onboarding: companyOnboardingReducer,
  },
  devTools: process.env.NODE_ENV === 'development' ? true : false,
});

// Infer the `RootState` and `AppDispatch` types from the store itself //
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch;

//configure Thunk
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();
// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
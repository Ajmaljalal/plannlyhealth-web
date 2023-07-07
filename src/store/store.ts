import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';
import { companyReducer } from './company';
import { userReducer } from './user';
import { programsReducer } from './benefits-programs';


// Creates a store and includes all the slices as reducers.
export const store = configureStore({
  reducer: {
    companies: companyReducer,
    users: userReducer,
    benefitsPrograms: programsReducer,
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
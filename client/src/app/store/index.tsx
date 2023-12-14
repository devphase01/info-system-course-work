import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '@entities/user';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

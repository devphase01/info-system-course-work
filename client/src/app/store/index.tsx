import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '@entities/user';
import { baseApi } from '@shared/config/base.api';

export const rootReducer = combineReducers({
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
});

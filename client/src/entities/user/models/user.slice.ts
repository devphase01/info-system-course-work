import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleType } from './user.interfaces';

interface IUserState {
  userId: string,
  email: string,
  role: RoleType | '',
  isAuth: boolean,
}

const initialState: IUserState = {
  userId: '',
  email: '',
  role: '',
  isAuth: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state: IUserState, { payload }: PayloadAction<{}>) => {
      state.userId = 'id';
      state.email = 'test@gmail.com';
      state.role = 'manager';
      state.isAuth = true;
    },
    logout: (state: IUserState) => {
      state.userId = '';
      state.email = '';
      state.role = '';
      state.isAuth = false;
    },
  }
});

export const userReducer = userSlice.reducer;
export const { setUser, logout } = userSlice.actions;
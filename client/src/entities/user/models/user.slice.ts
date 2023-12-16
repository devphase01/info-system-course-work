import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleType } from './user.interfaces';
import { ICredentials } from '../api/user.interfaces';

interface IUserState {
  userId: string,
  email: string,
  role: RoleType | '',
  isAuth: boolean,
}

const initialState: IUserState = {
  userId: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).userId : '',
  email: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).email : '',
  role: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).role : '',
  isAuth: localStorage.getItem('user') ? true : false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state: IUserState, { payload }: PayloadAction<ICredentials>) => {
      state.userId = payload.userId;
      state.email = payload.email;
      state.role = payload.role;
      state.isAuth = true;

      localStorage.setItem('user', JSON.stringify(payload))
    },
    logout: (state: IUserState) => {
      state.userId = '';
      state.email = '';
      state.role = '';
      state.isAuth = false;

      localStorage.removeItem('user')
    },
  }
});

export const userReducer = userSlice.reducer;
export const { setUser, logout } = userSlice.actions;
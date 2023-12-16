import { baseApi } from "@shared/config/base.api";
import { ICreateUser, ICredentials, ILogin } from "./user.interfaces";
import { logout, setUser } from "../models";

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getUserRequests: build.query<void, string>({
      query: userId => ({
        url: `/users/${userId}/requests`,
        method: 'GET'
      }),
    }),
    login: build.mutation<ICredentials, ILogin>({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const credentials = (await queryFulfilled).data as unknown as ICredentials;
      
          dispatch(setUser(credentials))
        } catch (error) {
          dispatch(logout());
        }
      }
    }),
    register: build.mutation<ICredentials, ICreateUser>({
      query: body => ({
        url: '/auth/register',
        method: 'POST',
        body
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const credentials = (await queryFulfilled).data as unknown as ICredentials;
      
          dispatch(setUser(credentials))
        } catch (error) {
          dispatch(logout());
        }
      }
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserRequestsQuery } = userApi;

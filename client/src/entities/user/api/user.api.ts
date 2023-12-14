import { baseApi } from "@shared/config/base.api";

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: () => ({
        url: '/auth/login',
        method: 'POST'
      }),
    }),
    register: build.mutation({
      query: () => ({
        url: '',
        method: 'POST'
      }),
    }),
  }),
});
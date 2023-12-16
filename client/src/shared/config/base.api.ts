import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from './constants.config';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_ENDPOINT,
    // prepareHeaders: (headers, { getState }) => {},
  }),
  endpoints: () => ({}),
});

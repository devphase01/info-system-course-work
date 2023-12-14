import { baseApi } from "@shared/config/base.api";

const strategyApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createStrategy: build.mutation({
      query: body => ({
        url: '/strategies',
        method: 'POST',
        body,
      }),
    })
  }),
});

export const { useCreateStrategyMutation } = strategyApi;

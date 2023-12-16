import { baseApi } from "@shared/config/base.api";
import { ICreateRequest, IRequest, IUpdateRequest } from "./request.interfaces";

export const requestApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getRequests: build.query<IRequest[], void>({
      query: () => ({
        url: '/requests',
        method: 'GET'
      }),
    }),
    createRequest: build.mutation<void, ICreateRequest>({
      query: body => ({
        url: '/requests',
        method: 'POST',
        body,
      }),
    }),
    updateRequest: build.mutation<void, IUpdateRequest>({
      query: ({ requestId, status }) => ({
        url: `/requests/${requestId}`,
        method: 'PATCH',
        body: {
          status,
        }
      })
    }),
  }),
});

export const { useGetRequestsQuery, useCreateRequestMutation, useUpdateRequestMutation } = requestApi;

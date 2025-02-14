import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nextjsblogs-blue.vercel.app/api',
    credentials: 'include',
  }),
  tagTypes: ['products', 'messages'],
  endpoints: () => ({}),
});
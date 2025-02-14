import { baseApi } from "../api/baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    CreateProducts: builder.mutation({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['products'],
    })
  }),
});

export const { useGetAllProductsQuery, useCreateProductsMutation } = productApi;
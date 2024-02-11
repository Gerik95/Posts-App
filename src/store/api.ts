import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getData: builder.query({
            query: (): string => '/posts',
        }),
        getPost: builder.query({
            query: (id: string): string => `/posts/${id}`,
        }),
    }),
});

export const {useGetDataQuery, useGetPostQuery} = api;
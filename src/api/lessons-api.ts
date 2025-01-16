import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IGetChaptersListRequest, IGetChaptersListResponse } from './types/chapter-types';


export const lessonsApi = createApi({
    reducerPath: 'lessonsApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Lessons'],
    endpoints: (builder) => ({
        // getLessons: builder.query<IGetChaptersListResponse, IGetChaptersListRequest>({
        //     query: ({ lang }) => ({
        //         url: `/lessons/${id}/${courseId}`,
        //         method: 'GET',
        //         // params: { page: data.page, count: data.count },
        //         headers: { "Accept-language": lang }
        //     }),
        // }),
    }),
});

export const {
    // useLazyGetChaptersQuery,
} = lessonsApi;

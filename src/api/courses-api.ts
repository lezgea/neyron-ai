import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { ICoursesRequest, ICoursesResponse } from './types/course-types';


export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Courses'],
    endpoints: (builder) => ({
        getCourses: builder.query<ICoursesResponse, ICoursesRequest>({
            query: ({ lang }) => ({
                url: `/courses/languages`,
                method: 'GET',
                // params: { page: data.page, count: data.count },
                headers: { "Accept-language": lang }
            }),
        }),
        getCoursesInfo: builder.query<ICoursesResponse, ICoursesRequest>({
            query: ({ lang }) => ({
                url: `/courses/languages`,
                method: 'GET',
                // params: { page: data.page, count: data.count },
                headers: { "Accept-language": lang }
            }),
        }),

    }),
});

export const {
    useLazyGetCoursesQuery,
} = coursesApi;

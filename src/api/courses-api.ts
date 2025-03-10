import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { ICourseInfoRequest, ICourseInfoResponse, ICoursesRequest, ICoursesResponse } from './types/course-types';


export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Courses'],
    endpoints: (builder) => ({
        getCourses: builder.query<ICoursesResponse, ICoursesRequest>({
            query: ({ lang, dto }) => ({
                url: `/courses/languages`,
                method: 'GET',
                params: dto,
                headers: { "Accept-language": lang }
            }),
        }),
        getCoursesInfo: builder.query<ICourseInfoResponse, ICourseInfoRequest>({
            query: ({ lang, id }) => ({
                url: `/courses/${id}/info`,
                method: 'GET',
                headers: { "Accept-language": lang }
            }),
        }),

    }),
});

export const {
    useLazyGetCoursesQuery,
    useLazyGetCoursesInfoQuery,
} = coursesApi;

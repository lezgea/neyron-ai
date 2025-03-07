import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IGetLessonInfoRequest, IGetLessonInfoResponse, IGetLessonsListRequest, IGetLessonsListResponse } from './types/lesson-types';


export const lessonsApi = createApi({
    reducerPath: 'lessonsApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Lessons', 'LessonInfo'],
    endpoints: (builder) => ({
        getLessons: builder.query<IGetLessonsListResponse, IGetLessonsListRequest>({
            query: ({ chapterId, lang, dto }) => ({
                url: `/lessons/chapters/${chapterId}`,
                method: 'GET',
                params: { dto: dto },
                headers: { "Accept-language": lang }
            }),
        }),
        getLessonInfo: builder.query<IGetLessonInfoResponse, IGetLessonInfoRequest>({
            query: ({ id, lang }) => ({
                url: `/lessons/${id}/info`,
                method: 'GET',
                headers: { "Accept-language": lang || "en" }
            }),
            providesTags: ['LessonInfo'],
        }),
    }),
});

export const {
    useLazyGetLessonsQuery,
    useLazyGetLessonInfoQuery,
} = lessonsApi;

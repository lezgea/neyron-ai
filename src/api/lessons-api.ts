import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IGetLessonsListRequest, IGetLessonsListResponse } from './types/lesson-types';


export const lessonsApi = createApi({
    reducerPath: 'lessonsApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Lessons'],
    endpoints: (builder) => ({
        getLessons: builder.query<IGetLessonsListResponse, IGetLessonsListRequest>({
            query: ({ chapterId, lang, dto }) => ({
                url: `/lessons/chapters/${chapterId}`,
                method: 'GET',
                params: { dto: dto },
                headers: { "Accept-language": lang }
            }),
        }),
    }),
});

export const {
    useLazyGetLessonsQuery,
} = lessonsApi;

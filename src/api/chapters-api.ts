import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IGetChaptersListRequest, IGetChaptersListResponse } from './types/chapter-types';


export const chaptersApi = createApi({
    reducerPath: 'chaptersApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Chapters'],
    endpoints: (builder) => ({
        getChapters: builder.query<IGetChaptersListResponse, IGetChaptersListRequest>({
            query: ({ lang, courseId, dto }) => ({
                url: `/chapters/courses/${courseId}`,
                method: 'GET',
                params: { dto: dto },
                headers: { "Accept-language": lang }
            }),
        }),
    }),
});

export const {
    useLazyGetChaptersQuery,
} = chaptersApi;

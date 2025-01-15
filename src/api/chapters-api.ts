import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IGetChaptersListRequest, IGetChaptersListResponse } from './types/chapter-types';


export const chaptersApi = createApi({
    reducerPath: 'chaptersApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Chapters'],
    endpoints: (builder) => ({
        getChapters: builder.query<IGetChaptersListResponse, IGetChaptersListRequest>({
            query: ({ lang, courseId }) => ({
                url: `/chapters/courses/${courseId}`,
                method: 'GET',
                // params: { page: data.page, count: data.count },
                headers: { "Accept-language": lang }
            }),
        }),
    }),
});

export const {
    useLazyGetChaptersQuery,
} = chaptersApi;

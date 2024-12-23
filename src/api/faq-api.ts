import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IGetFaqListRequest, IGetFaqListResponse } from './types/faq-types';


export const faqApi = createApi({
    reducerPath: 'faqApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getFaqs: builder.query<IGetFaqListResponse, IGetFaqListRequest>({
            query: ({ langId, isOnMainPage }) => ({
                url: `/faqs/languages/${langId}`,
                method: 'GET',
                params: { languageId: langId, isOnMainPage: isOnMainPage }
            }),
            providesTags: ['User'],
        }),
    }),
});

export const {
    useGetFaqsQuery,
} = faqApi;

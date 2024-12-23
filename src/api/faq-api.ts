import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IUser } from './types/user-types';
import { IGetFaqListRequest } from './types/faq-types';


export const faqApi = createApi({
    reducerPath: 'faqApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getFaqs: builder.query<IUser, IGetFaqListRequest>({
            query: ({ langId, isOnMainPage }) => ({
                url: '/faqs/languages/${langId}',
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

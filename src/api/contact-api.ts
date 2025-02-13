import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IContactDetailsSendRequest } from './types/contact-types';
import { IMessageResponse } from './types/course-types';


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        sendContactDetails: builder.mutation<IMessageResponse, IContactDetailsSendRequest>({
            query: (credentials) => ({
                url: '/contact-us-requests',
                method: 'POST',
                data: credentials,
            }),
        }),
    }),
});

export const {
    useSendContactDetailsMutation,
} = contactsApi;

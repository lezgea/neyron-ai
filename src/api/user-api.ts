import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { IActivateUserResponse, IChangeRequest, IForgetRequest, ILoginRequest, IRegisterRequest, IResetPasswordRequest, IUser, IUserUpdateRequest, LoginResponse, RegisterResponse } from './types/user-types';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        registerUser: builder.mutation<RegisterResponse, IRegisterRequest>({
            query: (credentials) => ({
                url: '/users/register',
                method: 'POST',
                data: credentials,
            }),
        }),
        loginUser: builder.mutation<LoginResponse, ILoginRequest>({
            query: (credentials) => ({
                url: '/users/login',
                method: 'POST',
                data: credentials,
            }),
        }),
        getUser: builder.query<IUser, void>({
            query: () => ({
                url: '/users/profile',
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
        updateUser: builder.mutation<IUser, { id: number | string; data: IUserUpdateRequest }>({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                data,
            }),
            invalidatesTags: ['User'],
        }),
        forgotPassword: builder.mutation<null, IForgetRequest>({
            query: (credentials) => ({
                url: `/users/forgot-password?email=${encodeURIComponent(credentials.email)}`,
                method: 'POST',
                params: credentials,
            }),
        }),
        resetPassword: builder.mutation<null, IResetPasswordRequest>({
            query: (credentials) => ({
                url: `/users/reset-password?token=${encodeURIComponent(credentials.token)}`,
                method: 'POST',
                data: credentials,
            }),
        }),
        changePassword: builder.mutation<null, IChangeRequest>({
            query: (credentials) => ({
                url: `/users/change-password?token=${encodeURIComponent(credentials.token)}`,
                method: 'POST',
                data: { password: credentials.password },
            }),
        }),
        activateUser: builder.mutation<IActivateUserResponse, { token: string, otp: number | undefined }>({
            query: ({ token, otp }) => ({
                url: `/users/activate`,
                method: 'POST',
                data: { confirmationToken: token, otp: otp },
            }),
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useActivateUserMutation,
    useGetUserQuery,
    useUpdateUserMutation,
    useForgotPasswordMutation,
    useChangePasswordMutation,
    useResetPasswordMutation,
} = userApi;

import axios, { AxiosRequestConfig, AxiosError, AxiosProgressEvent } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

interface AxiosBaseQueryArgs {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: any;
    headers?: any,
    params?: Record<string, any>;
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void; // Add support for upload progress
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL || 'https://api.neyron.ai/v1';

const axiosBaseQuery: BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> = async (
    { url, method, data, params, headers, onUploadProgress },
    api,
    extraOptions
) => {
    try {
        const token = Cookies.get('neyroken');
        const result = await axios({
            url: BASE_URL + url,
            method,
            data: method !== 'GET' ? data : undefined,
            params: method === 'GET' ? params : undefined,
            maxRedirects: 0,
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
                'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json',
                ...headers,
            },
            onUploadProgress, // Handle progress tracking here
        });

        return { data: result.data };
    } catch (error) {
        const axiosError = error as AxiosError;

        return {
            error: {
                status: axiosError.response?.status,
                data: axiosError.response?.data || axiosError.message,
            },
        };
    }
};

export default axiosBaseQuery;

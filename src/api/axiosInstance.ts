import axios, { AxiosInstance } from 'axios';
import qs from 'qs';

import { getAccessToken } from 'src/utils/cookie';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.neyron.ai';

const authToken = getAccessToken();

export const axiosOpen: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/v1`,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en',
  },
});

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { indices: false });
  },
});

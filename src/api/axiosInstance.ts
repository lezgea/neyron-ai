import axios, { AxiosInstance } from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.neyron.ai';

export const axiosOpen: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

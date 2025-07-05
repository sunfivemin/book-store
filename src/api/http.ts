// src/api/http.ts
import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from 'axios';
import { getToken, removeToken } from '@/utils/token';

const isDev = import.meta.env.DEV;

const BASE_URL = isDev
  ? 'http://localhost:9999'
  : 'https://book-shop-pf1j.onrender.com';

const DEFAULT_TIMEOUT = 30000;

export const createClient = (config: AxiosRequestConfig = {}) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = token;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        removeToken();
        window.location.href = '/login';
        return;
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();

type Method = 'get' | 'post' | 'put' | 'delete';

export const requestHandler = async <Payload = unknown, Result = unknown>(
  method: Method,
  url: string,
  payload?: Payload
): Promise<Result> => {
  const config = {
    get: () => httpClient.get<Result>(url),
    post: () => httpClient.post<Result>(url, payload),
    put: () => httpClient.put<Result>(url, payload),
    delete: () => httpClient.delete<Result>(url),
  };

  const response = await config[method]();
  return response.data as Result; // 타입 보장
};

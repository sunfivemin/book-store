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

  // ✅ 매 요청마다 토큰 동적 주입
  axiosInstance.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = token;
    }
    return config;
  });

  // ✅ 에러 응답 처리
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        removeToken();
        window.location.href = '/login';
        return;
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient(); // ✅ 필수 export

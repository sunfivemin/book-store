import type { SignupForm } from '@/models/user.model';
import { httpClient } from './http';

export const signup = async (userData: SignupForm): Promise<SignupForm> => {
  const response = await httpClient.post('/users/join', userData);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await httpClient.post('/users/login', data);
  return response.data;
};

export const resetRequest = async (data: { email: string }) => {
  const response = await httpClient.post('/users/reset', data);
  return response.data;
};

export const resetPassword = async (data: { email: string; password: string }) => {
  const response = await httpClient.put('/users/reset', data);
  return response.data;
};

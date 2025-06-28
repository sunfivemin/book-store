import type { SignupForm } from '@/models/user.model';
import { httpClient } from './http';

export const signup = async (userData: SignupForm): Promise<SignupForm> => {
  const response = await httpClient.post('/users/join', userData);
  return response.data;
};

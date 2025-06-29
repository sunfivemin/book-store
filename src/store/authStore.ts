import { create } from 'zustand';
import { getToken, setToken, removeToken } from '@/utils/token';

interface StoreState {
  isLoggedIn: boolean;
  token: string | null;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: !!getToken(),
  token: getToken(),
  storeLogin: (token: string) => {
    set({ isLoggedIn: true, token });
    setToken(token);
  },
  storeLogout: () => {
    set({ isLoggedIn: false, token: null });
    removeToken();
  },
})); 
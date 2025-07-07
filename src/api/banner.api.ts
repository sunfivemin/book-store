import type { Banner } from '@/models/banner.model';
import { requestHandler } from './http';

export const fetchBanners = async (): Promise<Banner[]> => {
  return await requestHandler<undefined, Banner[]>('get', '/banners');
};

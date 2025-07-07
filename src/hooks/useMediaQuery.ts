import { useEffect, useState } from 'react';
import { mediaQuery } from '@/styles/mediaQuery';

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(mediaQuery.mobile).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobileQuery = window.matchMedia(mediaQuery.mobile);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // 초기값
    setIsMobile(isMobileQuery.matches);
    isMobileQuery.addEventListener('change', handler);

    return () => {
      isMobileQuery.removeEventListener('change', handler);
    };
  }, []);

  return { isMobile };
};

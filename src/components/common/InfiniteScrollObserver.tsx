// src/components/common/InfiniteScrollObserver.tsx
import { useRef, useEffect } from 'react';

interface Props {
  onIntersect: () => void;
  disabled?: boolean;
}

const InfiniteScrollObserver = ({ onIntersect, disabled }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || disabled) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      {
        threshold: 1.0,
        rootMargin: '100px',
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, disabled]);

  return <div ref={ref} style={{ height: '1px' }} />;
};

export default InfiniteScrollObserver;

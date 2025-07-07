import { useEffect, useState, useRef } from 'react';
import type { Banner as IBanner } from '@/models/banner.model';
import BannerItem from './BannerItem';
import {
  bannerSliderWrapper,
  bannerSliderTrack,
  bannerSliderControls,
  bannerSliderDots,
  dot,
  navButton,
} from './banner.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannersProps {
  banners: IBanner[];
}

function Banners({ banners }: BannersProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % banners.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + banners.length) % banners.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % banners.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [banners.length]);

  return (
    <div className={bannerSliderWrapper}>
      <div
        className={bannerSliderTrack}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${banners.length * 100}%`,
        }}
      >
        {banners.map((banner, index) => (
          <BannerItem
            key={banner.id}
            banner={banner}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>

      <div className={bannerSliderControls}>
        <button onClick={goToPrev} className={navButton}>
          <ChevronLeft size={20} />
        </button>
        <button onClick={goToNext} className={navButton}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={bannerSliderDots}>
        {banners.map((_, i) => (
          <span
            key={i}
            className={`${dot} ${currentIndex === i ? 'active' : ''}`}
            onClick={() => goToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banners;

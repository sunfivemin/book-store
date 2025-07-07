// src/components/common/Banners/BannerItem.tsx
import type { Banner } from '@/models/banner.model';
import {
  bannerWrapper,
  bannerImage,
  bannerOverlayLeft,
  bannerText,
  bannerTitle,
  bannerDescription,
} from './banner.css';

interface BannerItemProps {
  banner: Banner;
  index: number;
  currentIndex: number;
}
function BannerItem({ banner }: BannerItemProps) {
  return (
    <div className={bannerWrapper}>
      <a href={banner.url} target={banner.target} rel="noopener noreferrer">
        <div className={bannerOverlayLeft} />
        <img src={banner.image} alt={banner.title} className={bannerImage} />
        <div className={bannerText}>
          <div className={bannerTitle}>{banner.title}</div>
          <div className={bannerDescription}>{banner.description}</div>
        </div>
      </a>
    </div>
  );
}

export default BannerItem;

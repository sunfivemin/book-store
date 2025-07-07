// src/styles/swiper.css.ts
import { globalStyle } from '@vanilla-extract/css';

// pagination dot
globalStyle('.swiper-pagination-bullet', {
  width: '8px',
  height: '8px',
  backgroundColor: '#d1d5db', // gray-300
  opacity: 1,
  margin: '0 6px',
  borderRadius: '9999px',
  transition: 'background-color 0.3s ease',
});

globalStyle('.swiper-pagination-bullet-active', {
  backgroundColor: '#3b82f6', // blue-500
});

// nav buttons
globalStyle('.swiper-button-prev, .swiper-button-next', {
  top: '50%',
  transform: 'translateY(-50%)',
  width: '40px',
  height: '40px',
  backgroundColor: '#fff',
  color: '#3b82f6',
  borderRadius: '50%',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  zIndex: 10,
});

globalStyle('.swiper-button-prev', {
  left: '-20px', // 바깥으로 빼기
});

globalStyle('.swiper-button-next', {
  right: '-20px',
});

globalStyle('.swiper-button-prev::after, .swiper-button-next::after', {
  fontSize: '16px',
});

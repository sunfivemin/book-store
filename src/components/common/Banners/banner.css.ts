// src/components/common/Banners/banner.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const bannerSliderWrapper = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '1200px',
  height: '400px',
  margin: '0 auto',
  borderRadius: '0.5rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

export const bannerSliderTrack = style({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  width: '100%',
});

export const bannerSliderControls = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transform: 'translateY(-50%)',
  padding: '0 1rem',
  zIndex: 4,
});

export const bannerSliderDots = style({
  position: 'absolute',
  bottom: '1rem',
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
  zIndex: 4,
});

export const dot = style({
  width: '10px',
  height: '10px',
  borderRadius: '9999px',
  backgroundColor: '#e5e7eb',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
  selectors: {
    '&.active': {
      backgroundColor: '#3b82f6',
    },
  },
});

export const navButton = style({
  width: '36px',
  height: '36px',
  borderRadius: '9999px',
  backgroundColor: 'white',
  color: '#374151',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: '#f3f4f6',
  },
});

export const bannerWrapper = style({
  position: 'relative',
  flex: '0 0 100%',
  width: '100%',
  height: '400px',
});

export const bannerImage = style({
  width: '1200px',
  maxWidth: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  zIndex: 1,
});

export const bannerOverlayLeft = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '30%',
  height: '100%',
  background:
    'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0))',
  zIndex: 2,
});

export const bannerText = style({
  position: 'absolute',
  top: '50%',
  left: '7rem',
  transform: 'translateY(-50%)',
  zIndex: 3,
});

export const bannerTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: vars.color.secondary,
  marginBottom: '0.25rem',
});

export const bannerDescription = style({
  fontSize: '1rem',
  color: vars.color.text.strong,
});

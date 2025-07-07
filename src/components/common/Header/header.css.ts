// src/components/common/Header/header.css.ts
import { style } from '@vanilla-extract/css';
import { vars, themeContract } from '@/styles/theme.css';

export const logoStyle = style({
  width: '165px',
  height: 'auto',
});

export const navItemStyle = style({
  fontWeight: 700,
  fontSize: vars.fontSize.lg,
  color: themeContract.color.text.default,
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  selectors: {
    '&:hover': {
      color: vars.color.primary,
    },
  },
});

export const headerContainer = style({
  margin: '0 auto',
  padding: vars.spacing.lg,
  maxWidth: vars.layout.width.large,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: vars.radius.lg,
  backgroundColor: themeContract.color.background,
  transition: 'all 0.3s ease-in-out',
});

export const scrolledHeaderContainer = style({
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
});

export const menuButtonStyle = style({
  position: 'absolute',
  top: '14px',
  left: '12px',
  zIndex: 1100,
  backgroundColor: '#fff',
  border: 'none',
  fontSize: '1.5rem',
  display: 'flex',
  '@media': {
    'screen and (min-width: 769px)': {
      display: 'none',
    },
  },
});

export const dropdownButtonStyle = style({
  position: 'absolute',
  top: '14px',
  right: '12px',
  zIndex: 1100,
});

export const mobileMenuStyle = style({
  position: 'fixed',
  top: 0,
  left: '-100%',
  width: '70vw',
  height: '100vh',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: vars.spacing.lg,
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  transition: 'left 0.3s ease-in-out',
});

export const mobileMenuOpenStyle = style({
  left: 0,
});

export const overlayStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 999,
});

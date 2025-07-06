// src/components/common/Header/header.css.ts
import { style } from '@vanilla-extract/css';
import { themeContract, vars } from '@/styles/theme.css';

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

export const authBoxStyle = style({
  display: 'flex',
  gap: vars.spacing.lg,
  alignItems: 'center',
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

  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: vars.layout.width.medium,
    },
    'screen and (min-width: 1024px)': {
      maxWidth: vars.layout.width.large,
    },
  },

  // selectors: {
  //   'body.scrolled &': {
  //     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
  //     borderRadius: vars.radius.lg,
  //   },
  // },
});
export const scrolledHeaderContainer = style({
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
});

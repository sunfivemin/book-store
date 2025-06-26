import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const logoStyle = style({
  width: '165px',
  height: 'auto',
});

export const navItemStyle = style({
  fontWeight: 700,
  fontSize: vars.fontSize.lg,
  color: vars.color.text.default,
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
  backgroundColor: vars.color.background, // 배경 흰색
  transition: 'all 0.3s ease-in-out',

  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: vars.layout.width.medium,
    },
    'screen and (min-width: 1024px)': {
      maxWidth: vars.layout.width.large,
    },
  },
  selectors: {
    'body.scrolled &': {
      padding: vars.spacing.md,
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
      borderRadius: vars.radius.lg,
    },
  },
});

export const scrolledStyle = style({
  height: '3.5rem',
  padding: '0 1rem',
  marginTop: '0.5rem', // ⬅️ 화면 위에서 살짝 띄우기
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)', // ⬅️ 더 넓고 옅은 그림자
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background,
  transition: 'all 0.3s ease-in-out',
});

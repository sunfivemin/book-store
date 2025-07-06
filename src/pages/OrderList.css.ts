// src/pages/OrderList.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  overflowX: 'auto',
  marginTop: '1.5rem',
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: vars.fontSize.sm,
});

export const th = style({
  fontWeight: vars.fontWeight.medium,
  borderBottom: `1px solid ${vars.color.border.default}`,
  padding: vars.spacing.sm,
  backgroundColor: vars.color.background,
  textAlign: 'left',
});

export const td = style({
  padding: vars.spacing.sm,
  borderBottom: `1px solid ${vars.color.surfaceHover}`,
});

export const detailBox = style({
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  backgroundColor: '#fff',
  borderRadius: vars.radius.md,
  boxShadow: `0 0 0 1px ${vars.color.border.default}`,
});

export const detailItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: vars.fontSize.sm,
  color: vars.color.text.default,
});

export const bookTitle = style({
  fontWeight: vars.fontWeight.bold,
});

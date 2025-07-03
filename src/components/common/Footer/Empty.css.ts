// src/components/common/Empty.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const emptyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '120px 0',
  gap: '12px',
  width: '100%',
});

export const iconBox = style({
  fontSize: '4rem',
  color: vars.color.secondary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.weak,
  textDecoration: 'underline',
});

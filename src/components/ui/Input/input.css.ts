import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const inputLabel = style({
  fontWeight: 600,
  fontFamily: vars.font.family,
  color: vars.color.default,
});

export const inputError = style({
  color: vars.color.secondary,
  fontSize: vars.fontSize.sm,
  marginTop: vars.spacing.sm,
  fontWeight: 500,
});

export const input = style({});

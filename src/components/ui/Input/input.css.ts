import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const inputLabel = style({
  fontWeight: vars.fontWeight.medium,
  fontFamily: vars.font.family,
  color: vars.color.text.default,
});

export const inputError = style({
  color: vars.color.error,
  fontSize: vars.fontSize.sm,
  marginTop: vars.spacing.sm,
  fontWeight: vars.fontWeight.medium,
});

export const input = style({});

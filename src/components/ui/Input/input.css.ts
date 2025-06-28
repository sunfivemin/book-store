import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: vars.spacing.sm,
});

export const inputLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  fontFamily: vars.font.family,
  color: vars.color.text.strong,
  paddingLeft: vars.spacing.sm,
});

export const inputError = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.error,
  paddingLeft: vars.spacing.sm,
});

export const input = style({
  width: '100%',
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.family,
  fontSize: vars.fontSize.md,
  backgroundColor: vars.color.background,
  color: vars.color.text.default,
  transition: 'border 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
});

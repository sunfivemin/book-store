// src/components/cart/CartSummary.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const summaryBox = style({
  border: `1px solid ${vars.color.border.default}`,
  padding: vars.spacing.md,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.background,
  fontSize: vars.fontSize.sm,
  width: '100%',
  maxWidth: '240px',
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: 'bold',
  marginBottom: vars.spacing.sm,
});

export const row = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
});

export const label = style({
  color: vars.color.text.weak,
});

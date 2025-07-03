import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '16px',
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.background,
  marginBottom: '10px',
});

export const info = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'flex-start',
});

export const summary = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.weak,
});

export const price = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.default,
  marginTop: '4px',
});

export const quantity = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.default,
  marginTop: '2px',
});

export const removeButton = style({
  backgroundColor: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border.default}`,
  color: vars.color.text.default,
  fontSize: vars.fontSize.sm,
  borderRadius: vars.radius.sm,
  padding: '6px 12px',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.must,
      color: 'white',
    },
  },
});

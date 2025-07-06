import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: vars.fontSize.sm,
  color: vars.color.text.default,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
});

export const heart = style({
  color: vars.color.text.weak,
  // transition: vars.transition.fast,
  selectors: {
    '&:hover': {
      color: vars.color.must,
    },
  },
});

export const heartActive = style({
  color: vars.color.must,
});

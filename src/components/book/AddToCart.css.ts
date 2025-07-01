// src/components/book/AddToCart.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginTop: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
});

export const quantityInput = style({
  width: '64px',
  height: '40px',
  textAlign: 'center',
  fontSize: vars.fontSize.md,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: '6px',
  padding: '0 8px',
  backgroundColor: vars.color.background,
  color: vars.color.text.default,
});

export const controlButton = style({
  width: '40px',
  height: '40px',
  fontSize: '20px',
  fontWeight: 'bold',
  borderRadius: '6px',
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background,
  color: vars.color.text.default,
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.doneBg,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});
export const addedMessageWrapper = style({
  width: '100%',
  marginTop: '0.5rem',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border.default}`,
  color: vars.color.text.default,
  fontSize: vars.fontSize.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  animation: 'fadeIn 0.3s ease-in-out',
});

export const addedText = style({
  margin: 0,
  fontWeight: 500,
});

export const linkToCart = style({
  fontSize: vars.fontSize.sm,
  textDecoration: 'underline',
  color: vars.color.primary,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: vars.color.must,
    },
  },
});

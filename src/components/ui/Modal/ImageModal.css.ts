// src/components/ui/Modal/ImageModal.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const modal = style({
  position: 'relative',
  backgroundColor: vars.color.background,
  borderRadius: vars.radius.md,
  padding: '1rem',
  maxWidth: '90vw',
  maxHeight: '90vh',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const image = style({
  maxWidth: '100%',
  maxHeight: '80vh',
  borderRadius: vars.radius.sm,
  objectFit: 'contain',
});

export const close = style({
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: vars.color.text.default,
});

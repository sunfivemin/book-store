// src/components/ui/Modal/modal.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const modal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  padding: vars.spacing.lg,
  borderRadius: '12px',
  minWidth: '300px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, color 0.3s ease',
});

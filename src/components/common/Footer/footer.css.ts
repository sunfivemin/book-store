import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const footerStyle = style({
  width: '100%',
  padding: `${vars.spacing.lg} 0`,
  backgroundColor: vars.color.background,
  borderTop: `1px solid ${vars.color.border.default}`,
});

export const footerContainer = style({
  maxWidth: '1020px',
  margin: '0 auto',
  padding: `0 ${vars.spacing.lg}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const logoBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const logoStyle = style({
  width: '120px',
  height: 'auto',
});

export const copyrightStyle = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.weak,
});

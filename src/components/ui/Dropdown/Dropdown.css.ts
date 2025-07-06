import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const dropdown = style({
  position: 'relative',
  display: 'inline-block',
});

export const toggle = style({
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: '0.375rem',
  backgroundColor: '#fff',
  cursor: 'pointer',
});
export const menu = style({
  position: 'absolute',
  top: 'calc(100% + 0.25rem)',
  right: 0,
  minWidth: '140px', // ✅ 최소 너비 지정
  backgroundColor: '#fff',
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: '0.375rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  zIndex: 10,
  padding: '0.25rem 0',
});

export const item = style({
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  lineHeight: 1.4,
  whiteSpace: 'nowrap', // ✅ 줄바꿈 방지
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.surfaceHover,
    },
  },
});
export const active = style({
  fontWeight: 600,
  color: vars.color.primary,
});
export const checkIcon = style({
  marginLeft: '0.5rem',
  color: vars.color.primary,
  fontWeight: 'bold',
});

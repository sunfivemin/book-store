import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const tabList = style({
  display: 'flex',
  gap: '1.5rem',
  borderBottom: `1px solid ${vars.color.border.default}`,
  margin: '2.5rem 0 2rem',
});

export const tabTrigger = style({
  position: 'relative',
  fontSize: vars.fontSize.md,
  paddingBottom: '0.5rem',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  color: vars.color.text.light,
  transition: 'color 0.2s ease',
  selectors: {
    '&:hover': {
      color: vars.color.primary,
    },
  },
});

export const activeTab = style([
  tabTrigger,
  {
    color: vars.color.primary,
    fontWeight: vars.fontWeight.bold,
    selectors: {
      '&::after': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '2px',
        width: '100%',
        backgroundColor: vars.color.primary,
        transition: 'width 0.3s ease',
      },
    },
  },
]);

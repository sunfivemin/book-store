import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const button = style({
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  fontFamily: vars.font.family,
  backgroundColor: vars.color.primary,
  transition: 'background-color 0.2s ease',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
});

import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const pageLayout = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
// className="flex flex-col min-h-screen"

export const mainContainer = style({
  width: '100%',
  margin: '0 auto',
  padding: vars.spacing.lg,
  maxWidth: vars.layout.width.large,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.background,

  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: vars.layout.width.medium,
    },
    'screen and (min-width: 1024px)': {
      maxWidth: vars.layout.width.large,
    },
  },
});
// className="flex-1 "

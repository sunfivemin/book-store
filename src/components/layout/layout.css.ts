import { style } from '@vanilla-extract/css';
import { themeContract, vars } from '@/styles/theme.css';

export const pageLayout = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
// className="flex flex-col min-h-screen"

export const mainContainer = style({
  flex: 1,
  margin: '0 auto',
  padding: `${vars.spacing.lg} ${vars.spacing.md}`,
  width: '100%',
  maxWidth: vars.layout.width.large,
  minHeight: '600px',
  borderRadius: vars.radius.lg,
  transition: 'all 0.3s ease-in-out',
  background: themeContract.color.background,

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

// App 루트에 적용될 기본 스타일

import { style } from '@vanilla-extract/css';
// import { vars } from './theme.css';
import { themeContract } from './theme.css';

export const app = style({
  // backgroundColor: vars.color.background,
  // color: vars.color.text,
  // minHeight: '100vh',
  // padding: vars.spacing.md,
  // transition: 'background-color 0.3s ease, color 0.3s ease',
  backgroundColor: themeContract.color.background,
  color: themeContract.color.text,
  minHeight: '100vh',
  padding: themeContract.spacing.md,
  transition: 'background-color 0.3s ease, color 0.3s ease',
  fontFamily: themeContract.font.family,
});

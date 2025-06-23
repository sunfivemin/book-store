import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    background: '#ffffff',
    text: '#111111',
    primary: '#0070f3',
  },
  spacing: {
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
  fontSize: {
    base: '14px',
    lg: '16px',
  },
  font: {
    family: 'Pretendard, system-ui, sans-serif',
  },
});

export const themeContract = createThemeContract(vars);

export const darkThemeClass = createTheme(themeContract, {
  color: {
    background: '#111111',
    text: '#f0f0f0',
    primary: '#1e90ff',
  },
  spacing: vars.spacing,
  fontSize: vars.fontSize,
  font: vars.font,
});

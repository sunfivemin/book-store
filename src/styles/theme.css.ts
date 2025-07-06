import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';
import { colorTokens } from './tokens/colors';
import { darkColorTokens } from './tokens/darkColors';

// 1. 기본 테마 정의
export const vars = createGlobalTheme(':root', {
  color: {
    primary: colorTokens.brand.primary,
    secondary: colorTokens.brand.secondary,
    must: colorTokens.priority.must,
    should: colorTokens.priority.should,
    remind: colorTokens.priority.remind,
    doneBg: colorTokens.status.doneBg,
    disabledText: colorTokens.status.disabledText,
    success: colorTokens.status.success,
    error: colorTokens.priority.must,
    background: colorTokens.surface.base,
    input: colorTokens.surface.input,
    surfaceHover: colorTokens.surface.hover,
    text: {
      default: colorTokens.text.default,
      light: colorTokens.text.light,
      strong: colorTokens.text.strong,
      weak: colorTokens.text.weak,
    },
    border: {
      default: colorTokens.border.default,
      input: colorTokens.border.input,
      popup: colorTokens.border.popup,
    },
  },
  font: {
    family: 'var(--font-pretendard), system-ui, sans-serif',
  },
  spacing: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
  },
  fontSize: {
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1rem',
  },
  heading: {
    sm: { fontSize: '1rem', fontWeight: '600' },
    md: { fontSize: '1.5rem', fontWeight: '700' },
    lg: { fontSize: '2rem', fontWeight: '800' },
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    bold: '700',
  },
  layout: {
    width: {
      large: '1020px',
      medium: '768px',
      small: '320px',
    },
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  transition: {
    fast: '0.2s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
});

// 2. 다크 테마 선언을 위한 contract
export const themeContract = createThemeContract(vars);

// 3. 다크 테마 정의
export const darkThemeClass = createTheme(themeContract, {
  color: {
    primary: darkColorTokens.brand.primary,
    secondary: darkColorTokens.brand.secondary,
    must: darkColorTokens.priority.must,
    should: darkColorTokens.priority.should,
    remind: darkColorTokens.priority.remind,
    doneBg: darkColorTokens.status.doneBg,
    disabledText: darkColorTokens.status.disabledText,
    success: darkColorTokens.status.success,
    error: darkColorTokens.priority.must,
    background: darkColorTokens.nav.inactive,
    input: darkColorTokens.surface.input,
    surfaceHover: darkColorTokens.surface.hover,
    text: {
      default: darkColorTokens.text.default,
      light: darkColorTokens.text.light,
      strong: darkColorTokens.text.strong,
      weak: darkColorTokens.text.weak,
    },
    border: {
      default: darkColorTokens.border.default,
      input: darkColorTokens.border.input,
      popup: darkColorTokens.border.popup,
    },
  },
  font: vars.font,
  spacing: vars.spacing,
  fontSize: vars.fontSize,
  fontWeight: vars.fontWeight,
  heading: vars.heading,
  layout: vars.layout,
  radius: vars.radius,
  transition: vars.transition,
});

// 4. light 클래스명만 export
export const lightThemeClass = 'light-theme';

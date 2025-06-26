import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';
import { colorTokens } from './tokens/colors';
import { darkColorTokens } from './tokens/darkColors';

// 🎨 기본 테마 정의
export const vars = createGlobalTheme(':root', {
  color: {
    // brand
    primary: colorTokens.brand.primary,
    secondary: colorTokens.brand.secondary,

    // priority
    must: colorTokens.priority.must,
    should: colorTokens.priority.should,
    remind: colorTokens.priority.remind,

    // status
    doneBg: colorTokens.status.doneBg,
    disabledText: colorTokens.status.disabledText,
    success: colorTokens.status.success,

    // text
    default: colorTokens.text.default,
    light: colorTokens.text.light,
    strong: colorTokens.text.strong,
    weak: colorTokens.text.weak,

    // extra
    error: colorTokens.priority.must,
    background: colorTokens.surface.base,
    input: colorTokens.surface.input,
    surfaceHover: colorTokens.surface.hover,
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
  font: {
    family: 'var(--font-pretendard), system-ui, sans-serif',
  },
});

// 🧾 타입
export type HeadingSize = keyof typeof vars.fontSize;
export type TitleColorKey =
  | 'primary'
  | 'secondary'
  | 'must'
  | 'should'
  | 'remind'
  | 'default'
  | 'light'
  | 'strong'
  | 'weak'
  | 'error'
  | 'background'
  | 'input'
  | 'surfaceHover';

// 🌘 다크 테마
export const themeContract = createThemeContract(vars);

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
    default: darkColorTokens.text.default,
    light: darkColorTokens.text.light,
    strong: darkColorTokens.text.strong,
    weak: darkColorTokens.text.weak,
    error: darkColorTokens.priority.must,
    background: darkColorTokens.surface.base,
    input: darkColorTokens.surface.input,
    surfaceHover: darkColorTokens.surface.hover,
  },
  spacing: vars.spacing,
  fontSize: vars.fontSize,
  heading: vars.heading,
  font: vars.font,
});

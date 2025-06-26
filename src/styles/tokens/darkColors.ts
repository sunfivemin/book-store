// src/tokens/darkColors.ts
import colors from 'tailwindcss/colors';

export const darkColorTokens = {
  brand: {
    primary: '#1e90ff',
    secondary: colors.indigo[300],
  },
  priority: {
    must: colors.red[400],
    should: colors.emerald[400],
    remind: colors.sky[400],
  },
  status: {
    doneBg: colors.indigo[900],
    disabledText: colors.indigo[500],
    success: colors.green[400],
  },
  tag: {
    retryBg: colors.indigo[900],
    retryStrong: colors.indigo[300],
    retryWeak: colors.indigo[500],
  },
  nav: {
    active: colors.zinc[300],
    inactive: colors.zinc[500],
  },
  surface: {
    base: '#1e1e1e',
    card: '#2a2a2a',
    input: '#2b2b2b',
    popup: '#2a2a2a',
    hover: '#333333',
  },
  text: {
    default: '#e0e0e0',
    light: '#aaaaaa',
    strong: '#ffffff',
    weak: '#888888',
  },
  border: {
    default: colors.gray[700],
    input: colors.gray[700],
    popup: colors.gray[600],
    card: {
      default: colors.gray[700],
      strong: colors.gray[600],
      weak: colors.gray[800],
    },
  },
  shadow: {
    default: '#00000033',
    strong: '#00000055',
    weak: '#00000022',
  },
};

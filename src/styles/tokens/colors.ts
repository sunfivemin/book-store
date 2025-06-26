// src/tokens/colors.ts
import colors from 'tailwindcss/colors';

export const colorTokens = {
  brand: {
    primary: colors.blue[500],
    secondary: colors.indigo[500],
  },
  priority: {
    must: colors.red[500],
    should: colors.emerald[500],
    remind: colors.sky[500],
  },
  status: {
    doneBg: colors.indigo[100],
    disabledText: colors.indigo[300],
    success: colors.green[500],
  },
  text: {
    default: colors.gray[800],
    light: colors.gray[600],
    strong: colors.gray[900],
    weak: colors.gray[500],
  },
  surface: {
    base: colors.white,
    card: colors.white,
    input: colors.gray[50],
    popup: colors.white,
    hover: colors.gray[100],
  },
  border: {
    default: colors.gray[200],
    input: colors.gray[200],
    popup: colors.gray[300],
  },
};

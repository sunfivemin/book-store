import { styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const titleSizeStyle = styleVariants({
  lg: { fontSize: vars.heading.lg.fontSize },
  md: { fontSize: vars.heading.md.fontSize },
  sm: { fontSize: vars.heading.sm.fontSize },
});

export const titleColorStyle = styleVariants({
  primary: { color: vars.color.primary },
  secondary: { color: vars.color.secondary },
  must: { color: vars.color.must },
  should: { color: vars.color.should },
  remind: { color: vars.color.remind },
  default: { color: vars.color.text.default },
  light: { color: vars.color.text.light },
  strong: { color: vars.color.text.strong },
  weak: { color: vars.color.text.weak },
  error: { color: vars.color.error },
  background: { color: vars.color.background },
  input: { color: vars.color.input },
  surfaceHover: { color: vars.color.surfaceHover },
});

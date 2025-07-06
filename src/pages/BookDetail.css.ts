import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  padding: '2rem',
  maxWidth: '960px',
  margin: '0 auto',
});

export const layout = style({
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  gap: '2rem',
  alignItems: 'start',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const imageWrapper = style({
  backgroundColor: vars.color.surfaceHover,
  aspectRatio: '3 / 4',
  borderRadius: vars.radius.md,
  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
});

export const bookTitle = style({
  fontSize: vars.heading.lg.fontSize,
  fontWeight: vars.heading.lg.fontWeight,
  color: vars.color.text.strong,
});

export const sectionTitle = style({
  fontSize: vars.heading.md.fontSize,
  fontWeight: vars.heading.md.fontWeight,
  color: vars.color.text.strong,
  marginTop: vars.spacing.lg,
  marginBottom: vars.spacing.sm,
});

export const text = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.default,
});

export const likeRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
});

export const heart = style({
  color: vars.color.text.weak,
  transition: vars.transition.fast,
  selectors: {
    '&:hover': {
      color: vars.color.must,
    },
  },
});

export const heartActive = style({
  color: vars.color.must,
});

export const cartButton = style({
  backgroundColor: vars.color.primary,
  color: '#fff',
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  fontSize: vars.fontSize.sm,
  borderRadius: vars.radius.md,
  width: 'fit-content',
  // transition: vars.transition.fast,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.secondary,
    },
  },
});

export const pre = style({
  whiteSpace: 'pre-line',
  fontSize: vars.fontSize.sm,
  color: vars.color.text.default,
});

export const dl = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
});

export const dlRow = style({
  display: 'flex',
  gap: vars.spacing.md,
});

export const dlLabel = style({
  width: '6rem',
  fontWeight: vars.fontWeight.bold,
});

export const dlValue = style({
  color: vars.color.text.weak,
});

export const skeleton = style({
  height: '10rem',
  backgroundColor: vars.color.surfaceHover,
  borderRadius: vars.radius.md,
});

export const error = style({
  color: vars.color.error,
});

export const link = style({
  color: vars.color.primary,
  textDecoration: 'underline',
  selectors: {
    '&:hover': {
      color: vars.color.secondary,
    },
  },
});

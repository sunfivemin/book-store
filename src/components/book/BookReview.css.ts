import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: '0.5rem',
  padding: '1rem',
  backgroundColor: '#fff',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '0.5rem',
});
export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.45rem',
  lineHeight: '1rem',
});

export const user = style({
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '1rem',
});

export const score = style({
  color: '#f97316', // orange-500
  fontSize: '0.875rem',
});

export const date = style({
  fontSize: '0.875rem',
  color: '#999',
});

export const content = style({
  fontSize: '0.875rem',
  lineHeight: 1.5,
  whiteSpace: 'pre-wrap', // 줄바꿈 대응
});

export const reviewList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const empty = style({
  color: '#999',
  fontSize: '0.875rem',
});

export const starWrapper = style({
  display: 'flex',
  gap: '2px',
  marginTop: '2px',
});

export const star = style({
  color: '#f97316', // orange-500
  fontSize: '0.875rem',
});

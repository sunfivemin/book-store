// src/components/book/BookReview.css.ts
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

// 💬 리뷰 리스트 영역
export const reviewList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '2rem',
});

export const empty = style({
  color: '#999',
  fontSize: '0.875rem',
});

// 📝 개별 리뷰 카드
export const reviewItem = style({
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: '0.5rem',
  padding: '1rem',
  backgroundColor: '#fff',
});

export const container = reviewItem;

// 🧾 리뷰 상단 정보 (유저명, 별점, 날짜)
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

// 💬 리뷰 본문
export const content = style({
  fontSize: '0.875rem',
  lineHeight: 1.5,
  whiteSpace: 'pre-wrap',
});

// ⭐ 별점 표시
export const starWrapper = style({
  display: 'flex',
  gap: '2px',
  marginTop: '2px',
});

export const star = style({
  color: '#f97316',
  fontSize: '0.875rem',
});

// ✍️ 리뷰 작성 폼
export const reviewForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '1.5rem',
});

export const textarea = style({
  width: '100%',
  height: '100px',
  padding: '0.75rem',
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  backgroundColor: '#fff',
});

export const formFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const select = style({
  padding: '0.5rem',
  borderRadius: '0.375rem',
  border: `1px solid ${vars.color.border.default}`,
  fontSize: '0.875rem',
  backgroundColor: '#fff',
});

export const submitButton = style({
  backgroundColor: vars.color.primary,
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
});

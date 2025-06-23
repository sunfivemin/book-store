// src/styles/global.css.ts

import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import './tailwind.css'; // 반드시 먼저 불러야 tailwind 적용됨

// Pretendard 폰트 선언
globalFontFace('Pretendard', {
  src: 'local("Pretendard"), url(/fonts/Pretendard/PretendardVariable.woff2) format("woff2")',
  fontStyle: 'normal',
  fontWeight: '400',
  fontDisplay: 'swap',
});

// Kkokghae 폰트 선언
globalFontFace('kkokghae', {
  src: 'local("kkokghae"), url(/fonts/kkonghae.woff2) format("woff2")',
  fontStyle: 'normal',
  fontWeight: '400',
  fontDisplay: 'swap',
});

// 전역 기본 스타일
globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: '"Pretendard", system-ui, sans-serif',
  backgroundColor: '#ffffff',
  color: '#111111',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

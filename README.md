
# 📚 BOOKSTORE - 도서 쇼핑몰 풀스택 프로젝트

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Express.js](https://img.shields.io/badge/Express.js-4.18.2-000000?style=for-the-badge&logo=express)

**React 19, TypeScript, Vite 기반의 현대적인 온라인 서점입니다.**  
Tailwind CSS와 Vanilla Extract를 활용한 확장 가능한 스타일 시스템을 제공하며, 프로그래머스 강의를 통해 학습한 풀스택 개발 기술을 바탕으로 백엔드와 프론트엔드를 혼자 구축하였습니다.

백엔드 프로젝트는 [book-shop (GitHub)](https://github.com/sunfivemin/book-shop) 와 연결됩니다.

<img width="1687" alt="banner" src="https://github.com/user-attachments/assets/30e045b1-9947-444e-a70f-f600ac37162f" />
<img width="1680" alt="review" src="https://github.com/user-attachments/assets/c0182d1d-7cf6-448e-8e6b-0b02157bbbdb" />
<img width="1453" alt="orderSuccess" src="https://github.com/user-attachments/assets/bf0366cd-3f57-4c41-a10c-1e7bfd029def" />
</div>

---

## 🎯 프로젝트 개요

- **개발 범위**: 백엔드 API 설계 및 구현, 프론트엔드 UI/UX 개발, 데이터베이스 설계, 배포 및 운영
- **개발 방식**: 풀스택 개발 (프론트엔드 + 백엔드)
- **학습 기반**: 프로그래머스 강의를 통한 체계적 학습
- **아키텍처**: 모던 웹 개발 패턴 적용 (컴포넌트 기반, 상태 관리, API 통신)

## ✨ 주요 기능

### 📖 도서 관리
- **베스트셀러**: 인기 도서 목록 및 상세 정보
- **신간 도서**: 최신 출간 도서 안내
- **카테고리별 검색**: 전체, 동화, 소설, 사회 등 분류별 도서 검색
- **도서 상세**: 도서 정보, 리뷰, 장바구니 추가 기능

### 🛒 장바구니 & 주문
- **장바구니 관리**: 도서 추가/삭제, 수량 조절
- **주문 프로세스**: 배송 정보 입력, 결제 처리
- **주문 내역**: 사용자별 주문 히스토리 조회

### 👤 사용자 시스템
- **회원가입/로그인**: JWT 기반 인증 시스템
- **비밀번호 재설정**: 이메일 인증을 통한 비밀번호 복구
- **사용자 프로필**: 개인 정보 관리

### 📝 리뷰 시스템
- **도서 리뷰**: 별점, 텍스트 리뷰 작성
- **리뷰 조회**: 도서별 리뷰 목록 및 평점 표시

### 🎨 UI/UX
- **다크 모드**: 라이트/다크 테마 전환
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **애니메이션**: Framer Motion을 활용한 부드러운 인터랙션
- **접근성**: 시각 장애인을 고려한 웹 접근성 준수

## 🛠️ 기술 스택

### Frontend
| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 19.1.0 | 사용자 인터페이스 구축 |
| **TypeScript** | 5.8.3 | 타입 안전성 및 개발 생산성 |
| **Vite** | 6.3.5 | 빠른 개발 서버 및 빌드 도구 |
| **React Router DOM** | 7.6.2 | 클라이언트 사이드 라우팅 |

### Backend
| 기술 | 버전 | 용도 |
|------|------|------|
| **Node.js** | 18.0.0+ | 서버 런타임 환경 |
| **Express.js** | 4.18.2 | 웹 애플리케이션 프레임워크 |
| **MSW** | 2.10.3 | API 모킹 및 개발 환경 |

### 스타일링
| 기술 | 버전 | 용도 |
|------|------|------|
| **Tailwind CSS** | 3.4.1 | 유틸리티 기반 CSS 프레임워크 |
| **Vanilla Extract** | 1.17.4 | 타입 안전한 CSS-in-TypeScript |
| **tailwind-variants** | 1.0.0 | 조건부 스타일링 |
| **Framer Motion** | 12.19.1 | 애니메이션 라이브러리 |

### 상태 관리 & 데이터
| 기술 | 버전 | 용도 |
|------|------|------|
| **Zustand** | 5.0.6 | 경량 상태 관리 |
| **React Query** | 5.81.5 | 서버 상태 관리 및 캐싱 |
| **React Hook Form** | 7.59.0 | 폼 상태 관리 |

### 개발 도구
| 기술 | 버전 | 용도 |
|------|------|------|
| **ESLint** | 9.25.0 | 코드 품질 관리 |
| **Jest** | 29.7.0 | 테스트 프레임워크 |
| **Testing Library** | 16.3.0 | 컴포넌트 테스트 |

## 🚀 시작하기

### 필수 요구사항

- **Node.js**: 18.0.0 이상
- **npm**: 9.0.0 이상 또는 **yarn**: 1.22.0 이상
- **Git**: 2.0.0 이상

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone <repository-url>
cd book-store

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 브라우저에서 확인
# http://localhost:5173
```

### 추가 명령어

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 테스트 실행
npm test

# 타입 체크
npm run typecheck

# 린트 검사
npm run lint
```

## 📁 프로젝트 구조

```
book-store/
├── public/                 # 정적 파일
│   ├── fonts/             # 웹 폰트
│   ├── default-book.jpg   # 기본 도서 이미지
│   └── mockServiceWorker.js # MSW 워커
├── src/
│   ├── api/               # API 관련 설정 및 함수
│   │   ├── http.ts        # Axios 인스턴스 설정
│   │   ├── queryClient.ts # React Query 설정
│   │   ├── auth.api.ts    # 인증 API
│   │   ├── books.api.ts   # 도서 API
│   │   ├── cart.api.ts    # 장바구니 API
│   │   └── order.api.ts   # 주문 API
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── ui/           # 기본 UI 컴포넌트
│   │   │   ├── Button/   # 버튼 컴포넌트
│   │   │   ├── Input/    # 입력 컴포넌트
│   │   │   ├── Modal/    # 모달 컴포넌트
│   │   │   └── Card/     # 카드 컴포넌트
│   │   ├── common/       # 공통 컴포넌트
│   │   │   ├── Header/   # 헤더 컴포넌트
│   │   │   ├── Footer/   # 푸터 컴포넌트
│   │   │   └── Banners/  # 배너 컴포넌트
│   │   ├── book/         # 도서 관련 컴포넌트
│   │   ├── cart/         # 장바구니 컴포넌트
│   │   └── layout/       # 레이아웃 컴포넌트
│   ├── hooks/            # 커스텀 훅
│   │   ├── useAuth.ts    # 인증 훅
│   │   ├── useBooks.ts   # 도서 관련 훅
│   │   ├── useCart.ts    # 장바구니 훅
│   │   └── useTheme.ts   # 테마 훅
│   ├── pages/            # 페이지 컴포넌트
│   │   ├── Home.tsx      # 홈 페이지
│   │   ├── Books.tsx     # 도서 목록 페이지
│   │   ├── BookDetail.tsx # 도서 상세 페이지
│   │   ├── Cart.tsx      # 장바구니 페이지
│   │   ├── Order.tsx     # 주문 페이지
│   │   ├── Login.tsx     # 로그인 페이지
│   │   └── Signup.tsx    # 회원가입 페이지
│   ├── store/            # Zustand 스토어
│   │   ├── authStore.ts  # 인증 상태 관리
│   │   └── cartStore.ts  # 장바구니 상태 관리
│   ├── styles/           # 스타일 관련 파일
│   │   ├── theme.css.ts  # 테마 설정
│   │   ├── global.css.ts # 전역 스타일
│   │   └── tokens/       # 디자인 토큰
│   │       ├── colors.ts # 색상 토큰
│   │       └── darkColors.ts # 다크 테마 색상
│   ├── types/            # TypeScript 타입 정의
│   ├── utils/            # 유틸리티 함수
│   │   ├── format.ts     # 포맷팅 유틸
│   │   ├── image.ts      # 이미지 처리 유틸
│   │   └── token.ts      # 토큰 관리 유틸
│   ├── mock/             # MSW 모킹 설정
│   │   ├── handlers.ts   # API 핸들러
│   │   ├── books.ts      # 도서 모킹 데이터
│   │   └── review.ts     # 리뷰 모킹 데이터
│   ├── App.tsx           # 메인 앱 컴포넌트
│   └── main.tsx          # 앱 진입점
├── package.json          # 프로젝트 설정
├── vite.config.ts        # Vite 설정
├── tailwind.config.js    # Tailwind CSS 설정
├── tsconfig.json         # TypeScript 설정
└── README.md             # 프로젝트 문서
```

## 🎨 스타일 시스템

### 디자인 토큰 기반 아키텍처

이 프로젝트는 **Tailwind CSS**와 **Vanilla Extract**를 조합하여 확장 가능한 스타일 시스템을 구현합니다.

#### 색상 시스템
```typescript
// src/styles/tokens/colors.ts
export const colorTokens = {
  brand: {
    primary: '#3B82F6',
    secondary: '#1E40AF',
  },
  text: {
    default: '#1F2937',
    strong: '#111827',
    weak: '#6B7280',
  },
  surface: {
    base: '#FFFFFF',
    secondary: '#F9FAFB',
  },
  // ...
};
```

#### 테마 시스템
```typescript
// src/styles/theme.css.ts
export const vars = createGlobalTheme(':root', {
  color: colorTokens,
  spacing: { 
    xs: '0.25rem', 
    sm: '0.5rem', 
    md: '1rem', 
    lg: '1.5rem' 
  },
  fontSize: { 
    sm: '0.875rem', 
    md: '1rem', 
    lg: '1.125rem' 
  },
  // ...
});
```

### 컴포넌트 스타일링 예시

```typescript
// Button 컴포넌트
import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center font-medium rounded transition-colors',
  variants: {
    variant: {
      primary: 'bg-brand-primary text-white hover:bg-brand-secondary',
      ghost: 'bg-transparent text-brand-primary hover:bg-gray-100',
      outline: 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
    },
    size: {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
```

## 🔧 주요 설정

### Vite 설정
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
```

### Tailwind 설정
```javascript
// tailwind.config.js
import { colorTokens } from './src/styles/tokens/colors';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colorTokens,
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif'],
        kkonghae: ['var(--font-kkonghae)', 'cursive'],
      },
    },
  },
};
```

## 📱 페이지 구성

| 페이지 | 경로 | 설명 |
|--------|------|------|
| **홈** | `/` | 베스트셀러, 신간, 리뷰 섹션 |
| **도서 목록** | `/books` | 카테고리별 도서 검색 및 필터링 |
| **도서 상세** | `/book/:id` | 도서 정보, 리뷰, 장바구니 추가 |
| **장바구니** | `/cart` | 장바구니 관리 및 주문 |
| **주문** | `/order` | 주문 정보 입력 및 결제 |
| **주문 내역** | `/orderlist` | 주문 히스토리 조회 |
| **로그인** | `/login` | 사용자 로그인 |
| **회원가입** | `/signup` | 새 사용자 등록 |
| **비밀번호 재설정** | `/reset` | 비밀번호 복구 |

## 🧪 테스트

### 테스트 실행
```bash
# 전체 테스트 실행
npm test

# 특정 파일 테스트
npm test -- Button.spec.tsx

# 테스트 커버리지
npm test -- --coverage

# 테스트 감시 모드
npm test -- --watch
```

### 테스트 구조
```
src/
├── components/
│   └── ui/
│       ├── Button/
│       │   ├── Button.tsx
│       │   └── Button.spec.tsx
│       └── Input/
│           ├── Input.tsx
│           └── Input.spec.tsx
```


## 👨‍💻 정보

- **개발 방식**: 혼자서 프론트엔드와 백엔드 전체 개발
- **학습 경로**: 프로그래머스 강의를 통한 체계적 학습
- **기술 스택**: React 19, TypeScript, Vite, Node.js, Express.js



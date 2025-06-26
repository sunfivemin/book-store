# 🎨 스타일 시스템 가이드

이 프로젝트는 **Tailwind CSS**와 **Vanilla Extract**를 함께 사용하며, 디자인 시스템 기반의 **공통 토큰**을 통해 스타일을 일관되게 관리합니다.

## 📁 디렉토리 구조

```bash
src/
├── components/
│   └── ui/
│       └── Button/
├── styles/
│   ├── theme.css.ts
│   ├── global.css.ts
│   └── tokens/
│       ├── colors.ts
│       └── darkColors.ts
tailwind.config.ts
```

---

## 🧱 스타일 구성 전략

| 목적                                | 사용 기술       | 설명                                          |
| ----------------------------------- | --------------- | --------------------------------------------- |
| 빠르고 유틸리티 중심 스타일링       | Tailwind CSS    | 클래스 기반 스타일 적용                       |
| 타입 안전한 토큰 기반 디자인 시스템 | Vanilla Extract | CSS-in-TypeScript + 다크모드 대응             |
| 공통된 색상/간격/폰트 정의          | 디자인 토큰     | Tailwind와 Vanilla Extract 모두에서 사용 가능 |

---

## 🎨 디자인 토큰 (colors.ts)

```ts
// src/styles/tokens/colors.ts
import colors from 'tailwindcss/colors';

export const colorTokens = {
  brand: {
    primary: colors.blue[500],
    secondary: colors.indigo[500],
  },
  text: {
    default: colors.gray[800],
    strong: colors.gray[900],
    light: colors.gray[600],
  },
  surface: {
    base: '#f8fafc',
    input: colors.gray[50],
    hover: colors.gray[100],
  },
  ...
};
```

✅ Tailwind에서 사용하는 법

```ts
// tailwind.config.ts
import { colorTokens } from './src/styles/tokens/colors';

extend: {
  colors: {
    ...colorTokens,
    'brand-primary': colorTokens.brand.primary,
    'text-default': colorTokens.text.default,
  },
}
```

사용 예:

```html
<button class="bg-brand-primary text-white hover:bg-surface-hover">
  Click
</button>
```

⸻

✅ Vanilla Extract에서 사용하는 법

```ts
// src/styles/theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { colorTokens } from './tokens/colors';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: colorTokens.brand.primary,
    text: colorTokens.text.default,
    background: colorTokens.surface.base,
    ...
  },
});
```

```ts
// src/components/ui/Title/title.css.ts
import { styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const titleColorStyle = styleVariants({
  primary: { color: vars.color.primary },
  text: { color: vars.color.text },
});
```

⸻

## 🌗 테마 시스템

### ✅ 기본 테마 정의

- `theme.css.ts`에서 `createGlobalTheme`을 사용해 색상, 폰트, 간격 등을 정의합니다.
- `colorTokens`와 `darkColorTokens`를 기반으로 `light / dark mode` 를 구성합니다.

🌙 다크모드 지원
• createThemeContract와 createTheme으로 다크 테마 클래스 생성
• ThemeProvider에서 <html> 또는 <body>에 테마 클래스를 적용

Vanilla Extract의 createThemeContract와 createTheme을 활용해 다크 테마 구성:

```ts
// src/styles/theme.css.ts
export const themeContract = createThemeContract(vars);

export const darkThemeClass = createTheme(themeContract, {
  color: {
    primary: darkColorTokens.brand.primary,
    text: darkColorTokens.text.default,
    ...
  },
});
```

```tsx
<body className={isDark ? darkThemeClass : undefined}>...</body>
```

⸻

🧩 컴포넌트 예시 - Title

```tsx
<Title size="lg" color="primary">
  제목
</Title>
```

    •	size: 'sm' | 'md' | 'lg'
    •	color: 'primary' | 'secondary' | 'default' | 'strong' | 'weak' 등 vars.color에서 자동 추론됨

⸻

✅ 테스팅

```bash
npm run test
```

    •	jest + @testing-library/react 기반
    •	스타일 값도 vars.color.primary 등으로 직접 검사 가능

⸻

⚙️ Tailwind 설정 (tailwind.config.ts)

Tailwind에서 Vanilla Extract 토큰을 재사용하기 위해 colors에 colorTokens를 병합:

```ts
extend: {
  colors: {
    ...colorTokens,
    'brand-primary': colorTokens.brand.primary,
    'text-default': colorTokens.text.default,
  }
}
```

---

✨ FadeInSection – Scroll 애니메이션 유틸

스크롤 시 요소가 아래에서 위로 fade-in 되며 등장하는 효과를 제공하는 컴포넌트입니다. framer-motion과 useInView를 활용하며, 한 번만 실행할지, 스크롤 진입 시마다 반복할지를 설정할 수 있습니다.

✅ 사용법

```tsx
import { FadeInSection } from '@/components/motion/FadeInSection';

// 한 번만 등장 애니메이션
<FadeInSection>
  <Card>최초 진입 시 fade-in</Card>
</FadeInSection>

// 스크롤 진입할 때마다 fade-in
<FadeInSection once={false}>
  <Card>계속 재등장하는 카드</Card>
</FadeInSection>
```

💡 내부 동작 방식
• useInView로 요소가 viewport에 들어올 때 감지
• framer-motion의 useAnimation으로 애니메이션 제어
• motion.section 태그로 감싸서 y: 20 → 0, opacity: 0 → 1 전환

---

🧭 Header – 반응형 상단 고정 헤더

스크롤 위치에 따라 스타일이 동적으로 변경되는 반응형 Sticky Header입니다. Vanilla Extract + tailwind-variants를 조합하여 구현되었으며, 다크모드와 **접근성(시각적 숨김)**도 고려했습니다.

✅ 기능
• 상단 고정(sticky)
• 스크롤 시 자동 축소 (height, padding, box-shadow 변화)
• BOOKSTORE 로고 및 카테고리 네비게이션, 로그인/회원가입 버튼
• 반응형 레이아웃 (최대 너비: 1020px)
• body.scrolled 클래스를 활용한 스타일 분기

💡 스크롤 반응 스타일 적용 방식
body.scrolled 클래스가 추가되면 headerContainer에 아래 스타일이 적용됨:

```ts
selectors: {
  'body.scrolled &': {
    padding: vars.spacing.sm,
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
    borderRadius: '12px',
  },
},
```

🧱 구조 예시

```tsx
<header className={clsx(...)}> // sticky + transition
  <div className={headerContainer}> // max-width: 1020px
    <img src="..." alt="BOOKSTORE 로고" />
    <h1>
      <span className="sr-only">BOOKSTORE</span>
    </h1>
    <nav>전체, 동화, 소설, 사회</nav>
    <div>로그인 / 회원가입</div>
  </div>
</header>
```

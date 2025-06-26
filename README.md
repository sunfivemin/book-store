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

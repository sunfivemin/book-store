<img width="1687" alt="banner" src="https://github.com/user-attachments/assets/30e045b1-9947-444e-a70f-f600ac37162f" />
<img width="1680" alt="review" src="https://github.com/user-attachments/assets/c0182d1d-7cf6-448e-8e6b-0b02157bbbdb" />
![Uploading BooksList.png…]()
<img width="1453" alt="orderSuccess" src="https://github.com/user-attachments/assets/bf0366cd-3f57-4c41-a10c-1e7bfd029def" />


# 🎨 스타일 시스템 가이드

이 프로젝트는 **Tailwind CSS**와 **Vanilla Extract**를 함께 활용하여, 확장성과 유지보수성이 뛰어난 스타일 시스템을 구현합니다.  
디자인 토큰 기반의 테마 시스템과 다크 모드를 통해 일관된 UI 스타일을 효율적으로 관리할 수 있습니다.

## 파일 구성

```bash
src/
├── components/
│   └── ui/
│       └── Button/
├── styles/
│   ├── global.css.ts        # 전역 스타일
│   ├── theme.css.ts         # 테마, 디자인 토큰
│   └── tokens/
│       ├── colors.ts        # 라이트 테마 색상 토큰
│       └── darkColors.ts    # 다크 테마 색상 토큰
tailwind.config.ts         # Tailwind 설정
```

---

## 스타일 구성 전략

| 목적                          | 도구               | 설명                                                                      |
| ----------------------------- | ------------------ | ------------------------------------------------------------------------- |
| 빠르고 유틸리티 기반 스타일링 | Tailwind CSS       | spacing, flex 등 유틸리티 클래스를 활용한 빠른 UI 구성                    |
| 디자인 토큰 기반 테마 시스템  | Vanilla Extract    | 타입 안전한 CSS-in-TypeScript 기반. 다크 모드 지원 포함                   |
| 컴포넌트 스타일 분기 관리     | tailwind-variants  | variant, size 등 조건 기반의 클래스 구성에 적합한 구조화 도구             |
| 공통 속성 재사용              | 디자인 토큰 구조화 | tailwind와 Vanilla Extract 모두에서 동일한 토큰 기반으로 스타일 구성 가능 |

---

## 테마 시스템 구성 (`theme.css.ts` 기준)

Vanilla Extract를 활용해 라이트/다크 테마를 토큰 기반으로 정의합니다.

### 1. 기본 테마 정의

```ts
export const vars = createGlobalTheme(':root', {
  color: {
    primary: colorTokens.brand.primary,
    background: colorTokens.surface.base,
    text: {
      default: colorTokens.text.default,
    },
    // ...
  },
  spacing: {
    md: '1rem',
  },
  font: {
    family: 'system-ui',
  },
});
```

### 2. 테마 계약 (Contract) 생성

```ts
export const themeContract = createThemeContract(vars);
```

### 3. 다크 테마 정의

```ts
export const darkThemeClass = createTheme(themeContract, {
  color: {
    primary: '#60a5fa',
    background: '#1e1e1e',
    text: {
      default: '#f3f4f6',
    },
  },
  spacing: {
    md: '1rem',
  },
  font: vars.font,
});
```

> ⚡ `themeContract.color.text.default`을 사용하는 이유?
>
> CSS 변수 재정의(override)를 기본으로 테마가 동작하기 때문입니다.
> `vars`는 기본 라이트 테마 값을 고정 참조하지만,
> `themeContract`는 themeContract는 현재 `<html>` 또는 `<body>`에 적용된 테마 클래스(darkThemeClass)에 따라 동적으로 CSS 변수가 바뀌는 방식이기 때문입니다.

### 4. 스타일 적용 예시

```ts
import { style } from '@vanilla-extract/css';
import { themeContract } from '@/styles/theme.css';

export const container = style({
  backgroundColor: themeContract.color.background,
  color: themeContract.color.text.default,
});
```

### 5. ThemeProvider 구성

```tsx
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(isDark ? 'light-theme' : darkThemeClass);
    root.classList.add(isDark ? darkThemeClass : 'light-theme');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

## ⚙️ Tailwind CSS + tailwind-variants (tv)

### Tailwind 설정에서 디자인 토큰 재사용

```ts
// tailwind.config.ts
import { colorTokens } from './src/styles/tokens/colors';

export default {
  theme: {
    extend: {
      colors: {
        ...colorTokens,
        'brand-primary': colorTokens.brand.primary,
        'text-default': colorTokens.text.default,
      },
    },
  },
};
```

### tailwind-variants(tv) 예시

```ts
import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center font-medium rounded',
  variants: {
    variant: {
      primary: 'bg-brand-primary text-white',
      ghost: 'bg-transparent text-brand-primary',
    },
    size: {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
```

### tailwind-variants에서 다크모드 대응 방법

tv() 자체는 다크모드 상태를 제어하지 않지만,
Tailwind의 dark: prefix를 통해 조건부 스타일 적용이 가능합니다.

```ts
export const button = tv({
  base: 'bg-white text-black dark:bg-black dark:text-white',
});
```

또는 테마 상태값을 props로 받아 분기 처리:

```ts
export const button = tv({
  variants: {
    theme: {
      light: 'bg-white text-black',
      dark: 'bg-gray-900 text-white',
    },
  },
});

// 사용
<button className={button({ theme: isDark ? 'dark' : 'light' })}>Click</button>;
```

---

## 요약

- Tailwind: margin, padding, flex 등 빠르게 적용
- Vanilla Extract: 타입 안전 + 런타임 다크 모드 대응
- tv(): variant, size 등 조건부 class 조합에 최적화

---

# ✨ FadeInSection – Scroll 애니메이션 유틸

스크롤 시 요소가 아래에서 위로 fade-in 되며 등장하는 효과를 제공하는 컴포넌트입니다. framer-motion과 useInView를 활용하며, 한 번만 실행할지, 스크롤 진입 시마다 반복할지를 설정할 수 있습니다.

## ✅ 사용법

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

## 💡 내부 동작 방식

• useInView로 요소가 viewport에 들어올 때 감지
• framer-motion의 useAnimation으로 애니메이션 제어
• motion.section 태그로 감싸서 y: 20 → 0, opacity: 0 → 1 전환

---

# 🧭 Header – 반응형 상단 고정 헤더

스크롤 위치에 따라 스타일이 동적으로 변경되는 반응형 Sticky Header입니다. Vanilla Extract + tailwind-variants를 조합하여 구현되었으며, 다크모드와 **접근성(시각적 숨김)**도 고려했습니다.

✅ 기능
• 상단 고정(sticky)
• 스크롤 시 자동 축소 (height, padding, box-shadow 변화)
• BOOKSTORE 로고 및 카테고리 네비게이션, 로그인/회원가입 버튼
• 반응형 레이아웃 (최대 너비: 1020px)
• body.scrolled 클래스를 활용한 스타일 분기

## 💡 스크롤 반응 스타일 적용 방식

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

## 🧱 구조 예시

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


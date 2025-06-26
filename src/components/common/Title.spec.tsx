import { render, screen } from '@testing-library/react';
import Title from './Title';

import { vars } from '@/styles/theme.css';
import { ThemeProvider } from '@/providers/ThemeProvider';

describe('Title 컴포넌트 테스트', () => {
  it('제목 텍스트가 잘 렌더링된다', () => {
    render(
      <ThemeProvider>
        <Title size="lg" color="primary">
          제목
        </Title>
      </ThemeProvider>
    );
    const heading = screen.getByText('제목');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('클래스 이름이 사이즈와 컬러에 따라 적용된다', () => {
    render(
      <ThemeProvider>
        <Title size="md" color="secondary">
          타이틀
        </Title>
      </ThemeProvider>
    );
    const heading = screen.getByText('타이틀');
    expect(heading.className).toContain('md');
    expect(heading.className).toContain('secondary');
  });

  it('스타일이 theme값에 맞게 적용된다 (fontSize)', () => {
    const { container } = render(
      <ThemeProvider>
        <Title size="lg" color="primary">
          큰 제목
        </Title>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({
      fontSize: vars.heading.lg.fontSize,
    });
  });

  it('스타일이 theme값에 맞게 적용된다 (color)', () => {
    const { container } = render(
      <ThemeProvider>
        <Title size="sm" color="default">
          색상
        </Title>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({
      color: vars.color.default,
    });
  });
});

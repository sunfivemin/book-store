// src/components/ui/Input/Input.spec.tsx
import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import React from 'react';

describe('Input', () => {
  it('renders input with label', () => {
    render(<Input label="이메일" />);
    expect(screen.getByLabelText('이메일')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<Input label="비밀번호" error="비밀번호를 입력하세요" />);
    expect(screen.getByText('비밀번호를 입력하세요')).toBeInTheDocument();
  });

  it('applies custom size and variant', () => {
    render(<Input size="sm" variant="underline" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(expect.stringContaining('border-b'));
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input label="비밀번호" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

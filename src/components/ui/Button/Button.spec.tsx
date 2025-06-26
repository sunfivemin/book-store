// src/components/ui/Button/Button.spec.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>클릭</Button>);
    expect(screen.getByRole('button', { name: '클릭' })).toBeInTheDocument();
  });

  it('applies intent and size variants', () => {
    render(
      <Button intent="danger" size="lg">
        삭제
      </Button>
    );
    const button = screen.getByRole('button', { name: '삭제' });

    expect(button).toHaveClass(expect.stringContaining('bg-priority-must'));
    expect(button).toHaveClass(expect.stringContaining('text-white'));
    expect(button).toHaveClass(expect.stringContaining('text-lg'));
  });

  it('allows passing custom className', () => {
    render(<Button className="custom-class">클래스 테스트</Button>);
    const button = screen.getByRole('button', { name: '클래스 테스트' });

    expect(button).toHaveClass('custom-class');
  });
});

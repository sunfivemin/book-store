import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText(/BOOKSTORE 로고/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Header />);
    const navItems = ['카테고리', '로그인', '회원가입'];
    navItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});

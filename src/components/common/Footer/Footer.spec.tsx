import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders logo image', () => {
    render(<Footer />);
    const logo = screen.getByAltText(/BOOKSTORE 로고/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/copyright\(c\), 2025, Book Store\./i)
    ).toBeInTheDocument();
  });
});

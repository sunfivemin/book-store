import { render, screen } from '@testing-library/react';
import BooksEmpty from './BooksEmpty';

describe('BooksEmpty', () => {
  it('renders smile icon and empty message', () => {
    render(<BooksEmpty />);
    // lucide-react Smile 아이콘은 role이 없으므로, svg 태그로 확인
    const icon = screen.getByTestId('books-empty-icon');
    expect(icon).toBeInTheDocument();
    expect(screen.getByText('검색 결과가 없습니다.')).toBeInTheDocument();
  });
}); 
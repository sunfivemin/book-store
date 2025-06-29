import { render, screen } from '@testing-library/react';
import BookItem from './BookItem';
import type { Book } from '@/models/book.model';

const dummyBook: Book = {
  id: 1,
  title: '테스트 도서',
  img: 0,
  category_id: 1,
  form: 'Paperback',
  isbn: '1234567890',
  summary: '테스트 요약',
  detail: '상세 설명',
  author: '홍길동',
  pages: 100,
  contents: '목차',
  price: 12345,
  pub_date: '2024-01-01',
  likes: 7,
};

describe('BookItem', () => {
  it('renders book info and heart icon', () => {
    render(<BookItem book={dummyBook} />);
    // 이미지 alt, 제목, 저자, 요약, 가격, 좋아요 수
    expect(screen.getByAltText(dummyBook.title)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.title)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.author)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.summary)).toBeInTheDocument();
    expect(screen.getByText('12,345원')).toBeInTheDocument();
    expect(screen.getByText(String(dummyBook.likes))).toBeInTheDocument();
    // 하트 아이콘(svg, role 없음, className으로 확인)
    const heartIcon = document.querySelector('svg.text-red-400');
    expect(heartIcon).toBeInTheDocument();
  });
}); 
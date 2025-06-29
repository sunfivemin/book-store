import Title from '@/components/common/Title';
import BooksFilter from '@/components/books/BooksFilter';
import BooksViewSwitcher from '@/components/books/BooksViewSwitcher';
import BooksList from '@/components/books/BooksList';
import BooksEmpty from '@/components/books/BooksEmpty';
import Pagination from '@/components/books/Pagination';
import type { Book } from '@/models/book.model';

function Books() {
  // Book 모델에 맞는 더미 데이터
  const books: Book[] = [
    {
      id: 1,
      title: '별을 여행하는 아이',
      img: 0,
      category_id: 1,
      form: 'Paperback',
      isbn: '1234567890',
      summary: '별을 여행하는 이야기',
      detail: '상세 설명',
      author: '이해리',
      pages: 200,
      contents: '목차',
      price: 15000,
      pub_date: '2024-01-01',
      likes: 1,
    },
    {
      id: 2,
      title: '시간의 정원',
      img: 0,
      category_id: 2,
      form: 'Hardcover',
      isbn: '0987654321',
      summary: '시간을 주제로 한 시집',
      detail: '상세 설명',
      author: '김시인',
      pages: 120,
      contents: '목차',
      price: 12000,
      pub_date: '2023-12-01',
      likes: 0,
    },
    {
      id: 3,
      title: '그림자 게임',
      img: 0,
      category_id: 3,
      form: 'Paperback',
      isbn: '1122334455',
      summary: '그림자를 주제로 한 소설',
      detail: '상세 설명',
      author: '그림자',
      pages: 300,
      contents: '목차',
      price: 25000,
      pub_date: '2022-10-10',
      likes: 2,
    },
  ];
  const isEmpty = books.length === 0;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <Title size="lg" color="primary">
        도서 검색 결과
      </Title>
      <div className="mt-6">
        <BooksFilter />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <BooksViewSwitcher />
        {/* 정렬 등 추가 가능 */}
      </div>
      <div className="mt-8">
        {isEmpty ? <BooksEmpty /> : <BooksList books={books} />}
      </div>
      <div className="mt-8">
        <Pagination />
      </div>
    </section>
  );
}

export default Books;

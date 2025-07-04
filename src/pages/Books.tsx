import Title from '@/components/common/Title';
import BooksFilter from '@/components/books/BooksFilter';
import BooksViewSwitcher from '@/components/books/BooksViewSwitcher';
import BooksList from '@/components/books/BooksList';
import BooksEmpty from '@/components/books/BooksEmpty';
import BooksLoading from '@/components/books/BooksLoading';
import Pagination from '@/components/books/Pagination';
import { useBooks } from '@/hooks/useBooks';
import { mainContainer } from '@/components/layout/layout.css';

function Books() {
  const { books, pagination, isBooksLoading, isEmpty } = useBooks();

  return (
    <section className={mainContainer}>
      <div className="flex justify-between items-center w-full">
        <Title size="lg" color="primary">
          도서 검색 결과
        </Title>
        <BooksViewSwitcher />
      </div>

      <div className="mt-6">
        <BooksFilter />
      </div>

      <div className="mt-8 min-h-[600px] flex-1 h-full flex items-center justify-center">
        {isBooksLoading ? (
          <BooksLoading />
        ) : isEmpty ? (
          <BooksEmpty />
        ) : (
          <BooksList books={books} />
        )}
      </div>

      <div className="mt-8">
        <Pagination pagination={pagination} />
      </div>
    </section>
  );
}

export default Books;

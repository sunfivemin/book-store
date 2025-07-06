/*
 * 무한스크롤
 */
import Title from '@/components/common/Title';
import BooksFilter from '@/components/books/BooksFilter';
import BooksViewSwitcher from '@/components/books/BooksViewSwitcher';
import BooksList from '@/components/books/BooksList';
import BooksEmpty from '@/components/books/BooksEmpty';
import BooksLoading from '@/components/books/BooksLoading';
import { mainContainer } from '@/components/layout/layout.css';
import { useBooksInfinite } from '@/hooks/useBooksInfinite';
import InfiniteScrollObserver from '@/components/common/InfiniteScrollObserver'; // 옵저버 컴포넌트

function Books() {
  const { books, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useBooksInfinite();

  const isEmpty = !isLoading && books.length === 0;

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

      <div className="mt-8 min-h-[600px] flex-1 h-full">
        {isLoading ? (
          <BooksLoading />
        ) : isEmpty ? (
          <BooksEmpty />
        ) : (
          <>
            <BooksList books={books} />

            {/* 스크롤 옵저버 (맨 아래 도달 감지) */}
            <InfiniteScrollObserver
              onIntersect={fetchNextPage}
              disabled={!hasNextPage || isFetchingNextPage}
            />

            {/* 다음 페이지 로딩 중일 때 */}
            {isFetchingNextPage && (
              <div className="flex justify-center items-center gap-2 mt-6 text-sm text-gray-500">
                <svg
                  className="animate-spin h-4 w-4 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                📚 도서를 불러오는 중입니다...
              </div>
            )}

            {/* 마지막 페이지 안내 */}
            {!hasNextPage && (
              <div className="mt-8 text-center text-sm text-gray-400">
                마지막 페이지입니다 🙌
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Books;

/*
 * 페이지네이션
 */

// import Title from '@/components/common/Title';
// import BooksFilter from '@/components/books/BooksFilter';
// import BooksViewSwitcher from '@/components/books/BooksViewSwitcher';
// import BooksList from '@/components/books/BooksList';
// import BooksEmpty from '@/components/books/BooksEmpty';
// import BooksLoading from '@/components/books/BooksLoading';
// import Pagination from '@/components/books/Pagination';
// import { useBooks } from '@/hooks/useBooks';
// import { mainContainer } from '@/components/layout/layout.css';

// function Books() {
//   const { books, pagination, isBooksLoading, isEmpty } = useBooks();

//   return (
//     <section className={mainContainer}>
//       <div className="flex justify-between items-center w-full">
//         <Title size="lg" color="primary">
//           도서 검색 결과
//         </Title>
//         <BooksViewSwitcher />
//       </div>

//       <div className="mt-6">
//         <BooksFilter />
//       </div>

//       <div className="mt-8 min-h-[600px] flex-1 h-full flex items-center justify-center">
//         {isBooksLoading ? (
//           <BooksLoading />
//         ) : isEmpty ? (
//           <BooksEmpty />
//         ) : (
//           <BooksList books={books} />
//         )}
//       </div>

//       <div className="mt-8">
//         <Pagination pagination={pagination} />
//       </div>
//     </section>
//   );
// }

// export default Books;

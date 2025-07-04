// src/hooks/useBooks.ts
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBooks } from '@/api/books.api';
import type { FetchBooksResponse } from '@/api/books.api'; // 반드시 export 되어 있어야 함
import { QUERYSTRING } from '@/constants/querystring';
import { LIMIT } from '@/constants/pagination';

export const useBooks = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const category_id = params.get(QUERYSTRING.CATEGORY_ID)
    ? Number(params.get(QUERYSTRING.CATEGORY_ID))
    : undefined;

  const news = params.get(QUERYSTRING.NEWS) === 'true' ? true : undefined;

  const currentPage = params.get(QUERYSTRING.PAGE)
    ? Number(params.get(QUERYSTRING.PAGE))
    : 1;

  const {
    data: booksData,
    isLoading: isBooksLoading,
    isError,
  } = useQuery<FetchBooksResponse>({
    queryKey: ['books', location.search],
    queryFn: () =>
      fetchBooks({
        category_id,
        news,
        currentPage,
        limit: LIMIT,
      }),
    staleTime: 1000 * 60 * 5,
  });

  return {
    books: booksData?.books || [],
    pagination: booksData?.pagination || { totalCount: 0, currentPage: 1 },
    isEmpty: booksData?.books.length === 0,
    isBooksLoading,
    isError,
  };
};

import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchBooks } from '@/api/books.api';
import { useLocation } from 'react-router-dom';
import { QUERYSTRING } from '@/constants/querystring';
import { LIMIT } from '@/constants/pagination';
import type { FetchBooksResponse } from '@/api/books.api';

export const useBooksInfinite = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const category_id = params.get(QUERYSTRING.CATEGORY_ID)
    ? Number(params.get(QUERYSTRING.CATEGORY_ID))
    : undefined;
  const news = params.get(QUERYSTRING.NEWS) === 'true' ? true : undefined;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery<FetchBooksResponse>({
    queryKey: ['books/infinite', location.search],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      fetchBooks({
        category_id,
        news,
        currentPage: Number(pageParam),
        limit: LIMIT,
      }),
    getNextPageParam: lastPage => {
      const totalPages = Math.ceil(lastPage.pagination.totalCount / LIMIT);
      return lastPage.pagination.currentPage < totalPages
        ? lastPage.pagination.currentPage + 1
        : undefined;
    },
    staleTime: 1000 * 60 * 5,
  });

  return {
    books: data?.pages.flatMap(p => p.books) ?? [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};

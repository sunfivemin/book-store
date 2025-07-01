import type { Book, BookDetail } from '@/models/book.model';
import type { Pagination } from '@/models/pagination.model';
import { httpClient } from './http';

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit?: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (
  params: FetchBooksParams
): Promise<FetchBooksResponse> => {
  try {
    const response = await httpClient.get<FetchBooksResponse>('/books', {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('도서 목록 요청 실패:', error);
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: params.currentPage || 1,
      },
    };
  }
};

export const fetchBook = async (bookId: number) => {
  const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
  return response.data;
};

export const likeBook = async (bookId: number) => {
  const response = await httpClient.post(`/likes/${bookId}`);
  return response.data;
};

export const unlikeBook = async (bookId: number) => {
  const response = await httpClient.delete(`/likes/${bookId}`);
  return response.data;
};

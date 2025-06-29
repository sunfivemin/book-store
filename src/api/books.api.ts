import type { Book } from '@/models/book.model';
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

export const fetchBooks = async (params: FetchBooksParams): Promise<FetchBooksResponse> => {
  try {
    const response = await httpClient.get<FetchBooksResponse>('/books', { params });
    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: params.currentPage || 1,
      },
    };
  }
}; 
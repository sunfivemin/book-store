// src/api/review.api.ts
import { requestHandler } from './http';
import type { BookReviewItem, BookReviewItemWrite } from '@/models/book.model';

export const fetchBookReview = async (
  bookId: string
): Promise<BookReviewItem[]> => {
  return await requestHandler<undefined, BookReviewItem[]>(
    'get',
    `/reviews/${bookId}`
  );
};

export const addBookReview = async (
  bookId: string,
  data: BookReviewItemWrite
): Promise<{ message: string }> => {
  return await requestHandler<BookReviewItemWrite, { message: string }>(
    'post',
    `/reviews/${bookId}`,
    data
  );
};

export const fetchReviewAll = async (): Promise<BookReviewItem[]> =>
  requestHandler('get', '/reviews');

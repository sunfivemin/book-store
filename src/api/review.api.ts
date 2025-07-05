// src/api/review.api.ts
import { requestHandler } from './http';
import type { BookReviewItem } from '@/models/book.model';

export const fetchBookReview = async (
  bookId: string
): Promise<BookReviewItem[]> => {
  return await requestHandler<undefined, BookReviewItem[]>(
    'get',
    `/reviews/${bookId}`
  );
};

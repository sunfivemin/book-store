import { setupWorker } from 'msw/browser';
import { reviewsById } from './review';

export const worker = setupWorker(
  reviewsById
  // , booksHandler, authHandler 등 추가 가능
);

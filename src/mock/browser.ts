import { setupWorker } from 'msw/browser';
import { reviewsById, addReview, reviewForMain } from './review';
import { bestBooks } from './books';

export const worker = setupWorker(
  reviewsById,
  addReview,
  reviewForMain,
  bestBooks
);

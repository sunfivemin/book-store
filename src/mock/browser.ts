import { setupWorker } from 'msw/browser';
import { reviewsById, addReview, reviewForMain } from './review';
import { bestBooks } from './books';
import { banners } from './banner';

export const worker = setupWorker(
  reviewsById,
  addReview,
  reviewForMain,
  bestBooks,
  banners
);

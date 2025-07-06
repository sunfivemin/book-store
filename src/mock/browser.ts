import { setupWorker } from 'msw/browser';
import { reviewsById, addReview, reviewForMain } from './review';

export const worker = setupWorker(reviewsById, addReview, reviewForMain);

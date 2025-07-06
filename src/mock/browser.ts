import { setupWorker } from 'msw/browser';
import { reviewsById, addReview } from './review';

export const worker = setupWorker(reviewsById, addReview);

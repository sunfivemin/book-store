// src/mock/review.ts
import { HttpResponse, http } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';
import type { BookReviewItem } from '@/models/book.model';

// 📌 bookId 별로 가짜 리뷰 3개 생성
const generateMockReviews = (_bookId: string, count = 3): BookReviewItem[] => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    userName: faker.person.fullName(),
    content: faker.lorem.sentence(),
    createdAt: faker.date.recent({ days: 10 }).toISOString(),
    score: faker.number.int({ min: 1, max: 5 }),
  }));
};

// 📌 MSW 핸들러 정의
export const reviewsById = http.get(
  'http://localhost:9999/reviews/:bookId',
  ({ params }) => {
    const { bookId } = params;
    const data = generateMockReviews(bookId as string);
    return HttpResponse.json(data);
  }
);

export const addReview = http.post(
  'http://localhost:9999/reviews/:bookId',
  async ({ request }) => {
    const body = await request.json();
    console.log('📦 리뷰 등록 요청:', body);
    return HttpResponse.json(
      { message: '리뷰가 등록되었습니다.' },
      { status: 200 }
    );
  }
);

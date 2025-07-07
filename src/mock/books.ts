// src/mock/books.ts
import { http, HttpResponse } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';
import type { Book } from '@/models/book.model';

// 📌 가짜 베스트셀러 목록 생성
const generateBestBooks = (count = 8): Book[] => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 100, // 실제 ID와 충돌 피하려고 100부터
    title: faker.lorem.words({ min: 2, max: 4 }),
    author: faker.person.fullName(),
    summary: faker.lorem.sentence(),
    detail: faker.lorem.paragraph(),
    // img: faker.number.int({ min: 1, max: 50 }),
    img: faker.helpers.rangeToNumber({ min: 10, max: 108 }),
    category_id: faker.number.int({ min: 1, max: 4 }),
    form: 'paper',
    isbn: faker.commerce.isbn(),
    price: faker.number.int({ min: 10000, max: 30000 }),
    pages: faker.number.int({ min: 100, max: 500 }),
    contents: faker.lorem.paragraph(),
    likes: faker.number.int({ min: 0, max: 1000 }),
    pub_date: faker.date.recent({ days: 30 }).toISOString(),
  }));
};

// 📌 베스트셀러 핸들러 등록
export const bestBooks = http.get('http://localhost:9999/books/best', () => {
  const data = generateBestBooks();
  return HttpResponse.json(data);
});

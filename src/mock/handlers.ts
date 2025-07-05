// src/mock/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/books', () => {
    return HttpResponse.json({
      books: [
        {
          id: 1,
          title: 'Mock Book',
          author: 'John Doe',
          price: 10000,
        },
      ],
      pagination: {
        totalCount: 1,
        currentPage: 1,
      },
    });
  }),
];

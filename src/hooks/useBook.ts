import { fetchBook } from '@/api/books.api';
import type { BookDetail } from '@/models/book.model';
import { useEffect, useState } from 'react';

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);

  useEffect(() => {
    if (!bookId) return;

    fetchBook(bookId).then(book => {
      setBook(book);
    });
  }, [bookId]);

  return { book };
};

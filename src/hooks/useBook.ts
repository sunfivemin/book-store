import { fetchBook, likeBook, unlikeBook } from '@/api/books.api';
import type { BookDetail } from '@/models/book.model';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/authStore';

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { isLoggedIn } = useAuthStore();

  const likeOrUnlike = () => {
    if (!book) return;

    const updated = { ...book };
    const request = book.liked ? unlikeBook(book.id) : likeBook(book.id);

    request.then(() => {
      updated.liked = book.liked ? 0 : 1;
      updated.likes += book.liked ? -1 : 1;
      setBook(updated);
    });
  };

  useEffect(() => {
    if (!bookId) return;

    setIsLoading(true);
    setError(null);

    fetchBook(Number(bookId))
      .then(setBook)
      .catch(err =>
        setError(err instanceof Error ? err : new Error('알 수 없는 오류'))
      )
      .finally(() => setIsLoading(false));
  }, [bookId]);

  return { book, isLoading, error, likeOrUnlike, isLoggedIn };
};

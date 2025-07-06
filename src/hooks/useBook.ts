import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { fetchBook, likeBook, unlikeBook } from '@/api/books.api';
import { addCart } from '@/api/cart.api';
import { fetchBookReview, addBookReview } from '@/api/review.api';
import { useAuthStore } from '@/store/authStore';
import { useCartStore } from '@/store/cartStore';

import type {
  BookDetail,
  BookReviewItem,
  BookReviewItemWrite,
} from '@/models/book.model';

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [cartAdded, setCartAdded] = useState(false);
  const [reviews, setReview] = useState<BookReviewItem[]>([]);

  const { isLoggedIn } = useAuthStore();
  const { addToCart, removeFromCart } = useCartStore();

  // ❤️ 좋아요/취소
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

  // 🛒 장바구니 추가
  const addBookToCart = async (quantity: number) => {
    if (!book) return;
    addToCart(book, quantity);
    setCartAdded(true);
    try {
      await addCart({ book_id: book.id, quantity });
      toast.success(`${quantity}권 장바구니에 담겼습니다.`);
    } catch (err) {
      removeFromCart(book.id);
      toast.error('장바구니 추가 실패');
      console.error(err);
    } finally {
      setTimeout(() => setCartAdded(false), 3000);
    }
  };

  // ✍️ 리뷰 작성
  const addReview = (data: BookReviewItemWrite) => {
    if (!book) return;
    addBookReview(book.id.toString(), data)
      .then(res => {
        toast.success(res.message || '리뷰가 등록되었습니다.');
        return fetchBookReview(book.id.toString());
      })
      .then(setReview)
      .catch(() => toast.error('리뷰 등록 중 오류가 발생했습니다.'));
  };

  // 📘 책 정보 가져오기
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

  // 💬 리뷰 가져오기
  useEffect(() => {
    if (!bookId) return;
    fetchBookReview(bookId).then(setReview);
  }, [bookId]);

  return {
    book,
    isLoading,
    error,
    isLoggedIn,
    likeOrUnlike,
    addBookToCart,
    cartAdded,
    reviews,
    addReview,
  };
};

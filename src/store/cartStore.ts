import { create } from 'zustand';
import type { BookDetail } from '@/models/book.model';

interface CartItem {
  book: BookDetail;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (book: BookDetail, quantity: number) => void;
  removeFromCart: (bookId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>(set => ({
  items: [],
  addToCart: (book, quantity) =>
    set(state => {
      const exists = state.items.find(item => item.book.id === book.id);
      if (exists) {
        return {
          items: state.items.map(item =>
            item.book.id === book.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          items: [...state.items, { book, quantity }],
        };
      }
    }),

  removeFromCart: bookId =>
    set(state => ({
      items: state.items.filter(item => item.book.id !== bookId),
    })),

  clearCart: () => set({ items: [] }),
}));

import { deleteCart, fetchCart } from '@/api/cart.api';
import type { Cart } from '@/models/cart.model';
import { useEffect, useState } from 'react';

export const useCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteCartItem = async (id: number) => {
    try {
      await deleteCart(id);
      setCarts(prev => {
        const updated = prev.filter(cart => cart.id !== id);
        setIsEmpty(updated.length === 0);
        return updated;
      });
    } catch (e) {
      console.error('장바구니 삭제 실패:', e);
    }
  };

  useEffect(() => {
    fetchCart().then(carts => {
      setCarts(carts);
      setIsEmpty(carts.length === 0);
    });
  }, []);

  return { carts, isEmpty, deleteCartItem };
};

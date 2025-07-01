import { useState } from 'react';
import type { BookDetail } from '@/models/book.model';
import { Button } from '@/components/ui/Button/Button';
import { toast } from 'react-hot-toast';

import { controlButton, quantityInput, wrapper } from './AddToCart.css';
import { addCart } from '@/api/cart.api';
import { useCartStore } from '@/store/cartStore';

interface Props {
  book: BookDetail;
}

function AddToCart({ book }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const { addToCart, removeFromCart } = useCartStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value > 0 ? value : 1);
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAdd = async () => {
    addToCart(book, quantity); // 1. 로컬 먼저
    setLoading(true); // ✅ 로딩 시작

    try {
      await addCart({ book_id: book.id, quantity }); // 2. 서버 요청
      toast.success(`${quantity}권 장바구니에 추가되었습니다!`);
    } catch (err) {
      removeFromCart(book.id); // 3. 실패 시 롤백
      toast.error('장바구니 담기 실패');
      console.error(err);
    } finally {
      setLoading(false); // ✅ 로딩 종료
    }
  };

  return (
    <div className={wrapper}>
      <button
        className={controlButton}
        onClick={handleDecrease}
        disabled={loading}
      >
        -
      </button>
      <input
        className={quantityInput}
        type="number"
        value={quantity}
        onChange={handleChange}
        min={1}
        disabled={loading}
      />
      <button
        className={controlButton}
        onClick={handleIncrease}
        disabled={loading}
      >
        +
      </button>
      <Button size="md" color="primary" onClick={handleAdd} disabled={loading}>
        장바구니 담기
      </Button>
    </div>
  );
}

export default AddToCart;

import { useState } from 'react';
import type { BookDetail } from '@/models/book.model';
import { Button } from '@/components/ui/Button/Button';
import { toast } from 'react-hot-toast';

import {
  addedMessageWrapper,
  addedText,
  controlButton,
  linkToCart,
  quantityInput,
  wrapper,
} from './AddToCart.css';

import { addCart } from '@/api/cart.api';
import { useCartStore } from '@/store/cartStore';
import { Link } from 'react-router-dom';

interface Props {
  book: BookDetail;
}

function AddToCart({ book }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

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
    addToCart(book, quantity);
    setLoading(true);

    try {
      await addCart({ book_id: book.id, quantity });
      toast.success(`${quantity}권 장바구니에 추가되었습니다!`);
      setCartAdded(true); // ✅ 메시지 표시
      setTimeout(() => setCartAdded(false), 3000); // ✅ 3초 후 숨김
    } catch (err) {
      removeFromCart(book.id);
      toast.error('장바구니 담기 실패');
      console.error(err);
    } finally {
      setLoading(false);
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
      <Button size="md" intent="primary" onClick={handleAdd} disabled={loading}>
        장바구니 담기
      </Button>

      {/* ✅ 메시지 표시 영역 */}
      {cartAdded && (
        <div className={addedMessageWrapper}>
          <p className={addedText}>장바구니에 추가되었습니다.</p>
          <Link to="/cart" className={linkToCart}>
            장바구니로 이동
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddToCart;

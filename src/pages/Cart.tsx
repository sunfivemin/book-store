import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import toast from 'react-hot-toast';

import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import Title from '@/components/common/Title';
import Empty from '@/components/common/Footer/Empty';
import { useCart } from '@/hooks/useCart';
import { mainContainer } from '@/components/layout/layout.css';
import { Button } from '@/components/ui/Button/Button';
import type { OrderSheet } from '@/models/order.model';
import { Modal } from '@/components/ui/Modal/Modal';

function Cart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { carts, isEmpty, deleteCartItem } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleCheckItem = (id: number) => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleItemDelete = (id: number) => {
    deleteCartItem(id);
  };

  const totalQuantity = useMemo(() => {
    return carts.reduce(
      (acc, cart) =>
        checkedItems.includes(cart.id) ? acc + cart.quantity : acc,
      0
    );
  }, [carts, checkedItems]);

  const totalPrice = useMemo(() => {
    return carts.reduce(
      (acc, cart) =>
        checkedItems.includes(cart.id) ? acc + cart.price * cart.quantity : acc,
      0
    );
  }, [carts, checkedItems]);

  const handleOrder = () => {
    if (checkedItems.length === 0) {
      toast.error('주문할 상품을 선택해주세요.');
      return;
    }
    setIsModalOpen(true);
  };

  const handleOrderConfirm = () => {
    const firstBook = carts.find(cart => checkedItems.includes(cart.id));
    const orderData: Omit<OrderSheet, 'delivery'> = {
      items: carts
        .filter(cart => checkedItems.includes(cart.id))
        .map(cart => ({
          book_id: cart.book_id,
          quantity: cart.quantity,
        })),
      totalPrice,
      totalQuantity,
      firstBookTitle: firstBook?.title ?? '제목 없음',
    };

    navigate('/order', { state: orderData });
    setIsModalOpen(false);
  };

  return (
    <section className={mainContainer}>
      <Title size="lg" color="primary">
        장바구니
      </Title>

      {isEmpty ? (
        <Empty
          icon={<FaShoppingCart size={46} />}
          title="장바구니가 비어있습니다."
          description={<Link to="/books">장바구니를 채워보세요.</Link>}
        />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="flex-1">
            {carts.map(item => (
              <CartItem
                key={item.id}
                cart={item}
                checkedItems={checkedItems}
                onCheck={handleCheckItem}
                onDelete={handleItemDelete}
              />
            ))}
          </div>
          <div className="w-full lg:w-[240px] shrink-0 self-start space-y-4">
            <CartSummary
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
            />
            <Button
              intent="primary"
              size="md"
              className="w-full"
              onClick={handleOrder}
            >
              주문하기
            </Button>
            <Modal
              open={isModalOpen}
              backdrop="dark"
              className="w-[300px] text-center"
            >
              <p className="mb-4">선택한 상품을 주문하시겠습니까?</p>
              <div className="flex justify-center gap-2">
                <Button intent="elevated" onClick={() => setIsModalOpen(false)}>
                  취소
                </Button>
                <Button intent="primary" onClick={handleOrderConfirm}>
                  주문
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;

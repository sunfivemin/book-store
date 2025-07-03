import { useState } from 'react';
import CartItem from '@/components/cart/CartItem';
import Title from '@/components/common/Title';
import { mainContainer } from '@/components/layout/layout.css';
import { useCart } from '@/hooks/useCart';
import Empty from '@/components/common/Footer/Empty';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Cart() {
  const { carts, isEmpty, deleteCartItem } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter(item => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };
  // 내부에서 삭제 실행
  const handleItemDelete = async (id: number) => {
    deleteCartItem(id);
  };

  return (
    <section className={mainContainer}>
      <Title size="lg" color="primary">
        장바구니
      </Title>

      <div>
        {isEmpty ? (
          <Empty
            icon={<FaShoppingCart size={46} />}
            title="장바구니가 비어있습니다."
            description={<Link to="/books">장바구니를 채워보세요.</Link>}
          />
        ) : (
          carts.map(item => (
            <CartItem
              key={item.id}
              cart={item}
              checkedItems={checkedItems}
              onCheck={handleCheckItem}
              onDelete={handleItemDelete}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Cart;

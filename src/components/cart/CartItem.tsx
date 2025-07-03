import type { Cart } from '@/models/cart.model';
import Title from '@/components/common/Title';
import { formatNumber } from '@/utils/format';
import * as styles from './CartItem.css';
import CheckIconButton from './CheckIconButton';
import { useMemo, useState } from 'react';
import { Button } from '../ui/Button/Button';
import { Modal } from '../ui/Modal/Modal';

interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

function CartItem({ cart, checkedItems, onCheck, onDelete }: Props) {
  const [open, setOpen] = useState(false);

  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const handleCheck = () => {
    onCheck(cart.id);
  };

  const handleDeleteConfirm = () => {
    onDelete(cart.id);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
        <div>
          <Title size="md" color="primary">
            {cart.title}
          </Title>
          <p className={styles.summary}>{cart.summary}</p>
          <p className={styles.price}>{formatNumber(cart.price)} 원</p>
          <p className={styles.quantity}>{cart.quantity} 권</p>
        </div>
      </div>

      <Button size="md" intent="danger" onClick={() => setOpen(true)}>
        장바구니 삭제
      </Button>

      {/* 삭제 확인 모달 */}
      <Modal open={open} backdrop="dark" className="w-[300px] text-center">
        <p className="mb-4">정말 삭제하시겠습니까?</p>
        <div className="flex justify-center gap-2">
          <Button intent="elevated" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button intent="danger" onClick={handleDeleteConfirm}>
            삭제
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default CartItem;

import { formatNumber } from '@/utils/format';

import * as styles from './CartSummary.css';

interface Props {
  totalQuantity: number;
  totalPrice: number;
}

function CartSummary({ totalQuantity, totalPrice }: Props) {
  return (
    <div className={styles.summaryBox}>
      <h2 className={styles.title}>🛒 주문 요약</h2>
      <dl>
        <div className={styles.row}>
          <dt className={styles.label}>총 수량</dt>
          <dd>{totalQuantity} 권</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>총 금액</dt>
          <dd>{formatNumber(totalPrice)} 원</dd>
        </div>
      </dl>
    </div>
  );
}

export default CartSummary;

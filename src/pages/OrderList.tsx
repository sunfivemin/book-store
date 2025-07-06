// src/pages/OrderList.tsx
import { mainContainer } from '@/components/layout/layout.css';
import Title from '@/components/common/Title';
import {
  wrapper,
  table,
  th,
  td,
  detailBox,
  detailItem,
  bookTitle,
} from './OrderList.css';
import { Button } from '@/components/ui/Button/Button';
import { formatNumber } from '@/utils/format';
import { useOrders } from '@/hooks/useOrders';
import React from 'react';

function OrderList() {
  const { orders, selectedItemId, selectOrderItem } = useOrders();

  return (
    <section className={mainContainer}>
      <Title size="lg" color="primary">
        주문 내역
      </Title>

      <div className={wrapper}>
        <table className={table}>
          <thead>
            <tr>
              <th className={th}>id</th>
              <th className={th}>주문일자</th>
              <th className={th}>주소</th>
              <th className={th}>수령인</th>
              <th className={th}>전화번호</th>
              <th className={th}>대표상품명</th>
              <th className={th}>수량</th>
              <th className={th}>금액</th>
              <th className={th}></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <React.Fragment key={order.id}>
                <tr key={order.id}>
                  <td className={td}>{order.id}</td>
                  <td className={td}>{order.created_at.split('T')[0]}</td>
                  <td className={td}>{order.address}</td>
                  <td className={td}>{order.receiver}</td>
                  <td className={td}>{order.contact}</td>
                  <td className={td}>{order.book_title}</td>
                  <td className={td}>{order.total_quantity}</td>
                  <td className={td}>{formatNumber(order.total_price)} 원</td>
                  <td className={td}>
                    <Button
                      size="sm"
                      intent="primary"
                      onClick={() => selectOrderItem(order.id)}
                    >
                      자세히
                    </Button>
                  </td>
                </tr>

                {selectedItemId === order.id && order.detail && (
                  <tr>
                    <td className={td} colSpan={9}>
                      <div className={detailBox}>
                        {order.detail.map(item => (
                          <div key={item.book_id} className={detailItem}>
                            <span className={bookTitle}>{item.title}</span>
                            <span>{item.author}</span>
                            <span>{formatNumber(item.price)} 원</span>
                            <span>{item.quantity} 권</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OrderList;

// src/pages/Order.tsx
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Title from '@/components/common/Title';
import { Button } from '@/components/ui/Button/Button';
import CartSummary from '@/components/cart/CartSummary';

import type { Delivery, OrderSheet } from '@/models/order.model';
import { Input } from '@/components/ui/Input/Input';

interface DeliveryForm extends Delivery {
  addressDetail: string;
}

function Order() {
  const location = useLocation();
  const orderDataFromCart = location.state as Omit<OrderSheet, 'delivery'>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryForm>();

  const handlePay = (data: DeliveryForm) => {
    const orderData: OrderSheet = {
      ...orderDataFromCart,
      delivery: {
        address: `${data.address} ${data.addressDetail}`,
        receiver: data.receiver,
        contact: data.contact,
      },
    };
    console.log('주문 데이터:', orderData);
    // TODO: API 연동 또는 결제 로직 처리
  };

  if (!orderDataFromCart) {
    return <p className="p-8 text-center">잘못된 접근입니다.</p>;
  }

  const { totalPrice, totalQuantity, firstBookTitle } = orderDataFromCart;

  return (
    <section className="p-8 space-y-8">
      <Title size="lg" color="primary">
        주문서 작성
      </Title>

      <form
        onSubmit={handleSubmit(handlePay)}
        className="flex flex-col lg:flex-row gap-8"
      >
        {/* 📦 배송 정보 + 상품 */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-col gap-6">
            {/* 주소 필드 */}
            <div>
              <label className="pl-2 block text-sm mb-1">주소</label>
              <div className="flex gap-2 items-top">
                <Input
                  {...register('address', { required: '주소를 입력해 주세요' })}
                  error={errors.address?.message}
                  className="flex-1"
                />
                <Button intent="elevated" size="md" className="h-[42px]">
                  주소 찾기
                </Button>
              </div>
            </div>
            {/* 상세 주소 */}
            <div>
              <Input
                label="상세 주소"
                {...register('addressDetail', {
                  required: '상세 주소를 입력해 주세요',
                })}
                error={errors.addressDetail?.message}
              />
            </div>
            {/* 수령인 */}
            <div>
              <Input
                label="수령인"
                {...register('receiver', {
                  required: '수령인을 입력해 주세요',
                })}
                error={errors.receiver?.message}
              />
            </div>
            {/* 전화번호 */}
            <div>
              <Input
                label="전화번호"
                {...register('contact', {
                  required: '전화번호를 입력해 주세요',
                })}
                error={errors.contact?.message}
              />
            </div>
          </div>

          {/* 주문 상품 */}
          <div className="border p-4 rounded">
            <h2 className="text-lg font-bold mb-2">주문 상품</h2>
            <p className="text-sm">
              <strong>{firstBookTitle}</strong> 등 총 {totalQuantity}권
            </p>
          </div>
        </div>

        {/* 🧾 주문 요약 */}
        <div className="w-full lg:w-[240px] shrink-0 self-start space-y-4">
          <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
          <Button intent="primary" size="lg" className="w-full" type="submit">
            결제하기
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Order;

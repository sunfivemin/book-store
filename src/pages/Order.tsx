// src/pages/Order.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Title from '@/components/common/Title';
import { Button } from '@/components/ui/Button/Button';
import CartSummary from '@/components/cart/CartSummary';
import { Input } from '@/components/ui/Input/Input';
import FindAddressButton from '@/components/order/FindAddressButton';
import { Modal } from '@/components/ui/Modal/Modal';
import type { Delivery, OrderSheet } from '@/models/order.model';
import { order } from '@/api/order.api';
import { getToken } from '@/utils/token';

interface DeliveryForm extends Delivery {
  addressDetail: string;
}

function Order() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDataFromCart = location.state as Omit<OrderSheet, 'delivery'>;

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [latestData, setLatestData] = useState<DeliveryForm | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DeliveryForm>();

  const handlePay = (data: DeliveryForm) => {
    setLatestData(data);
    setConfirmOpen(true);
  };

  const submitOrder = async () => {
    if (!latestData) return;

    const token = getToken();
    if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    const orderData: OrderSheet = {
      ...orderDataFromCart,
      delivery: {
        address: `${latestData.address} ${latestData.addressDetail}`,
        receiver: latestData.receiver,
        contact: latestData.contact,
      },
    };

    try {
      await order(orderData);
      setConfirmOpen(false);
      setAlertOpen(true);
    } catch {
      alert('주문 실패. 다시 시도해주세요.');
    }
  };

  if (!orderDataFromCart) {
    return <p className="p-8 text-center">잘못된 접근입니다.</p>;
  }

  const { totalPrice, totalQuantity, firstBookTitle } = orderDataFromCart;

  return (
    <>
      <section className="p-8 space-y-8">
        <Title size="lg" color="primary">
          주문서 작성
        </Title>

        <form
          onSubmit={handleSubmit(handlePay)}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* 배송 정보 */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col gap-6">
              <div>
                <label className="pl-2 block text-sm mb-1">주소</label>
                <div className="flex gap-2 items-top">
                  <Input
                    {...register('address', {
                      required: '주소를 입력해 주세요',
                    })}
                    error={errors.address?.message}
                    className="flex-1"
                  />
                  <FindAddressButton
                    onCompleted={address => {
                      setValue('address', address);
                    }}
                  />
                </div>
              </div>
              <Input
                label="상세 주소"
                {...register('addressDetail', {
                  required: '상세 주소를 입력해 주세요',
                })}
                error={errors.addressDetail?.message}
              />
              <Input
                label="수령인"
                {...register('receiver', {
                  required: '수령인을 입력해 주세요',
                })}
                error={errors.receiver?.message}
              />
              <Input
                label="전화번호"
                {...register('contact', {
                  required: '전화번호를 입력해 주세요',
                })}
                error={errors.contact?.message}
              />
            </div>

            <div className="border p-4 rounded">
              <h2 className="text-lg font-bold mb-2">주문 상품</h2>
              <p className="text-sm">
                <strong>{firstBookTitle}</strong> 등 총 {totalQuantity}권
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[240px] shrink-0 self-start space-y-4">
            <CartSummary
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
            />
            <Button intent="primary" size="lg" className="w-full" type="submit">
              결제하기
            </Button>
          </div>
        </form>
      </section>

      {/* 주문 확인 모달 */}
      <Modal
        open={confirmOpen}
        backdrop="dark"
        className="w-[300px] text-center"
      >
        <p className="mb-4">주문을 진행하시겠습니까?</p>
        <div className="flex justify-center gap-2">
          <Button intent="elevated" onClick={() => setConfirmOpen(false)}>
            취소
          </Button>
          <Button intent="primary" onClick={submitOrder}>
            확인
          </Button>
        </div>
      </Modal>

      {/* 주문 완료 모달 */}
      <Modal open={alertOpen} backdrop="dark" className="w-[300px] text-center">
        <p className="mb-4">주문이 완료되었습니다!</p>
        <Button
          intent="primary"
          onClick={() => {
            setAlertOpen(false);
            navigate('/orderList');
          }}
        >
          확인
        </Button>
      </Modal>
    </>
  );
}

export default Order;

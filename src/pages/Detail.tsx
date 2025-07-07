import Title from '@/components/common/Title';
import { FadeInSection } from '@/components/motion/FadeInSection';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { Input } from '@/components/ui/Input/Input';
import { Modal } from '@/components/ui/Modal/Modal';
import { useRef, useState } from 'react';

const Detail = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement>(null); // ✅ ref 선언

  const handleFocus = () => {
    nameRef.current?.focus(); // ✅ ref 사용하여 포커스
  };
  return (
    <>
      <div className="p-6 space-y-6">
        <Title size="lg" color="primary">
          안녕하세요
        </Title>
        <Title size="sm" color="input">
          작은 타이틀
        </Title>

        <br />
        <Button intent="primary" size="sm">
          Primary Small
        </Button>
        <Button intent="danger" size="md">
          Danger Medium
        </Button>
        <Button intent="ghost" size="lg">
          Ghost Large
        </Button>

        <div className="bg-white text-black dark:bg-slate-600 dark:text-white">
          인라인 다크모드
        </div>

        {/* ✅ Input 사용 */}
        <div className="space-y-2">
          <label htmlFor="name" className="block font-semibold">
            이름
          </label>
          <Input
            id="name"
            ref={nameRef} // ✅ ref 연결
            value={name}
            placeholder="이름을 입력하세요"
            onChange={e => setName(e.target.value)}
          />

          <Button onClick={handleFocus} intent="ghost">
            이름 입력창 포커스
          </Button>

          <Input
            label="이메일"
            placeholder="이메일을 입력하세요"
            variant="outline"
          />

          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            error="비밀번호는 필수입니다"
            variant="outline"
          />
        </div>

        <Button intent="primary" onClick={() => setOpen(true)}>
          모달 열기
        </Button>

        <Modal open={open} backdrop="dark" className="w-[300px] text-center">
          <p className="mb-4">🧊 커스텀 모달 내용입니다!</p>
          <p className="text-sm text-gray-300 mb-2">입력한 이름: {name}</p>
          <Button intent="ghost" onClick={() => setOpen(false)}>
            닫기
          </Button>
        </Modal>
      </div>
      <section className="space-y-6">
        <FadeInSection>
          <Card variant="elevated">
            <h2 className="text-lg font-semibold">Elevated Card</h2>
            <p className="text-sm text-gray-600">
              This card has shadow and background.
            </p>
          </Card>
        </FadeInSection>

        <FadeInSection once={false}>
          <Card variant="outline">
            <h2 className="text-lg font-semibold">Outline Card</h2>
            <p className="text-sm text-gray-600">
              This card is transparent with border only.
            </p>
          </Card>
        </FadeInSection>

        <Card variant="elevated" padding="lg" shadow="strong" rounded="lg">
          여백 넓고, 그림자 강하고, 라운드 큰 카드
        </Card>
        <Card
          variant="outline"
          interactive
          className="transition-transform hover:scale-105"
        >
          호버 시 확대되는 카드
        </Card>

        <Card
          variant="elevated"
          padding="md"
          shadow="weak"
          rounded="md"
          interactive
        >
          <h2 className="text-xl font-bold mb-2">카드 타이틀</h2>
          <p>여기는 카드 본문입니다.</p>
        </Card>
      </section>
    </>
  );
};

export default Detail;

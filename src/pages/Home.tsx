// src/pages/Home.tsx
import { useRef, useState } from 'react';
import { Modal } from '@/components/ui/Modal/Modal';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import Title from '@/components/common/Title';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement>(null); // ✅ ref 선언

  const handleFocus = () => {
    nameRef.current?.focus(); // ✅ ref 사용하여 포커스
  };

  return (
    <div className="p-6 space-y-6">
      <Title size="lg" color="primary">
        안녕하세요
      </Title>
      <Title size="sm" color="default">
        작은 타이틀
      </Title>

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
  );
}

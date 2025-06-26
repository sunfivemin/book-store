// src/pages/Home.tsx
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal/Modal';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input'; // ✅ Input 추가
import Title from '@/components/common/Title';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(''); // ✅ input 상태 추가

  return (
    <div className="p-6 space-y-6">
      <Title size="lg" color="primary">
        안녕하세요
      </Title>
      <Title size="sm" color="secondary">
        작은 타이틀
      </Title>

      {/* ✅ Input 사용 */}
      <div className="space-y-2">
        <label htmlFor="name" className="block font-semibold">
          이름
        </label>
        <Input
          id="name"
          value={name}
          placeholder="이름을 입력하세요"
          onChange={e => setName(e.target.value)}
        />

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

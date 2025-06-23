// src/pages/Home.tsx
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal/Modal';
import { Button } from '@/components/ui/Button/Button';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button intent="primary" onClick={() => setOpen(true)}>
        모달 열기
      </Button>

      <Modal open={open} backdrop="dark" className="w-[300px] text-center">
        <p>🧊 커스텀 모달 내용입니다!</p>
        <Button intent="ghost" onClick={() => setOpen(false)}>
          닫기
        </Button>
      </Modal>
    </div>
  );
}

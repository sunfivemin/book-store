import { useState } from 'react';
import Title from '@/components/common/Title';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useAlert } from '@/hooks/useAlert';
import { resetRequest, resetPassword } from '@/api/auth.api';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  // 단계: 1 = 이메일 입력, 2 = 비밀번호 재설정
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { success } = useAlert();
  const navigate = useNavigate();

  // 1단계: 이메일로 초기화 요청
  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await resetRequest({ email });
      setStep(2);
      success('이메일 인증이 완료되었습니다. 비밀번호를 입력하세요.');
    } catch (err: any) {
      setError(err?.response?.data?.message || '초기화 요청에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 2단계: 비밀번호 재설정
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await resetPassword({ email, password });
      success('비밀번호가 초기화되었습니다.');
      navigate('/login');
    } catch (err: any) {
      setError(err?.response?.data?.message || '비밀번호 초기화에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 w-full max-w-md mx-auto">
      <Title size="lg" color="primary">
        비밀번호 초기화
      </Title>
      <form
        onSubmit={step === 1 ? handleRequestReset : handleResetPassword}
        className="mt-8 w-full space-y-6"
      >
        <fieldset>
          <Input
            label="이메일"
            placeholder="이메일을 입력하세요"
            type="email"
            variant="outline"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={step === 2}
          />
        </fieldset>
        {step === 2 && (
          <fieldset>
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력하세요"
              type="password"
              variant="outline"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </fieldset>
        )}
        <fieldset>
          <Button intent="primary" type="submit" className="w-full" disabled={loading}>
            {step === 1 ? '초기화 요청' : '비밀번호 초기화'}
          </Button>
        </fieldset>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </form>
    </section>
  );
};

export default ResetPassword; 
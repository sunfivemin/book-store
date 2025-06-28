import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '@/components/common/Title';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isValid = true;

    if (!email.trim()) {
      setEmailError('이메일은 필수입니다');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('비밀번호는 필수입니다');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) return;

    // TODO: 서버에 회원가입 요청 보내기
    console.log('🟢 회원가입 요청', { email, password });
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 w-full max-w-md mx-auto">
      <Title size="lg" color="primary">
        회원가입
      </Title>

      <form onSubmit={handleSubmit} className="mt-8 w-full space-y-6">
        <fieldset>
          <Input
            label="이메일"
            placeholder="이메일을 입력하세요"
            type="email"
            variant="outline"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={emailError}
          />
        </fieldset>

        <fieldset>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="password"
            variant="outline"
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={passwordError}
          />
        </fieldset>

        <fieldset>
          <Button intent="primary" type="submit" className="w-full mt-3">
            회원가입
          </Button>

          <div className="mt-3 text-center">
            <Link to="/reset" className="text-sm text-gray-500 underline">
              비밀번호 초기화
            </Link>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Signup;

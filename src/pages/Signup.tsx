import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Title from '@/components/common/Title';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import type { SignupForm } from '@/models/user.model';
import { signup } from '@/api/auth.api';
import { useAlert } from '@/hooks/useAlert';

const Signup = () => {
  const { success, error, loading, dismiss } = useAlert();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>();

  const onSubmit = async (data: SignupForm) => {
    const toastId = loading('회원가입 처리중입니다...');

    try {
      await signup(data);
      dismiss(toastId);
      success('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (err) {
      dismiss(toastId);
      error('회원가입에 실패했습니다. 다시 시도해주세요.');
      console.error(err);
    }
  };
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 w-full max-w-md mx-auto">
      <Title size="lg" color="primary">
        회원가입
      </Title>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full space-y-6">
        <fieldset>
          <Input
            label="이메일"
            placeholder="이메일을 입력하세요"
            type="email"
            variant="outline"
            {...register('email', {
              required: '이메일은 필수입니다',
            })}
            error={errors.email?.message}
            inputMode="email"
          />
        </fieldset>

        <fieldset>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="password"
            variant="outline"
            {...register('password', {
              required: '비밀번호는 필수입니다',
              minLength: {
                value: 6,
                message: '비밀번호는 최소 6자 이상이어야 합니다',
              },
            })}
            error={errors.password?.message}
            inputMode="text"
          />
        </fieldset>

        <fieldset>
          <Button intent="primary" type="submit" className="w-full">
            회원가입
          </Button>
          <Link
            to="/reset"
            className="text-sm text-gray-500 underline mt-5 inline-block text-center w-full"
          >
            비밀번호 초기화
          </Link>
        </fieldset>
      </form>
    </section>
  );
};

export default Signup;

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Title from '@/components/common/Title';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import type { LoginForm } from '@/models/user.model';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const { userLogin } = useAuth();

  const onSubmit = (data: LoginForm) => {
    userLogin(data);
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 w-full max-w-md mx-auto">
      <Title size="lg" color="primary">
        로그인
      </Title>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full space-y-6">
        <fieldset>
          <Input
            label="이메일"
            placeholder="이메일을 입력하세요"
            type="email"
            variant="outline"
            {...register('email', { required: '이메일은 필수입니다' })}
            error={errors.email?.message}
          />
        </fieldset>
        <fieldset>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="password"
            variant="outline"
            {...register('password', { required: '비밀번호는 필수입니다' })}
            error={errors.password?.message}
          />
        </fieldset>
        <fieldset>
          <Button intent="primary" type="submit" className="w-full">
            로그인
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

export default Login;

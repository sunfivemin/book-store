// src/hooks/useAuth.ts
import { useNavigate } from 'react-router-dom';
import { login, signup, resetPassword } from '@/api/auth.api';
import { useAlert } from '@/hooks/useAlert';
import { useAuthStore } from '@/store/authStore';
import type { LoginForm, SignupForm, ResetForm } from '@/models/user.model';

export const useAuth = () => {
  const navigate = useNavigate();
  const { success: showAlert, error: showError } = useAlert();
  const { storeLogin } = useAuthStore();

  const userLogin = (data: LoginForm) => {
    login(data)
      .then(res => {
        storeLogin(res.token);
        showAlert('로그인 완료되었습니다.');
        navigate('/');
      })
      .catch(() => {
        showError('로그인에 실패했습니다.');
      });
  };

  const userSignup = (data: SignupForm) => {
    signup(data)
      .then(() => {
        showAlert('회원가입이 완료되었습니다.');
        navigate('/login');
      })
      .catch(() => {
        showError('회원가입에 실패했습니다.');
      });
  };

  const userResetPassword = (data: ResetForm) => {
    resetPassword(data)
      .then(() => {
        showAlert('비밀번호가 재설정되었습니다.');
        navigate('/login');
      })
      .catch(() => {
        showError('비밀번호 재설정에 실패했습니다.');
      });
  };

  return { userLogin, userSignup, userResetPassword };
};

// src/components/layout/Header.tsx
import {
  logoStyle,
  navItemStyle,
  authBoxStyle,
  headerContainer,
  scrolledHeaderContainer,
} from './header.css';
import { headerStyle } from './variants';

import logo from '@/assets/logo.svg';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useCategory } from '@/hooks/useCategory';
import { useAuthStore } from '@/store/authStore';

import DarkModeToggle from '@/components/ui/DarkModeToggle';
import Dropdown from '@/components/ui/Dropdown/Dropdown';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { categories } = useCategory();
  const { isLoggedIn, storeLogout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dropdownItems = isLoggedIn
    ? [
        { label: '🛒 장바구니', value: 'cart' },
        { label: '📦 주문 내역', value: 'orders' },
        { label: '🚪 로그아웃', value: 'logout' },
        {
          label: ({ close }: { close: () => void }) => (
            <DarkModeToggle close={close} />
          ),
        },
      ]
    : [
        { label: '➡️ 로그인', value: 'login' },
        { label: '👤 회원가입', value: 'signup' },
        {
          label: ({ close }: { close: () => void }) => (
            <DarkModeToggle close={close} />
          ),
        },
      ];

  return (
    <header
      className={clsx(
        headerStyle({
          variant: isScrolled ? 'scrolled' : 'default',
          size: isScrolled ? 'sm' : 'lg',
        })
      )}
    >
      <div
        className={clsx(headerContainer, isScrolled && scrolledHeaderContainer)}
      >
        <Link to="/">
          <img src={logo} alt="BOOKSTORE 로고" className={logoStyle} />
        </Link>

        <nav>
          <ul className="flex items-center gap-4">
            {categories.map(item => (
              <li key={item.category_id}>
                <Link to="/books" className={navItemStyle}>
                  {item.category_name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={authBoxStyle}>
          <Dropdown
            items={dropdownItems}
            value={''}
            onChange={v => {
              if (v === 'login') navigate('/login');
              if (v === 'signup') navigate('/signup');
              if (v === 'cart') navigate('/cart');
              if (v === 'orders') navigate('/orderList');
              if (v === 'logout') storeLogout();
            }}
            label={<User className="w-6 h-6" />}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

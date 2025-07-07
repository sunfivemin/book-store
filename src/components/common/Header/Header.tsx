// src/components/common/Header.tsx
import {
  logoStyle,
  navItemStyle,
  headerContainer,
  scrolledHeaderContainer,
  overlayStyle,
} from './header.css';
import { headerStyle, menuButtonStyle, mobileMenuStyle } from './variants';

import logo from '@/assets/logo.svg';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useCategory } from '@/hooks/useCategory';
import { useAuthStore } from '@/store/authStore';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import DarkModeToggle from '@/components/ui/DarkModeToggle';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import { FaBars, FaAngleLeft } from 'react-icons/fa6';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isMobile } = useMediaQuery();
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

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

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
        className={clsx(
          headerContainer,
          'relative flex items-center justify-between w-full',
          isScrolled && scrolledHeaderContainer
        )}
      >
        {isMobile && (
          <button
            className={clsx(menuButtonStyle(), 'absolute left-4')}
            onClick={() => setIsMobileOpen(prev => !prev)}
            aria-label="메뉴 열기"
          >
            {isMobileOpen ? <FaAngleLeft /> : <FaBars />}
          </button>
        )}

        <div
          className={clsx(
            isMobile ? 'flex justify-center w-full' : 'absolute left-4'
          )}
        >
          <Link to="/">
            <img src={logo} alt="BOOKSTORE 로고" className={logoStyle} />
          </Link>
        </div>

        <div className="absolute right-4">
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

        {isMobile && (
          <>
            {isMobileOpen && (
              <div
                className={overlayStyle}
                onClick={() => setIsMobileOpen(false)}
              />
            )}
            <ul className={mobileMenuStyle({ open: isMobileOpen })}>
              {categories.map(item => (
                <li key={item.category_id}>
                  <Link
                    to={
                      item.category_id === -1
                        ? '/books'
                        : `/books?category_id=${item.category_id}`
                    }
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.category_name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {!isMobile && (
          <nav className="flex justify-center w-full">
            <ul className="flex items-center gap-4">
              {categories.map(item => (
                <li key={item.category_id}>
                  <Link
                    to={
                      item.category_id === -1
                        ? '/books'
                        : `/books?category_id=${item.category_id}`
                    }
                    className={navItemStyle}
                  >
                    {item.category_name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

import {
  logoStyle,
  navItemStyle,
  authBoxStyle,
  headerContainer,
} from './header.css';
import { headerStyle } from './variants';

import logo from '@/assets/logo.svg';
import { LogIn, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      document.body.classList.toggle('scrolled', scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={clsx(
        headerStyle({
          variant: isScrolled ? 'scrolled' : 'default',
          size: isScrolled ? 'sm' : 'lg',
        })
      )}
    >
      <div className={headerContainer}>
        {/* 로고 영역 */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="BOOKSTORE 로고" className={logoStyle} />
          <h1 className="text-xl font-bold leading-none">
            <span className="sr-only">BOOKSTORE</span>
          </h1>
        </div>

        {/* 카테고리 네비게이션 */}
        <nav className="flex gap-6 text-base font-medium">
          {['전체', '동화', '소설', '사회'].map(category => (
            <button key={category} className={navItemStyle}>
              {category}
            </button>
          ))}
        </nav>

        {/* 로그인 / 회원가입 */}
        <div className={authBoxStyle}>
          <button className="flex items-center gap-1 text-sm">
            <LogIn className="w-5 h-5" />
            로그인
          </button>
          <button className="flex items-center gap-1 text-sm">
            <UserPlus className="w-5 h-5" />
            회원가입
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

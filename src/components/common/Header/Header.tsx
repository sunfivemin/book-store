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
import { Link } from 'react-router-dom';
import { useCategory } from '@/hooks/useCategory';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { categories } = useCategory();

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
          <Link to="/">
            <img src={logo} alt="BOOKSTORE 로고" className={logoStyle} />
          </Link>
          <h1 className="text-xl font-bold leading-none">
            <span className="sr-only">BOOKSTORE</span>
          </h1>
        </div>

        {/* 카테고리 네비게이션 */}
        <nav>
          <ul className="flex items-center gap-4">
            {categories.map(item => (
              <li key={item.category_id}>
                <Link
                  to={
                    item.category_id === 0
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

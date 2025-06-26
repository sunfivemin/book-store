import {
  footerStyle,
  footerContainer,
  logoStyle,
  copyrightStyle,
  logoBox,
} from './footer.css';
import logo from '@/assets/logo.svg';

function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={footerContainer}>
        <div className={logoBox}>
          <img src={logo} alt="BOOKSTORE 로고" className={logoStyle} />
        </div>
        <p className={copyrightStyle}>copyright(c), 2025, Book Store.</p>
      </div>
    </footer>
  );
}

export default Footer;

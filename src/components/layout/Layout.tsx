import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { mainContainer, pageLayout } from './layout.css';

function Layout() {
  return (
    <div className={pageLayout}>
      <Header />
      <main className={mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

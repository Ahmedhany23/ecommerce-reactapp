
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className='overflow-hidden'>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
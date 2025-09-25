import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { PhoenixNavBar } from './ui/phoenix-navbar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <PhoenixNavBar />
      <main className={`flex-1 ${isAboutPage ? '' : 'pt-20 md:pt-24'} pb-8`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
import { useEffect } from 'react';

import GlobalStyle from '@/styles/Global.styles';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

import React, { useEffect } from 'react';

import GlobalStyle from '@/styles/Global.styles';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface IProps {
  children: any;
  location: any;
}

const Layout: React.FC<IProps> = ({ children, location }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

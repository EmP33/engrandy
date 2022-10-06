import GlobalStyle from '@/styles/Global.styles';
import Footer from './Footer/Footer';
import Header from './Header/Header';
const Layout = ({ children }) => {
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

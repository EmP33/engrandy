import GlobalStyle from '@/styles/Global.styles';
import Header from './Header/Header';
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;

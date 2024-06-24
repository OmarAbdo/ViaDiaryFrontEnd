import PropTypes from 'prop-types';
import Header from './reusable/header'
import Footer from './reusable/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{margin: "0 auto", width: "65%"}} >{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
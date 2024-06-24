import PropTypes from 'prop-types';
import Header from './reusable/header'
import Footer from './reusable/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{paddingLeft: "10%", paddingRight: "10%"}} >{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
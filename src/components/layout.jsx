import PropTypes from 'prop-types';
import Header from './reusable/header'
import Footer from './reusable/footer'
import backgroundImage from "../assets/background.png";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <main
          style={{
            margin: "0 auto",
            width: "65%",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
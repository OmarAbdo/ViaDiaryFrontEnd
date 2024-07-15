import PropTypes from "prop-types";
import React from "react";
import backgroundImage from "../assets/background.png";

const GuestLayout = ({ children }) => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0 auto",
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </main>
  );
};

GuestLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestLayout;

import React from "react";
import Footer from "./footer/Footer";

const Layout = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

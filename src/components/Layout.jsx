import React from "react";

const Layout = (props) => {
  const { children } = props;

  return <React.Fragment>{children}</React.Fragment>;
};

export default Layout;

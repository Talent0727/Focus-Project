import React from "react";
import "../../assets/styles/components/header/Header.scss";
import focusLogo from "../../assets/images/logo-focus.svg";
import githubLogo from "../../assets/images/github.svg";
import linkedinLogo from "../../assets/images/linkedin.svg";
import facebookLogo from "../../assets/images/facebook.svg";

const Header = (props) => {
  const { children, bgImage } = props;
  const headerBackground = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <header className="header" style={headerBackground}>
      <i className="icon-menu burger-button" id="burger-menu"></i>
      <nav className="menu">
        <figure className="logo">
          <a href="index.html">
            <img src={focusLogo} height="30" alt="Logo Focus" />
          </a>
        </figure>
        <ul className="menu-items">
          <li>
            <a className="link" href="#nosotros">
              Nosotros
            </a>
          </li>
          <li>
            <a className="link" href="#vip">
              Focus VIP
            </a>
          </li>
          <li>
            <a className="link" href="#empresas">
              Empresas
            </a>
          </li>
          <li>
            <a className="link" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
        <ul>
          <li className="social-icon">
            <a href="#">
              <img className="" src={githubLogo} width="20" alt="GitHub" />
            </a>
            <p className="social-text">Github</p>
          </li>
          <li className="social-icon">
            <a href="#">
              <img className="" src={linkedinLogo} width="20" alt="Linkedin" />
            </a>
            <p className="social-text">Linkedin</p>
          </li>
          <li className="social-icon">
            <a href="#">
              <img className="" src={facebookLogo} width="20" alt="Facebook" />
            </a>
            <p className="social-text">Facebook</p>
          </li>
        </ul>
      </nav>
      {children}
    </header>
  );
};

export default Header;

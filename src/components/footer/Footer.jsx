import React from 'react';
import '../../assets/styles/components/footer/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="logo__footer">
      <figure>
        <a href="index.html">
          <img
            src="images/logo-focus-footer.svg"
            height="30"
            alt="Logo Focus"
          />
        </a>
      </figure>
    </ul>

    <ul className="item__menu-footer">
      <li>
        <a href="">Soporte</a>
      </li>
      <li>
        <a href="">Nosotros</a>
      </li>
    </ul>

    <ul className="item__menu-footer">
      <li>
        <a href="">Noticias</a>
      </li>
      <li>
        <a href="">Privacidad</a>
      </li>
    </ul>

    <ul className="social__footer">
      <div className="social">
        <li className="social__icon">
          <a href='#'>
            <img className="" src="images/github.svg" width="20" alt="GitHub"
            />
          </a>
          <p className="social__text-footer">Github</p>
        </li>
        <li className="social__icon">
          <a href="#">
            <img
              className=""
              src="images/linkedin.svg"
              width="20"
              alt="Linkedin"
            />
          </a>
          <p className="social__text-footer">Linkedin</p>
        </li>
        <li className="social__icon">
          <a href="#">
            <img
              className=""
              src="images/facebook.svg"
              width="20"
              alt="Facebook"
            />
          </a>
          <p className="social__text-footer">Facebook</p>
        </li>
      </div>
    </ul>
  </footer>
);

export default Footer;
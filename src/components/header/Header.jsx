import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../assets/styles/components/header/Header.scss';
import focusLogo from '../../assets/images/logo-focus.svg';
import githubLogo from '../../assets/images/github.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';
import facebookLogo from '../../assets/images/facebook.svg';

const Header = (props) => {
  const { children, bgImage } = props;
  const headerBackground = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <header className='header' style={headerBackground}>
      <i className='icon-menu burger-button' id='burger-menu' />
      <nav className='menu'>
        <figure className='logo'>
          <NavLink to='/'>
            <img src={focusLogo} height='30' alt='Logo Focus' />
          </NavLink>
        </figure>
        <ul className='menu-items'>
          <li>
            <NavLink className='link' to='#nosotros'>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink className='link' to='#vip'>
              Focus VIP
            </NavLink>
          </li>
          <li>
            <NavLink className='link' to='#empresas'>
              Empresas
            </NavLink>
          </li>
          <li>
            <NavLink className='link' to='#contacto'>
              Contacto
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className='social-icon'>
            <Link to='/'>
              <img className='' src={githubLogo} width='20' alt='GitHub' />
            </Link>
            <p className='social-text'>Github</p>
          </li>
          <li className='social-icon'>
            <Link to='/'>
              <img className='' src={linkedinLogo} width='20' alt='Linkedin' />
            </Link>
            <p className='social-text'>Linkedin</p>
          </li>
          <li className='social-icon'>
            <Link to='/'>
              <img className='' src={facebookLogo} width='20' alt='Facebook' />
            </Link>
            <p className='social-text'>Facebook</p>
          </li>
        </ul>
      </nav>
      {children}
    </header>
  );
};

export default Header;

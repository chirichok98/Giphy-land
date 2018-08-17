import React from 'react';
import logo from '../../assets/logo.jpg';

import './Header.css';

const Header = () => (
  <div className='site-logo'>
    <div className='logo-text'>giphy</div>
    <img src={logo} height='300' alt='Logo' />
    <div className='logo-text'>land</div>
  </div>
);

export default Header;
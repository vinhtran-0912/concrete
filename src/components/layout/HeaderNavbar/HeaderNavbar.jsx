import React from 'react';

import '../../../asset/scss/components/header.scss';
import logo from '../../../asset/images/logo.png';

const HeaderNavbar = () => (
  <div className="header">
    <a href="/" className="concrete-logo">
      <img className="logo" src={logo} alt="" />
    </a>

    <div className="user-icon" />
  </div>
);

export default HeaderNavbar;

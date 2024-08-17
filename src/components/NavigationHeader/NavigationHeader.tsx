
import React from 'react';
import './NavigationHeader.scss';

const NavigationHeader = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <strong>AiBriX</strong>
        </a>
        <span className="navbar-burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item is-active">
            Home
          </a>
          <a href="/about" className="navbar-item">
            About
          </a>
          <a href="/contact" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;

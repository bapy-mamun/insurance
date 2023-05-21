import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="o-global-header">
      <span className="o-global-header__logo">
        <Link to="/">Insurance Hub</Link>
      </span>
      <nav className="o-global-header__nav">
        <ul className="o-global-header__navItems">
          <li className="o-global-header__navItem">
            <Link to="/">Home</Link>
          </li>
          <li className="o-global-header__navItem">
            <Link to="/buy-insurance">Get Insurance</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

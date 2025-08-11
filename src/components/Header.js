import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>BookHaven</h1>
            <p>Your Online Literary Paradise</p>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/books' ? 'active' : ''}>
              <Link to="/books">Books</Link>
            </li>
            <li className={location.pathname === '/authors' ? 'active' : ''}>
              <Link to="/authors">Authors</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

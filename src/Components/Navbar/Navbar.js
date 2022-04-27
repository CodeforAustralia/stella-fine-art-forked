// import React, { useState, Fragment, useEffect } from 'react'
import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ReactGa from 'react-ga';
import Dropdown from './Dropdown';
import history from './history';

function Navbar() {
  const [shutDropdown, setShutDropdown] = useState(false);
  const [toggleShut, setToggleShut] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setToggleShut(!toggleShut);
  const closeMobileMenu = () => setToggleShut(false);

  history.listen((location) => {
    // TO REPORT PAGE VIEW

    console.log('im here');
    ReactGa.pageview(location.pathname);
  });

  // TO REPORT PAGE VIEW
  ReactGa.pageview(window.location.pathname + window.location.search);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
    setShutDropdown(false);
  };

  // dropdown menu control
  const handleSelect = () => setShutDropdown(!shutDropdown);
  const closeDropdownMenu = () => {
    setShutDropdown(false);
  };

  return (
    <Fragment>
      <div className="appheader">
        <p>Stella Kypriotis Fine Art </p>
        <p id="captivated-by-nature">Captivated by Nature</p>
      </div>
      {/* <nav className={`navbar ${show && 'nav_black'}`}> */}
      <nav history={history} className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={toggleShut ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={toggleShut ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li
            className="nav-item top_dropDown"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link to="/" className="nav-links">
              PAINTINGS
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown && (
              <Dropdown
                closeDropdownMenu={closeDropdownMenu}
                closeMobileMenu={closeMobileMenu}
                shutDropdown={shutDropdown}
                handleSelect={handleSelect}
              />
            )}
          </li>
          <li className="nav-item">
            <Link to="/artist" className="nav-links" onClick={closeMobileMenu}>
              ARTIST
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/testimonial"
              className="nav-links"
              onClick={closeMobileMenu}>
              TESTIMONIALS
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/commissions"
              className="nav-links"
              onClick={closeMobileMenu}>
              COMMISSIONS
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/classes" className="nav-links" onClick={closeMobileMenu}>
              CLASSES
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/faquestions"
              className="nav-links"
              onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;

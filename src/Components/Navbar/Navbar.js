// import React, { useState, Fragment, useEffect } from 'react'
import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [shutDropdown, setShutDropdown] = useState(false);
  const [toggleShut, setToggleShut] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const [show, setHandleShow] = useState(false)
  // using string template nav class always but if the show is true set class to nav-black
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 150) {
  //       setHandleShow(true)
  //     } else setHandleShow(false)
  //   })
  //   return () => {
  //     window.removeEventListener('scroll')
  //   }
  // }, [])

  const handleClick = () => setToggleShut(!toggleShut);
  const closeMobileMenu = () => setToggleShut(false);

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
      </div>
      {/* <nav className={`navbar ${show && 'nav_black'}`}> */}
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={toggleShut ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={toggleShut ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              🏠 HOME
            </Link>
          </li>
          <li
            className="nav-item"
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
            {/* {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />} */}
          </li>
          <li className="nav-item">
            <Link to="/artist" className="nav-links" onClick={closeMobileMenu}>
              THE ARTIST
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
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
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
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;

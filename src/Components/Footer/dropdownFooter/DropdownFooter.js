import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import DropdownFooterPanting from './DropdownFooterPainting';

export const DropdownFooter = () => {
  const [shutDropdownn, setShutDropdownn] = useState(false);
  const [toggleShut, setToggleShut] = useState(false);
  const [dropdownn, setDropdownn] = useState(false);
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

  //   const handleClick = () => setToggleShut(!toggleShut);
  //   const closeMobileMenu = () => setToggleShut(false);

  // const handleClick = () => setToggleShut(!toggleShut);
  const closeMobileMenu = () => setToggleShut(!toggleShut);

  const onMouseEnter = () => {
    setDropdownn(true);
  };

  const onMouseLeave = () => {
    setDropdownn(false);
    setShutDropdownn(false);
  };

  // dropdown menu control
  const handleSelect = () => setShutDropdownn(!shutDropdownn);
  const closeDropdownMenu = () => {
    setShutDropdownn(false);
  };

  return (
    <>
      <ul onClick={onMouseEnter}>
        <li
          className="nav-item"
          // onMouseEnter={onMouseEnter}
          onClick={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <Link to="/" className="nav-links">
            <p>Painting{''}⏩</p>
            {/* <i class="fa-solid fa-chevron-right"></i> */}
            {/* <i className="fas fa-caret-arrow" /> */}
          </Link>
          {dropdownn && (
            <DropdownFooterPanting
              closeDropdownMenu={closeDropdownMenu}
              closeMobileMenu={closeMobileMenu}
              shutDropdown={shutDropdownn}
              handleSelect={handleSelect}
            />
          )}
        </li>
      </ul>
    </>
  );
};

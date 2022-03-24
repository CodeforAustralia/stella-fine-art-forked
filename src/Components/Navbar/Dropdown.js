import React from 'react';
import { DropDownItems } from './dropDownItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';
//

function Dropdown({ shutDropdown, handleSelect, closeMobileMenu }) {
  return (
    <>
      <ul
        onClick={handleSelect}
        className={shutDropdown ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {DropDownItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={closeMobileMenu}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;

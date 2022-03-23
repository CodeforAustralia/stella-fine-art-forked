import React from "react";
import { DropDownItems } from "../../Navbar/dropDownItems";
import "./dropdownFooter.css";
import { Link } from "react-router-dom";
//

const DropdownFooterPainting = ({
  shutDropdown,
  handleSelect,
  closeMobileMenu,
}) => {
  return (
    <>
      <ul
        onClick={handleSelect}
        className={shutDropdown ? "dropdown-footer clicked" : "dropdown-footer"}
      >
        {DropDownItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownFooterPainting;

import { NavLink } from "react-router-dom";
import links from "../utils/links";

import React from "react";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            onClick={toggleSidebar}
            key={id}
            className={({ isActive }) =>
              isActive ? `nav-link active` : `nav-link`
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;

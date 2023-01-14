import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBarMenu.module.css";
import { NavLink } from "react-router-dom";

const NavBarMenu = ({ menuTab }) => (
  <div className={styles.NavBarMenu}>
    <div className="menu-tab">
      <ul>
        {menuTab.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={`${menu.link}`}
              className={({ isActive, isPending }) => {
                isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

NavBarMenu.propTypes = {};

NavBarMenu.defaultProps = {};

export default NavBarMenu;

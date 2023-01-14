import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import NavBarMenu from "./NavBarMenu/NavBarMenu";

const NavBar = () => {
  const navData = [
    {
      title: "All",
      link: "categories/all",
    },
    {
      title: "My Orders",
      link: "my/orders",
    },
  ];

  return (
    <div className={styles.NavBar}>
      <div className="site-logo">
        <h3>Amazon 2.0</h3>
      </div>
      <div className="tab-menu">
        <NavBarMenu menuTab={navData}></NavBarMenu>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;

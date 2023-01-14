import React from "react";
import PropTypes from "prop-types";
import styles from "./RootLayout.module.css";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";

const RootLayout = () => {
  return (
    <div className={styles.RootLayout}>
      <Outlet></Outlet>
    </div>
  );
};

RootLayout.propTypes = {};

RootLayout.defaultProps = {};

export default RootLayout;

import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import styles from "./Dashboard.module.css";
import Navbar from "../NavBar/NavBar";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <Navbar></Navbar>
      <div className="dashboard-layout">
        <div className="left-space"></div>
        <Outlet></Outlet>
        <div className="right-space"></div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;

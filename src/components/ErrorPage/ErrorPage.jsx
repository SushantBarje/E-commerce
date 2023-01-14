import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorPage.module.css';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);
  
  return (
    <div className={styles.ErrorPage} >
      <h1>ErrorPage component</h1>
      <i>{error.statusText || error.message}</i>
    </div>
  )
};


ErrorPage.propTypes = {};

ErrorPage.defaultProps = {};

export default ErrorPage;

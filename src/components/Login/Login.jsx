import React, { useState } from "react";
import PropTypes from "prop-types";
//import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import "./Login.css";
import { userLogin } from "../../utils/api";

function validateUser({ username, password }) {
  if (username.length < 0 || password.length < 0) {
    return true;
  }
  return false;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(username);
    console.log(password);
    if (validateUser({ username, password })) {
      return false;
    }
    const userToken = await userLogin({ username, password });
    console.log(userToken);
  }

  return (
    <div className="login-box">
      <div className="login-header">
        <h3>Login</h3>
      </div>
      <div className="login-input-field-box">
        <form onSubmit={handleSubmit}>
          <div className="login-input-field login-input-field-username">
            <div className="login-input-field-label">
              <label htmlFor="login-username">Username or Email</label>
            </div>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              name="login-username"
            />
          </div>
          <div className="login-input-field login-input-field-password">
            <div className="login-input-field-label">
              <label htmlFor="login-password">Password</label>
            </div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="login-password"
              autoComplete="on"
            />
          </div>
          <div className="login-submit-form-button">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="other-login">
          <div className="not-have-account">
            <p className="not-have-account-link">
              <Link to={`user/register`}>Not have account ?</Link>
            </p>
            <p className="forget-user">
              <Link to={`user/forget`}>Forget Password</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

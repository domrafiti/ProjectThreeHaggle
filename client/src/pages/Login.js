import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.min.css";

export function Login() {
  // Setting our component's initial state
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    window.location.reload.bind(window.location);
  });

  const login = (event) => {
    event.preventDefault();
    API.verifyUser({
      username: loginUsername,
      password: loginPassword,
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userInfo.$__._id);
          localStorage.setItem("expiresAt", res.data.expiresAt);
          setLoggedIn(true);
          window.location.replace("/profile");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>

          <form className="form new-project-form">
            <div className="form-group">
              <label htmlFor="email-login">email:</label>
              <input
                className="form-input"
                type="text"
                id="email-login"
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">password:</label>
              <input
                className="form-input"
                type="password"
                id="password-login"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit" onClick={login}>
                Login
              </button>
            </div>
          </form>
          <div>
            <p>Don't have an account?</p>
            <Link to="/signup">
              <button className="btn btn-primary">Sign-up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.min.css";

export function Login() {
  // Setting our component's initial state
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInFailed, setLoggedInFailed] = useState(false);
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
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("login-form").reset();
        alert("Your Credentials are invalid. Try again or Sign Up!");
        setLoggedInFailed(true);
      });
  };

  return (
    <>
      {loggedIn ? (
        <Redirect to="/profile"></Redirect>
      ) : (
        <div className="container container-fluid ">
          <div className="row">
            <div
              className="col-md-6"
              style={{ color: "#fff", margin: "50px auto" }}
            >
              <h2>Login</h2>

              <form id="login-form" className="form new-project-form">
                <div className="form-group">
                  <label htmlFor="email-login">Email:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="email-login"
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password-login">Password:</label>
                  <input
                    className="form-input"
                    type="password"
                    id="password-login"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: "20px" }}>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
              </form>
              <div style={{ marginTop: "20px" }}>
                <p>Don't have an account?</p>
                <Link to="/signup">
                  <button className="btn btn-primary">Sign-up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;

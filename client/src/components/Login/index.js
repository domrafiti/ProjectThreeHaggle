import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./haggle.css";

export function Login() {
  // Setting our component's initial state
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/login",
    })
      .then((res) => console.log(res));
  };
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3000/user",
    })
      .then((res) => {
        setData(res.data);
        console.log(data);
      });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Login</h2>

        {/* <form className="form login-form"> */}
        <div className="form-group">
          <label htmlFor="email-login">email:</label>
          <input className="form-input" type="text" id="email-login" onChange={e => setLoginUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password-login">password:</label>
          <input className="form-input" type="password" id="password-login" onChange={e => setLoginPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit" onClick={login}>Login</button>
        </div>
        {/* </form> */}
        <div>
          <p>Don't have an account?</p>
          <Link to="/signup">
            <button className="btn btn-primary">Sign-up</button>
          </Link>
        </div>

        <div>
          <p>Get User</p>
          <button onClick={getUser}>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default Login;

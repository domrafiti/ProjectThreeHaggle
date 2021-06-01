import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import API: function to connect with database



export function Login() {
  // Setting our component's initial state
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value })
  };

  // Handles credential verification when submit button is clicked
  function handleFormSubmit(event) {
    event.preventDefault();
    if (credentials.email === "" || credentials.password === "") {
      alert("Please enter an email and password")
    } else {
      alert("Login successful!")
      // Need to verify login credentials with database

      setCredentials({
        email: "",
        password: ""
      })

      // Need to redirect user to their account page
      return <Redirect to="/profile" />
    }
  };

  // Function to verify login credentials goes here


  return (
    <main className="container container-fluid ">
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>

          <form className="form login-form">
            <div className="form-group">
              <label htmlFor="email-login">email:</label>
              <input className="form-input" type="text" id="email-login" name="email" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">password:</label>
              <input className="form-input" type="password" id="password-login" name="password" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>login</button>
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
    </main>
  );
}

export default Login;

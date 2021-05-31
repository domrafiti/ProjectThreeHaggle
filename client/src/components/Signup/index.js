import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import API: function to connect with database

export function Signup() {
  // Setting our component's initial state
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
    // How do we store user image?
  })

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value })
  };

  // Handles credential verification when submit button is clicked
  function handleFormSubmit(event) {
    event.preventDefault();
    if (credentials.email === "" || credentials.password === "" || credentials.name === "") {
      alert("Please enter a name, email, and password")
    } else {
      alert("Account created!")
      // Need to create login credentials with database

      setCredentials({
        name: "",
        email: "",
        password: ""
      })

      // Need to redirect user to their account page
      return <Redirect to="/profile" />
    }
  };

  // Function to create login credentials goes here

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Signup</h2>
        <form className="form signup-form" id="upload-profile-photos" action="/api/users" method="post"
          encType="multipart/form-data">

          <label htmlFor="name-signup">name:</label>
          <input className="form-input" type="text" name="name" id="name-signup" onChange={handleInputChange} />

          <label htmlFor="email-signup">email:</label>
          <input className="form-input" type="text" name="email" id="email-signup" onChange={handleInputChange} />

          <label htmlFor="password-signup">password:</label>
          <input className="form-input" type="password" name="password" id="password-signup" onChange={handleInputChange} />

          <label htmlFor="profile-photos-input">Browse htmlFor an image to upload</label>
          <input id="profile-photos" type="file" name="bruce-wayne" multiple />
          <br />
          <button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>signup</button>
        </form>
        <div>
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

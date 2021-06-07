import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import API: function to connect with database
import API from "../utils/API";

export function Signup() {
  // Setting our component's initial state
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    // How do we store user image?
  });
  const [formObject, setFormObject] = useState({});
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  // Handles credential verification when submit button is clicked
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject.name, formObject.email, formObject.password);
    API.createUser({
      name: formObject.name,
      email: formObject.email,
      password: formObject.password,
    })
      .then(() => setFormObject(""))
      .catch((err) => console.log(err));
  }

  // Function to create login credentials goes here

  return (
    <div className="container container-fluid my-5 carousel-custom">
      <div className="row">
        <div className="col-md-6">
          <h2>Signup</h2>
          <form>
            <label htmlFor="name-signup">name:</label>
            <input
              className="form-input"
              type="text"
              name="name"
              id="name-signup"
              onChange={handleInputChange}
            />

            <label htmlFor="email-signup">email:</label>
            <input
              className="form-input"
              type="text"
              name="email"
              id="email-signup"
              onChange={handleInputChange}
            />

            <label htmlFor="password-signup">password:</label>
            <input
              className="form-input"
              type="password"
              name="password"
              id="password-signup"
              onChange={handleInputChange}
            />

            <label htmlFor="profile-photos-input">
              Browse an image to upload
            </label>
            <input
              id="profile-photos"
              type="file"
              name="bruce-wayne"
              multiple
            />
            <br />
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleFormSubmit}
            >
              signup
            </button>
          </form>
          <div>
            <p>Already have an account?</p>
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

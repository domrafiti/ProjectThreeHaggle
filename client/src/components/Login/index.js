import React from "react";
import "./style.css";
import "./jass.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./haggle.css";

export function Login() {
  return (
    <main className="container container-fluid my-5 carousel-custom">
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>

          <form className="form login-form">
            <div className="form-group">
              <label for="email-login">email:</label>
              <input className="form-input" type="text" id="email-login" />
            </div>
            <div className="form-group">
              <label for="password-login">password:</label>
              <input
                className="form-input"
                type="password"
                id="password-login"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                login
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Signup</h2>
          <form
            className="form signup-form"
            id="upload-profile-photos"
            action="/api/users"
            method="post"
            enctype="multipart/form-data"
          >
            <label for="name-signup">name:</label>
            <input
              className="form-input"
              type="text"
              name="name"
              id="name-signup"
            />

            <label for="email-signup">email:</label>
            <input
              className="form-input"
              type="text"
              name="email"
              id="email-signup"
            />

            <label for="password-signup">password:</label>
            <input
              className="form-input"
              type="password"
              name="password"
              id="password-signup"
            />

            <label for="profile-photos-input">
              Browse for an image to upload
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
              className="btn btn-primary"
            >
              signup
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;

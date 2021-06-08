import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";

export function Signup() {
  // Setting our component's initial state
  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registeredUser, setRegisteredUser] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    API.createUser({
      name: registerName,
      username: registerUsername,
      password: registerPassword,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setRegisteredUser(true);
      })
      .catch((err) => {
        setRegisteredUser(false);
      });
  };
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3000/user",
    }).then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  return (
    <>
      {registeredUser ? (
        <Redirect to="/login" registeredUser={registeredUser} />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <h2>Sign-up</h2>
            {/* <form className="form signup-form" id="upload-profile-photos" action="/api/users" method="post"
          encType="multipart/form-data"> */}

            <label htmlFor="name-signup">name:</label>
            <input
              className="form-input"
              type="text"
              id="name-signup"
              onChange={(e) => setRegisterName(e.target.value)}
            />

            <label htmlFor="email-signup">email:</label>
            <input
              className="form-input"
              type="text"
              id="email-signup"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />

            <label htmlFor="password-signup">password:</label>
            <input
              className="form-input"
              type="password"
              id="password-signup"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />

            <label htmlFor="profile-photos-input">
              Browse htmlFor an image to upload
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
              onClick={register}
            >
              Sign-up
            </button>
            {/* </form> */}
            <div>
              <p>Already have an account?</p>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>

            <div>
              <p>Get User</p>
              <button onClick={getUser}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;

import React from "react";
import SignupBtn from "../SignupBtn";
import ProfileBtn from "../ProfileBtn";
import "./style.css";
const Welcome = () => {
  let loggedUser = localStorage.getItem("userId");
  return (
    <div className="col-6 welcome-col">
      <div className="welcome">
        <h1>
          <strong>Welcome to Haggle!</strong>{" "}
        </h1>
        <h5> Trade what you have to get what you want. </h5>
        {loggedUser ? <ProfileBtn /> : <SignupBtn />}
      </div>
    </div>
  );
};

export default Welcome;

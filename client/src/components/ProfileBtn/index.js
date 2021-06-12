import React from "react";
import { Link } from "react-router-dom";

const ProfileBtn = () => {
  return (
    <div>
      <Link to="/profile">
        <button className="btn btn-primary">View Profile</button>
      </Link>
    </div>
  );
};

export default ProfileBtn;

import React from "react";
import FiveStar from "../FiveStar";
import Placeholder from "./Placeholder.png";

const BioImg = ({ users }) => {
  // Function to set a rating, leave a review, average stars, Stars = ACE
  return (
    <div>
      <div>
        <h2 className="ml-3" style={{ color: "white" }}>
          Welcome {users.name}{" "} !
        </h2>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={users.picture_path}
          className="card-img-top img-thumbnail rounded-circle z-depth-2"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">{users.email}</p>
          <p className="card-text"> rating status goes here</p>
          <p className="card-text">
            <FiveStar />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioImg;

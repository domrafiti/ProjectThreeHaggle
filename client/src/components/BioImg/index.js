import React, { useState, useEffect } from "react";
import FiveStar from "../FiveStar";
// import Placeholder from './Placeholder.png';
import API from "../../utils/API";

const BioImg = ({ users }) => {
  // Function to set a rating, leave a review, average stars, Stars = ACE

  function loadUsers(id) {
    API.getUser(id)
      .then((res) => {
        //not getting setUser to actual set the user when called.
        let userData = res.data;
        //console.log(res.data);
        let ratings = res.data.total_ratings;
        let total = 0;
        for (let i = 0; i < ratings.length; i++) {
          total = ratings[i] + total;
          //console.log(total);
        }
        total = { averageRating: total / ratings.length };
        //console.log(total);
        //setUsers(res.data, total)
        setUsers(userData);
        //console.log(users);
      })
      .catch((err) => console.log(err));
  }

  // Function to set a rating, leave a review, average stars, Stars = ACE
  return (
    <div>
      <div>
        <h2 className="ml-3" style={{ color: "white" }}>
          Welcome {users.name}!{" "}
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

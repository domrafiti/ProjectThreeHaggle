import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import BioImg from "../components/BioImg";
import UserListings from "../components/UserListings";
import FavoriteList from "../components/FavoriteList";
import DeleteBtn from "../components/DeleteBtn";

export function Profile() {
  const [update, setUpdate] = useState();
  const [users, setUsers] = useState({});
  let id = localStorage.getItem("userId");
  let myListings = users.listings || [];
  let myFavorites = users.favorites || [];
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    loadUsers();
  }, [id]);

  function loadUsers() {
    API.getUser(id)
      .then((res) => {
        //not getting setUser to actual set the user when called.
        let userData = res.data;
        console.log(res.data);
        let ratings = res.data.total_ratings;
        let total = 0;
        for (let i = 0; i < ratings.length; i++) {
          total = ratings[i] + total;
          console.log(total);
        }
        total = { averageRating: total / ratings.length };
        console.log(total);
        //setUsers(res.data, total)
        setUsers(userData);
        console.log(users);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <BioImg users={users} />

          <div className="col-md-12">
            <h2 style={{ color: "#fff" }}>My Listings</h2>
            {myListings.map((myListings) => (
              <div>
                <UserListings
                  key={myListings._id}
                  myListings={myListings}
                  users={users}
                  setUpdate={setUpdate}
                  loggedIn={loggedIn}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h2 style={{ color: "#fff" }}>My Favorites</h2>
          {myFavorites.map((myFavorites) => (
            <div>
              <FavoriteList myFavorites={myFavorites} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;

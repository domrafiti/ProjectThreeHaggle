import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import BioImg from "../components/BioImg"
import UserListings from "../components/UserListings"
import FavoriteList from "../components/FavoriteList"


export function Profile() {
  // const [listings, setListings] = useState([]);
  const [users, setUsers] = useState([]);
  let { id } = useParams();
  let myListings = users.listings || [];

  useEffect(() => {
    // loadListings();
    loadUsers();
  }, []);

  function loadUsers() {
    API.getUser(id)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }




  // function loadListings() {
  //   API.getListings()
  //     .then((res) => setListings(res.data))
  //     .catch((err) => console.log(err));
  // }

  return (
    <div className="container">
      <div className="row" style={{ float: "left" }}>

        <div className="col-md-3">

          <BioImg users={users}
          />
        </div>


        <div className="col-md-7" style={{ margin: "20px", position: "relative", left: "200px" }}>
          <h2 style={{ color: "#fff" }}>My Favorites</h2>
          <div> <FavoriteList /> </div>
        </div>

        <div className="col-md-5" style={{ position: "relative", bottom: "350px" }}>
          <h2 style={{ color: "#fff" }}>My Listings</h2>
          {myListings.map((myListings) => (

            <div >
              <UserListings myListings={myListings} />
            </div>

          ))}
        </div>
      </div>


    </div>
  );
}

export default Profile;

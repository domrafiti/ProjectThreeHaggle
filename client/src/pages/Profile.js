import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import BioImg from "../components/BioImg"
import UserListings from "../components/UserListings"
import FavoriteList from "../components/FavoriteList"
import DeleteBtn from "../components/DeleteBtn"


export function Profile() {
  const [update, setUpdate] = useState()
  const [users, setUsers] = useState([]);
  let { id } = useParams();
  let myListings = users.listings || [];
  console.log(myListings);

  useEffect(() => {

    loadUsers();
  }, [update]);

  function loadUsers() {
    API.getUser(id)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="row" >

        <div className="col-md-4" >

          <BioImg users={users}
          />

<div className="col-md-12" >
            <h2 style={{ color: "#fff" }}>My Listings</h2>
            {myListings.map((myListings) => (

              <div >
                <UserListings key={myListings._id} myListings={myListings} users={users} setUpdate={setUpdate} />

              </div>

            ))}
          </div>

        </div>




        <div className="col-md-6">
          <h2 style={{ color: "#fff" }}>My Favorites</h2>
          <div> <FavoriteList /> </div>




        </div>

      </div>
      </div>
  );
}

export default Profile;

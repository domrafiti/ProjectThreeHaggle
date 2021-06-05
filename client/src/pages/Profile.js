import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";

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
    <div>
      <p className="ml-3" style={{ color: "white" }}>
        Hello and Hi {users._id}
        <br />
        {users.email}
        <br />
        <br />
        {}
        <img src={users.picture_path} style={{ width: "250px" }} />
      </p>
      {myListings.map((listing) => (
        <div
          className="card my-3 mx-auto"
          style={{ maxWidth: "540px" }}
          key={listing._id}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={listing.image_path}
                alt={listing.title}
                className="my-listing-photo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{listing.title}</h5>
                <p className="card-text">{listing.description}</p>

                <p className="card-text">
                  <small className="text-muted">
                    Created by on {listing.date_created}
                  </small>
                </p>
                <a
                  className="btn btn-primary"
                  id="listing-view"
                  href={`/listings/${listing._id}`}
                >
                  View Listing
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;

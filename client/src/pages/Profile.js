import React, { useEffect, useState } from "react";
import Button from "../components/MyListBtn";
import BioImg from "../components/BioImg";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";

export function Profile() {
  const [listings, setListings] = useState([]);
  const [users, setUsers] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    loadListings();
    loadUsers();
  }, []);

  function loadUsers() {
    API.getUser(id)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  function loadListings() {
    API.getListings()
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <p className="ml-3" style={{ color: "white" }}>
        Hello and Hi {users.name}
        <br />
        {users.email}
        <br />
        <img src={users.picture_path} style={{ width: "250px" }} />
      </p>
      {/* {listings
        .filter((listing) => listing.user_id.includes(users.name))
        .map((mylisting) => (
          <div
            className="card my-3 mx-auto"
            style={{ maxWidth: "540px" }}
            key={mylisting._id}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={mylisting.image_path}
                  alt={mylisting.title}
                  className="my-listing-photo"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{mylisting.title}</h5>
                  <p className="card-text">{mylisting.description}</p>

                  <p className="card-text">
                    <small className="text-muted">
                      Created by on {mylisting.date_created}
                    </small>
                  </p>
                  <a
                    className="btn btn-primary"
                    id="listing-view"
                    href={`/listings/${mylisting._id}`}
                  >
                    View Listing
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))} */}
    </div>
  );
}

export default Profile;

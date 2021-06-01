import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./haggle.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Listings() {
  // Setting our component's initial state
  const [listings, setListings] = useState([]);
  const [users, setUsers] = useState([]);
  // const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadListings();
    loadUsers();
  }, []);

  // Loads all books and sets them to books
  function loadListings() {
    API.getListings()
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }

  function loadUsers() {
    API.getListings()
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <main className="container container-fluid my-5 carousel-custom">
      {listings.map((listing) => (
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
    </main>
  );
}

export default Listings;

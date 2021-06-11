import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import FavStar from "../components/FavStar"

function Listing() {
  // Setting our component's initial state
  const [listing, setListing] = useState({});
  let { id } = useParams();
  let myListing = listing.user || {};
  // Load all books and store them with setBooks
  useEffect(() => {
    loadListing();
  }, {});

  // Loads all books and sets them to books
  function loadListing() {
    API.getListing(id)
      .then((res) => {
        console.log(res.data);
        setListing(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="card my-3 mx-auto" id="listing-div">
      <div className="row ">
        <FavStar />
        <div className="col-md-6">
          <img
            src={listing.image_path}
            alt={listing.title}
            className="my-listing-photo"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title">{listing.title}</h2>
            
            <p className="card-text">{listing.description}</p>
            <p className="card-text">
              <small className="text-muted">
                Created by: {myListing.name} on {listing.date_created}
              </small>
            </p>
            <p>Category: {listing.category}</p>
            <p>Status: {listing.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Listing;

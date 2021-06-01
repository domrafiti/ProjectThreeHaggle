import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";


export function Listing() {
  // Setting our component's initial state
  const [listing, setListing] = useState({});
  const [users, setUsers] = useState([]);
  let { id } = useParams();
  // const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    console.log("this id is " + id);
    API.getListing(id)
      .then((res) => setListing(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card my-3 mx-auto" id="listing-div">
      <div className="row ">
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
            {/* <p className="card-text"><small className="text-muted">Created by: {{user.name}} on
            {{format_date
            date_created}}</small>
        </p> */}
            <p>Category: {listing.category}</p>
            <p>Status: {listing.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Listing;

import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Listings() {
  const [listings, setListings] = useState([]);
  let loggedUser = localStorage.getItem("userId");
  useEffect(() => {
    loadListings();
  }, []);

  function loadListings() {
    API.getListings()
      .then((res) => {
        console.log(res.data);
        setListings(res.data);
      })
      .catch((err) => console.log(err));
  }

  const formatDate = (date) => {
    const theDate = date.substring(0, 10);
    const arrDate = theDate.split("-");
    const year = arrDate[0];
    const month = arrDate[1];
    const day = arrDate[2];
    return `${month}/${day}/${year}`;
  };

  return (
    <main className="container container-fluid my-5 carousel-custom">
      {listings
        .filter((listing) => listing.user !== loggedUser)
        .map((listing) => (
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
                      Created on {formatDate(listing.date_created)}
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

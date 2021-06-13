import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import API from "../utils/API";
import FavStar from "../components/FavStar";
import axios from "axios";
import StartHaggle from "../components/startHaggle";

function Listing() {
  // Setting our component's initial state
  const [listing, setListing] = useState({});
  const [faved, setFaved] = useState(false);
  const [ownListing, setOwnListing] = useState(false);
  let { id } = useParams();
  let myListing = listing.user || {};
  let loggedUser = localStorage.getItem("userId");
  // Load all books and store them with setBooks
  useEffect(() => {
    loadListing();
  }, [id]);

  // Loads all books and sets them to books
  function loadListing() {
    API.getListing(id)
      .then((res) => {
        let listingData = res.data;
        console.log(listingData.user._id);
        if (listingData.user._id === loggedUser) {
          console.log("its a match");
          setOwnListing(true);
        }
        setListing(listingData);
      })
      .catch((err) => console.log(err));
  }

  function makeFavorite() {
    axios
      .put("/api/users/favorites/" + loggedUser, {
        $addToSet: {
          favorites: [listing._id],
        },
      })
      .then((res) => {
        setFaved(true);
      })
      .catch((err) => console.log(err));
  }

  function editListing() {
    let myListing = listing.user || {};

    API.updateListing({
      id: "",
      title: Response.title,
      description: Response.description,
      category: Response.category,
      status: Response.status,
    });
  }

  return (
    <>
      {faved ? (
        <Redirect to="/profile" />
      ) : (
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
                <p className="card-text">
                  <small className="text-muted">
                    Created by: {myListing.name} on {listing.date_created}
                  </small>
                </p>
                <p>Category: {listing.category}</p>
                <p>Status: {listing.status}</p>
                {ownListing ? (
                  <div>
                    <button
                      className="btn btn-info mt-2 mb-2"
                      onClick={editListing}
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <>
                    {loggedUser ? (
                      <>
                        <div>
                          <button
                            className="btn btn-info mt-2 mb-2"
                            onClick={makeFavorite}
                          >
                            <span role="img" aria-label="money">
                              <i className="fas fa-thumbs-up"></i>
                            </span>{" "}
                            Mark Favorite
                          </button>
                        </div>
                        <StartHaggle />
                      </>
                    ) : (
                      <div>
                        <a className="btn btn-info m2-4 mb-2" href="/login">
                          <span role="img" aria-label="money">
                            <i className="fas fa-thumbs-up"></i>
                          </span>{" "}
                          Mark Favorite
                        </a>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Listing;

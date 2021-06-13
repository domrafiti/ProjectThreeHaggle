import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import API from "../utils/API";
import FavStar from "../components/FavStar";
import axios from "axios";
import StartHaggle from "../components/startHaggle";

function Listing() {
  // Setting our component's initial state
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();

  const [listing, setListing] = useState({});
  const [faved, setFaved] = useState(false);
  const [ownListing, setOwnListing] = useState(false);
  let { id } = useParams();
  let myListing = listing.user || {};
  let loggedUser = localStorage.getItem("userId");

  // Load all books and store them with setBooks
<<<<<<< HEAD
  console.log('15-listing.js', listing.user);
=======
>>>>>>> c0acd3a0284e4aca76459e51d5bf34d8a8bcf48f
  useEffect(() => {
    loadListing();
  }, [id]);

  // Update changes made to a listing
  function update() {
    axios
      .put("/api/listings/" + id, {
        title: title,
        description: description,
        category: category,
      })
      .then((res) => {
        window.location.reload("/listings/" + id);
      })
      .catch((err) => console.log(err));
  }

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
        <div className=" container container-fluid my-5 card" id="listing-div">
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
                      type="button"
                      className="btn btn-info mt-4 mb-4 btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={editListing}
                    >
                      Edit
                    </button>

                    <div
                      className="modal fade"
                      id="editModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Edit Listing
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form className="form new-project-form">
                              <div className="form-group">
                                <label htmlFor="email-login">
                                  Listing Title
                                </label>
                                <textarea
                                  className="form-input"
                                  type="text"
                                  id=""
                                  placeholder={listing.title}
                                  onChange={(e) => setTitle(e.target.value)}
                                ></textarea>
                              </div>
                              <div className="form-group">
                                <label htmlFor="password-login">
                                  listing Description
                                </label>
                                <textarea
                                  className="form-input"
                                  type="text"
                                  id=""
                                  placeholder={listing.description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                ></textarea>
                              </div>
                              <div className="form-group">
                                <label htmlFor="listing-category">
                                  Categories:
                                </label>
                                <select
                                  onChange={(e) => setCategory(e.target.value)}
                                  className="form-control"
                                  type="text"
                                  id="listing-category"
                                  name="listing_category"
                                >
                                  <option value="Automobiles">
                                    Automobiles
                                  </option>
                                  <option value="Clothing">Clothing</option>
                                  <option value="Farm Equipment">
                                    Farm Equipment
                                  </option>
                                  <option value="Furniture">Furniture</option>
                                  <option value="Miscellaneous">
                                    Miscellaneous
                                  </option>
                                  <option value="Skilled Labor">
                                    Skilled Labor
                                  </option>
                                  <option value="Unskilled Labor">
                                    Unskilled Labor
                                  </option>
                                </select>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={update}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
<<<<<<< HEAD
                <div>
                  <button
                    className="btn btn-info mt-4 mb-4"
                    onClick={editListing}
                  >
                    Edit
                  </button>
                </div>

=======
>>>>>>> c0acd3a0284e4aca76459e51d5bf34d8a8bcf48f
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Listing;

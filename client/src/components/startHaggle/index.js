import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import axios from "axios";

const StartHaggle = ({
  haggleTitle,
  haggleUser,
  haggleId,
  haggleStatus,
  haggleEmail,
}) => {
  const [users, setUsers] = useState({});
  let id = localStorage.getItem("userId");
  let myListings = users.listings || [];
  const [myHaggle, setMyHaggle] = useState("");
  const [myHaggleTitle, setMyHaggleTitle] = useState("");
  const [haggled, setHaggled] = useState(false);
  const [haggledStep2, setHaggledStep2] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [finalHaggle, setFinalHaggle] = useState(false);

  useEffect(() => {
    loadUsers();
  }, [id]);

  function loadUsers() {
    API.getUser(id)
      .then((res) => {
        //not getting setUser to actual set the user when called.
        let userData = res.data;
        console.log(res.data);
        let ratings = res.data.total_ratings;
        let total = 0;
        for (let i = 0; i < ratings.length; i++) {
          total = ratings[i] + total;
          console.log(total);
        }
        total = { averageRating: total / ratings.length };
        console.log(total);
        //setUsers(res.data, total)
        setUsers(userData);
        console.log(users);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit() {
    axios
      .put("/api/listings/" + myHaggle, {
        status: "Pending",
      })
      .then((res) => {
        axios
          .put("/api/listings/" + haggleId, {
            status: "Pending",
          })
          .then((res) => {
            setHaggled(true);
            setSubject("Let's Haggle");
            setBody(
              `Hi ${haggleUser},%0D%0DI would like to trade you my ${myHaggleTitle} for your ${haggleTitle}.%0D%0DBoth items have been set to Pending.%0D%0DIf you accept this Haggle, please click here: https://proj-three-haggle.herokuapp.com/listings/${haggleId} and edit your listing to set it as Accepted.%0D%0DThen we can setup a way to complete this transaction%0D%0DLet's Haggle!`
            );
          });
      })
      .catch((err) => console.log(err));
  }

  function handleHaggle() {
    setFinalHaggle(true);
  }

  return (
    <>
      {finalHaggle ? (
        <Redirect to="/profile"></Redirect>
      ) : (
        <div>
          {haggleStatus === "Active" ? (
            <button
              type="button"
              className="btn btn-primary mt-2 mb-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span role="img" aria-label="money">
                <i className="fas fa-hands-helping"></i>
              </span>{" "}
              Start Haggle
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary mt-2 mb-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              disabled
            >
              <span role="img" aria-label="money">
                <i className="fas fa-hands-helping"></i>
              </span>{" "}
              {haggleStatus} Haggle
            </button>
          )}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            {haggled ? (
              <div className="modal-dialog">
                {haggledStep2 ? (
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="text-center">
                        Nice{" "}
                        <span role="img" aria-label="money">
                          <i className="fas fa-hands-helping"></i>
                        </span>{" "}
                        Haggling!
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn btn-primary"
                        type="button"
                        data-bs-dismiss="modal"
                        onClick={handleHaggle}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="text-center">
                        We're{" "}
                        <span role="img" aria-label="money">
                          <i className="fas fa-hands-helping"></i>
                        </span>{" "}
                        Haggling!
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      Contact {haggleUser}
                      <br />
                      <br />
                      <p>Subject: {subject}</p>
                      <p>
                        Click the button below to send {haggleUser} a message
                        asking them to accept your Haggle!
                      </p>
                    </div>

                    <div className="modal-footer">
                      <a
                        type="button"
                        className="btn btn-primary"
                        type="submit"
                        href={
                          "mailto:" +
                          haggleEmail +
                          "?subject=" +
                          subject +
                          "&body=" +
                          body
                        }
                        onClick={() => {
                          setHaggledStep2(true);
                        }}
                      >
                        Send Haggle
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="text-center">
                      Let's{" "}
                      <span role="img" aria-label="money">
                        <i className="fas fa-hands-helping"></i>
                      </span>{" "}
                      Haggle!
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    Which of your listings do you want to{" "}
                    <span role="img" aria-label="money">
                      <i className="fas fa-hands-helping"></i>
                    </span>{" "}
                    Haggle with {haggleUser} for his {haggleTitle}?
                  </div>
                  {myListings.length > 0 ? (
                    <div className="modal-body">
                      {myListings.map((myListings) => (
                        <div key={myListings._id}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="myHaggle"
                            id={myListings._id}
                            value={myListings._id}
                            onClick={() => {
                              setMyHaggle(myListings._id),
                                setMyHaggleTitle(myListings.title);
                            }}
                          />{" "}
                          <label
                            className="form-check-label"
                            htmlFor="myHaggle"
                          >
                            {myListings.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="modal-body">
                      You have no Listings. Please return to your Profile and
                      create a Listing!
                    </div>
                  )}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Select Haggle
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StartHaggle;

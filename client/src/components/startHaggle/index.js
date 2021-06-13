import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import axios from "axios";

const StartHaggle = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    axios
      .post("/api/email")
      .then((res) => {
        if (res.data.success) {
          console.log("success");
        } else {
          console.log("failure");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-info mt-2 mb-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span role="img" aria-label="money">
          <i className="fas fa-hands-helping"></i>
        </span>{" "}
        Start Haggle
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <form onSubmit={handleSubmit}>
                <button type="button" className="btn btn-primary" type="submit">
                  Send Haggle
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHaggle;

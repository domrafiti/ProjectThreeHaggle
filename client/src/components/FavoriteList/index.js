import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import API from "../../utils/API";
import axios from "axios";

const FavoriteList = ({ myFavorites }) => {
  console.log(myFavorites);
  const formatDate = (date) => {
    const theDate = date.substring(0, 10);
    const arrDate = theDate.split("-");
    const year = arrDate[0];
    const month = arrDate[1];
    const day = arrDate[2];
    return `${month}/${day}/${year}`;
  };
  return (
    <div key={myFavorites._id}>
      <div className="card w-100 ">
        <div className="card-body row">
          <a
            type="button"
            style={{ color: "#212529" }}
            href={`/listings/${myFavorites._id}`}
          >
            <div>
              <h5 className="card-title col-md-12">{myFavorites.title}</h5>
            </div>
          </a>

          <div className="col-md-4" style={{ float: "left" }}>
            <img
              src={myFavorites.image_path}
              className="img-thumbnail"
              alt="..."
            />
          </div>

          <div className="col-md-6">
            <p className="card-text">{myFavorites.description}.</p>
            <p className="card-text">
              <small className="text-muted">
                Created on {formatDate(myFavorites.date_created)}
              </small>
            </p>
            <a
              className="btn btn-primary"
              id="listing-view"
              href={`/listings/${myFavorites._id}`}
            >
              View Listing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;

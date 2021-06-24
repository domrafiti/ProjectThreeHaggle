import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";

const UserListings = ({ myListings, users, setUpdate, loggedIn }) => {
  let { _id } = myListings;
  const [deleted, setDelete] = useState(false);

  //console.log(myListings);
  //console.log(loggedIn);
  function deleteListing(id) {
    API.deleteListing(id)
      .then((res) => setDelete(true))
      .catch((err) => console.log(err));
  }

  return (
    <>{
      deleted ? (
        <Redirect to="/profile" />
      ) : (
        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
          key={myListings._id}
        >
          <div className="accordion-item"   >
            <h2  className="accordion-header" id="flush-headingOne"  >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                

              >
                {myListings.title}
              </button>
            </h2>

            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-md-12" style={{ marginBottom:"20px" }}>
                    <small className="text-muted">
                      Created on {myListings.date_created}
                    </small>
                  </div>
                  <div className="col-md-6 ">
                    <img
                      src={myListings.image_path}
                      alt={myListings.title}
                      className=" img-thumbnail"
                    />
                  </div>

                  <div className="col-md-6" style={{ fontSize:"11px"}}>{myListings.description}</div>
                  <div className="row">
                    <div className="col-md-12" style={{ margin: " 20px auto"}}>
                      <div className="col-md-6" style={{ float:"left" }} >
                        <a
                          className="btn btn-primary"
                          id="listing-view"
                          href={`/listings/${myListings._id}`}
                        >
                          {" "}
                          View Listing
                        </a>
                      
                      </div>

                      <div className="col-md-1" style={{float:"right" }}>
                        <DeleteBtn deleteListing={deleteListing} id={_id} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}</>);
};

export default UserListings;

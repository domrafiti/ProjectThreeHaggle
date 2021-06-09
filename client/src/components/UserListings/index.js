import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import DeleteBtn from "../DeleteBtn"

const UserListings = ({myListings, users, setUpdate}) => {
    let { _id } = myListings
console.log(myListings);

    function deleteListing(id) {
        API.deleteListing(id)
        .then(res => setUpdate(Math.random()))
        .catch(err => console.log(err));
    }
    
    return (


        <div className="accordion accordion-flush" id="accordionFlushExample" style={{ maxWidth: "540px" }}
            key={myListings._id}>

            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        {myListings.title}
                    </button>
                </h2>


                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <div className="row">

                            <div className="col-md-12">
                                <small className="text-muted">
                                    Created on {myListings.date_created}
                                </small>

                            </div>
                            <div className="col-md-4 " >
                                <img
                                    src={myListings.image_path}
                                    alt={myListings.title}
                                    className=" img-thumbnail"
                                />
                            </div>

                            <div className="col-md-6">
                                {myListings.description}
                            </div>

                        <div className="col-md-4">
                            <a
                                className="btn btn-primary"
                                id="listing-view"
                                href={`/listings/${myListings._id}`}> View Listing
                        
                            </a>
                        
                        </div>

                        <div className="col-md-2">
                        < DeleteBtn deleteListing={deleteListing} id={_id} />
                        </div>



                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UserListings
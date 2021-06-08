import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import DeleteBtn from "../DeleteBtn"

function posts () {
    const [listings, setListings] = useState([])
    let { id } =useParams();
}

function deleteListing(id) {
    API.deleteListing(id)
    .then(res.data)
    .catch(err => console.log(err));
}

const UserListings = ({ myListings }) => {
    return (
        // <div
        //     className="card my-3 mx-auto"
        //     style={{ maxWidth: "540px" }}
        //     key={myListings._id}
        // >
        //     <div className="row g-0">
        //         <div className="col-md-4">
        //             <img
        //                 src={myListings.image_path}
        //                 alt={myListings.title}
        //                 className="my-listing-photo"
        //             />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">{myListings.title}</h5>
        //                 <p className="card-text">{myListings.description}</p>

        //                 <p className="card-text">
        //                     <small className="text-muted">
        //                         Created by on {myListings.date_created}
        //                     </small>
        //                 </p>
        //                 <a
        //                     className="btn btn-primary"
        //                     id="listing-view"
        //                     href={`/listings/${myListings._id}`}
        //                 > View Listing</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

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
                        <DeleteBtn onClick={() => deleteListing(myListings._id)}/>
                        </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UserListings

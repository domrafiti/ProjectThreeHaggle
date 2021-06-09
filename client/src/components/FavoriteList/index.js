import React, { useEffect, useState } from "react";

import API from "../../utils/API"

const FavoriteList = () => {

    const [listings, setListings] = useState([]);
    // const [formObject, setFormObject] = useState({});

    // Load all books and store them with setBooks
    useEffect(() => {
        loadListings();
    }, []);

    // Loads all books and sets them to books
    function loadListings() {
        API.getListings()
            .then((res) => setListings(res.data))
            .catch((err) => console.log(err));
    }
    return (

        listings.map((listing) => (

            <div>

                <div className="card w-100 " key={listing._id}>
                    <div className="card-body row" >
                        <a type="button" style={{ color: "#212529" }} href={`"/listings/${listing._id}`}
                        >
                            <div  >
                                <h5 className="card-title col-md-12">{listing.title}</h5>

                            </div>
                        </a>

                        <div className="col-md-4" style={{ float: "left" }}  >
                            <img
                                src={listing.image_path}
                                className="img-thumbnail"
                                alt="..." />
                        </div>

                        <div className="col-md-6" >
                            <p className="card-text">{listing.description}.</p>
                        </div>


                    </div>
                </div>

            </div>

        ))
    )
}

export default FavoriteList

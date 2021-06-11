import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import FavStar from "../FavStar";

const FavoriteList = () => {

    const [favorites, setFavorites] = useState([]);
    const [listing, setListing] = useState({});
    const myFavorites = favorites.user || {};
    // const [formObject, setFormObject] = useState({});

    // Load all books and store them with setBooks
    useEffect(() => {
        loadFavorites();
    }, []);

    // Loads all books and sets them to books
    function loadFavorites() {
        API.getUsers()
            .then((res) => setFavorites(res.sdata))
            .catch((err) => console.log(err));
    }
    return (

        favorites.map((favorites) => (

            <div>

                <div className="card w-100 " key={favorites._id}>
                    <div className="card-body row" >
                        <FavStar className="col-md-2" style={{ float: "right" }} />
                        <a type="button" style={{ color: "#212529" }} href={`"/listings/${favorites._id}`}
                        >
                            <div  >
                                <h5 className="card-title col-md-12">{favorites.title}</h5>

                            </div>
                        </a>

                        <div className="col-md-4" style={{ float: "left" }}  >
                            <img
                                src={favorites.image_path}
                                className="img-thumbnail"
                                alt="..." />
                        </div>

                        <div className="col-md-6" >
                            <p className="card-text">{favorites.description}.</p>
                        </div>


                    </div>
                </div>

            </div>

        ))
    )
}

export default FavoriteList

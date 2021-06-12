import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";

function Home() {
  // Setting our component's initial state
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
    <div className="container carousel-container">
      <div className="row">
        <Welcome />
        <Carousel listings={listings} />
      </div>
    </div>
  );
}
export default Home;

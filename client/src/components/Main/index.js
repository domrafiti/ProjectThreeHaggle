import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./haggle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import handshake from "./handshake.jpeg";
function Main() {
  // Setting our component's initial state
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadUsers();
  }, []);

  // Loads all books and sets them to books
  function loadUsers() {
    API.getListings()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <main className="container container-fluid my-5 carousel-custom">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={handshake}
              className="d-block w-100"
              alt="Landing page image"
            />
            <div className="carousel-caption carousel-caption-custom">
              <h5>Welcome to Haggle!</h5>
              <p>Scroll through to see current listings!</p>
            </div>
          </div>

          {users.map((user) => (
            <div key={user._id}>
              {user.listings.map((listing) => (
                <div className="carousel-item">
                  <img
                    src={listing.image_path}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption carousel-caption-custom">
                    <h5>{listing.title}</h5>
                    <p>{listing.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
}
export default Main;

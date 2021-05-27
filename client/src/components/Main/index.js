import React, { useEffect, useState } from "react";
import API from "../../utils/API";

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
    // <div
    //   id="carouselExampleCaptions"
    //   className="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       {/* <img src="/img/handshake.jpeg" className="d-block w-100" alt="Landing page image"> */}
    //       <div className="carousel-caption carousel-caption-custom">
    //         <h5>Welcome to Haggle! </h5>

    //         <p>Scroll through to see current listings!</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>

    // </div>
    <>
      {users.map((user) => (
        <div key={user._id}>
          <h1 style={{ color: "white" }}> {user.name}</h1>
          <br></br>
          {user.listings.map((listing) => (
            <p key={listing.listing_id}>
              <h1 style={{ color: "white" }}>{listing.title}</h1>
            </p>
          ))}
        </div>
      ))}
    </>
  );
}

export default Main;

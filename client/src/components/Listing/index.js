import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./haggle.css";

export function Listing() {
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadUsers();
  }, []);

  // Loads all books and sets them to books
  function loadUsers() {
    API.getListing()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      {/* {users.map((user) => (
        <div>
          {user.listings.map((listing) => (
            <p>{listing.title}</p>
          ))}
        </div>
      ))} */}
    </>
  );
}
export default Listing;

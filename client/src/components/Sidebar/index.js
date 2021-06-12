import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Footer from "../Footer"
import "./style.css"

const Sidebar = ({ loggedIn }) => {
  const [listingsRoute, setListingsRoute] = useState(false);

  function onListings() {
    setListingsRoute(true);
  }

  function handleLogout() {
    console.log("logout button");
    localStorage.clear();
    window.location.replace("/");
  }

  if (listingsRoute) {
    return <Redirect to='/listings' />
  }


  return (
    <div >
      <button
        className="btn btn-primary"
        style={{ background: "transparent", marginBottom: "30px" }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i
          className="bi bi-list"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        ></i>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h3
            className="offcanvas-title"
            id="offcanvasWithBothOptionsLabel"
            role="button"
            href="/"
          >
            <span role="img" aria-label="money">
              <i className="fas fa-hands-helping"></i>
            </span>
            <a className="haggle" role="button" href="/">
              Haggle
            </a>
          </h3>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <nav className="nav flex-column">
            <a
              className="nav-link active"
              aria-current="page"
              role="button"
              href="/listings"
            >
              Listings
            </a>
            {loggedIn ? (
              <>
                <a className="nav-link" role="button" href="/profile">
                  Profile
                </a>
                <a className="nav-link" role="button" onClick={handleLogout}>
                  Logout
                </a>
              </>
            ) : (
              <>

                < a className="nav-link" role="button" href="/login">
                  Login
                </a>

                <a className="nav-link" role="button" href="/signup">
                  Signup
                </a>
              </>
            )}
            <Footer />
          </nav>

        </div>
      </div >
    </div >
  );
};

export default Sidebar;

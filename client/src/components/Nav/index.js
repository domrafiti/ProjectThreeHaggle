import React from "react";

function Nav() {
  return (
    <header className="display-flex justify-space-between align-center p-2">
      <h1>
        <span role="img" aria-label="money">
          <i className="fas fa-hands-helping"></i>
        </span>
        <a id="haggle" className="no-button nav-btn" role="button" href="/">
          Haggle
        </a>
      </h1>
      <nav className="nav-div">
        {/* <!-- Conditionally render login or logout links --> */}
        <a
          id="all-listings"
          className="no-button nav-btn"
          role="button"
          href="/listings"
        >
          view all listings
        </a>{" "}
        |{/* {{#if logged_in}} */}
        <a
          id="profile"
          className="no-button nav-btn"
          role="button"
          href="/profile"
        >
          profile
        </a>{" "}
        |
        <button className="no-button nav-btn" id="logout">
          logout
        </button>
        {/* {{else}} */}
        <a className="no-button nav-btn" id="login" role="button" href="/login">
          login
        </a>
        {/* {{/if}} */}
      </nav>
    </header>
  );
}

export default Nav;

import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import { FaUser, FaSignOutAlt } from "react-icons/fa"

function Nav() {
  let loggedUser = localStorage.getItem("userId");
  const [loggedIn, setLoggedIn] = useState(false);

  function checkLogin() {
    if (loggedUser) {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  function handleLogout() {
    console.log("logout button");
    localStorage.clear();
    setLoggedIn(false);
    window.location.replace("/");
  }

  return (
    <header className="display-flex justify-space-between align-center p-2">
      <Sidebar loggedIn={loggedIn} />
      <h1 id="haggle">
        <span role="img" aria-label="money">
          <i className="fas fa-hands-helping"></i>
        </span>
        <a className="no-button nav-btn" role="button" href="/">
          Haggle
        </a>
      </h1>
      {loggedIn ? (
        <button
          className="no-button nav-btn"
          id="login"
          role="button"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
        </button>
      ) : (
        <a className="no-button nav-btn" id="login" role="button" href="/login">
          <FaUser />
        </a>
      )}
    </header>
  );
}

export default Nav;

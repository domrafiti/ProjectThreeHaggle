import React from "react";
import Sidebar from "../Sidebar"
import "./style.css"

function Nav() {
  return (
    <header className="display-flex justify-space-between align-center p-2">
      <Sidebar />
      <h1 id="haggle">
        <span role="img" aria-label="money">
          <i className="fas fa-hands-helping"></i>
        </span>
        <a  className="no-button nav-btn" role="button" href="/">
          Haggle
        </a>
      </h1>
        {/* <button className="no-button nav-btn" id="logout">
          logout
        </button> */}
        {/* {{else}} */}
        <a className="no-button nav-btn" id="login" role="button" href="/login">
          login
        </a>
        {/* {{/if}} */}
  

    </header>
  );
}

export default Nav;

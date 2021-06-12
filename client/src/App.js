import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Listing from "./pages/Listing";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import FileUpload from "./components/Upload";
import FileUploadMany from "./components/UploadMany";
import CreateNew from "./pages/createNew";
import EditListing from "./pages/EditListing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./haggle.css";

function App() {
  return (
    <div className="flex-column justify-space-around ">
      <Router>
        <Nav />

        <Switch>
          {/* Logged in routing here */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new-listing">
            <CreateNew />
          </Route>
          <Route exact path="/edit-listing">
            <EditListing />
          </Route>
          <Route exact path="/listings">
            <Listings />
          </Route>
          <Route exact path="/listings/:id">
            <Listing />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/profile/">
            <Profile />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/upload">
            <FileUpload />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

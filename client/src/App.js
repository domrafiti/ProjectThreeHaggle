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
import "bootstrap/dist/css/bootstrap.min.css";
import "./haggle.css";

function App() {
  return (
    <div className="flex-column justify-space-around ">

      <Router>

        <Switch>
          {/* Logged in routing here */}
          <Route exact path="/">
            <Nav />
            <Home />
          </Route>
          <Route exact path="/new-listing">
            <Nav />
            <CreateNew />
          </Route>
          <Route exact path="/listings">
            <Nav />
            <Listings />
          </Route>
          <Route exact path="/listings/:id">
            <Nav />
            <Listing />
          </Route>
          <Route exact path="/profile/:id">
            <Nav />
            <Profile />
          </Route>
          <Route exact path="/profile/">
            <Nav />
            <Profile />
          </Route>
          <Route exact path="/login">
            <Nav />
            <Login />
          </Route>
          <Route exact path="/signup">
            <Nav />
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

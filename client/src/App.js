import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Listing from "./components/Listing";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./components/Profile";
import NoMatch from "./pages/NoMatch";
import FileUpload from "./components/Upload"
import FileUploadMany from "./components/UploadMany"
import "bootstrap/dist/css/bootstrap.min.css";
import "./haggle.css";

function App() {
  return (
    <div className="flex-column justify-space-around ">
      <Nav />
      <Router>
        <Switch>
          {/* Logged in routing here */}
          <Route exact path="/">
            <Main />
            <FileUpload />
            <FileUploadMany />
            <Home />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;

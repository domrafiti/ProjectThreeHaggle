import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Listing from "./components/Listing";
import Listings from "./components/Listings";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import NoMatch from "./pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="flex-column justify-space-around">
      <Nav />
      <Router>
        <Switch>
          {/* Logged in routing here */}
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/listings">
            <Listings />
          </Route>
          <Route exact path="/listings/:id">
            <Listing />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
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

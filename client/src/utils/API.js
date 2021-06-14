import axios from "axios";

export default {
  // Gets all listings
  getListings: function () {
    return axios.get("/api/listings");
  },
  // Gets the listing with the given id
  getListing: function (id) {
    return axios.get("/api/listings/" + id);
  },
  // Deletes the listing with the given id
  deleteListing: function (id) {
    return axios.delete("/api/listings/" + id);
  },
  //Saves a book to the database
  saveListing: function (listingData) {
    console.log("111-listingData", listingData);
    return axios.post("/api/listing", listingData);
  },
  updateListing: function (id) {
    return axios.put("/api/listings/edit/" + id);
  },
  editListing: function (id) {
    return axios.get("/api/listings/edit/" + id);
  },
  getUsers: function () {
    return axios.get("/api/users");
  },
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  createUser: function (data) {
    return axios.post("/api/users", data);
  },
  //new update user function to handle favorites and other things
  updateUser: function (data) {
    return axios.put("/api/users/id", data);
  },
  haggle: function () {
    return axios.post("/api/send");
  },

  verifyUser: function (data) {
    console.log(data);
    return axios.post("/api/login", data);
  },
};

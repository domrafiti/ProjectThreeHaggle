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
  // Saves a book to the database
  // saveListing: function (bookData) {
  //   return axios.post("/api/listing", listingData);
  // },
  getUsers: function () {
    return axios.get("/api/users");
  },
  createUser: function () {
    return axios.post("/api/users");
  },

  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
};

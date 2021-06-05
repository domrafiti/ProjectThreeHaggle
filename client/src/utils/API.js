import axios from "axios";

export default {
  // Gets all listings
  getListings: function () {
    console.log("get listings");
<<<<<<< HEAD
    return axios.get("/api/res.data");
=======
    return axios.get("/api/listings");
>>>>>>> 33b9de1ef498a478af8881a966c9d31b582bb38a
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
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
};

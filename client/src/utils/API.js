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
  getUsers: function () {
    return axios.get("/api/users");
  },
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  createUser: function (data) {
    return axios.post("/api/users", data);
  },
  verifyUser: function (data) {
    console.log(data)
    return axios.post("/api/login", data);
  },
};

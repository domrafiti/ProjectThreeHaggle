import axios from "axios";

export default {
  // Gets all books
  getListings: function () {
    return axios.get("/api/listings");
  },
  // Gets the book with the given id
  getListing: function (id) {
    return axios.get("/api/listing/" + id);
  },
  // Deletes the book with the given id
  deleteListing: function (id) {
    return axios.delete("/api/listing/" + id);
  },
  // Saves a book to the database
  // saveListing: function (bookData) {
  //   return axios.post("/api/listing", listingData);
  // },
};

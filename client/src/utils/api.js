import axios from "axios";

export default {
  // Gets all Listing
  findAll: function() {
    return axios.get("/listing/a");
  },
  // Gets the book with the given id
  findByZipCode: function(id) {
    return axios.get("/listing/" + id);
  },
};

import axios from "axios";

export default {
  // Gets all Listing
  findall: function() {
    return axios.get("/listing");
  },
  // Gets the book with the given id
  findByZipCode: function(id) {
    return axios.get("/listing/" + id);
  },
};

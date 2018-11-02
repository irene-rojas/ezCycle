import axios from "axios";

export default {
  // Gets all Listing on the home route
  findAll: function() {
    return axios.get("/");
  },
  // Gets the book with the given id
  findByZipCode: function(zipCode) {
    return axios.get("/zipcode/" + zipCode);
  },
};

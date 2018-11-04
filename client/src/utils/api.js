import axios from "axios";

export default {
  // Gets all Listing on the home route
  findAll: function() {
    console.log("Imported from utils/api")
    return axios.get("/listing");
  },
  // Gets the book with the given id
  findByZipCode: function(zipCode) {
    return axios.get("/listing/" + zipCode);
  },
};

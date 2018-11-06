import axios from "axios";

export default {
  // Gets all Listing on the home route
  findAll: function() {
    console.log("Imported from utils/api")
    return axios.get("/listing");
  }
};

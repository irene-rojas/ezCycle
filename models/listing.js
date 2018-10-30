const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  name: {
      type: String, 
      required: true 
    },
  address: { 
      type: String, 
      required: true 
    },
  days: {
      type: String,
    required: true
    },
  url: { 
      type: String, 
      required: true
    },
  lat: {
      type: Number, 
      required: true
    },
  long: {
      type: Number, 
      required: true
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;

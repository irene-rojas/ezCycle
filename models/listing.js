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
  zipCode: {
    type: Number,
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
    },
    notes: {
      type: String,
    },
    rechargeableBatteries: {
      type: Boolean,
      default: false 
    },
    crt: {
      type: Boolean,
      default: false
    },
    tvLCD: {
      type: Boolean,
      default: false
    },
    computers: {
      type: Boolean,
      default: false 
    },
    tabletsPhones: {
      type: Boolean,
      default: false
    },
    wires: {
      type: Boolean,
      default: false
    },
    homeAppliances: {
      type: Boolean,
      default: false 
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;

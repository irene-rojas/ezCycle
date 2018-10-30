const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ezCycleDB"
  );

const ezCycleSeed = [
    {
        name: "Household Hazardous Waste & Electronics Collection (City of Alexandria, VA)",
        address: "3224 Colvin St, Alexandria, VA 22314",
        
    }
];
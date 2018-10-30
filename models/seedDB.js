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
        days: "Saturday: 7:30am - 3:30pm (except holidays), Monday: 7:30am - 3:30pm (except holidays)",
        url: "https://www.alexandriava.gov/tes/solidwaste/info/default.aspx?id=19206",
        lat: "38.806933",
        long: "-77.086211"
    }
];
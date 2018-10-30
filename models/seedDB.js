const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ezCycleDB", { useNewUrlParser: true }
  );

const ezCycleSeed = [
    {
        name: "Household Hazardous Waste & Electronics Collection (City of Alexandria, VA)",
        address: "3224 Colvin St, Alexandria, VA 22314",
        zipCode: "22314",
        days: "Saturday: 7:30am - 3:30pm (except holidays),\nMonday: 7:30am - 3:30pm (except holidays)",
        url: "https://www.alexandriava.gov/tes/solidwaste/info/default.aspx?id=19206",
        lat: 38.806933,
        long: -77.086211,
        notes: "Proof of residency is required",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true 
    },
    {
        name: "Arlington Environmental Collection and Recycling Event (E-CARE)",
        address: "1425 N Quincy St, Arlington, VA 22201",
        zipCode: 22201,
        days: "Nov. 17, 2018: 8:30 a.m. - 1 p.m.",
        url: "https://recycling.arlingtonva.us/household-hazmat/e-care/",
        lat: 38.889079,
        long: -77.107540,
        notes: "Proof of residency is required\nFee for CRT",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true
    },
    {
        name: "Quarterly Recycling Day (Town of Vienna, VA)",
        address: "600 Mill Street NE, Vienna, VA 22180",
        days: "Dec. 1, 2018, 8:00 a.m.- 2:00 p.m.",
        url: "https://www.viennava.gov/index.aspx?nid=174",
        lat: 38.910879,
        long: -77.271173,
        notes: "No CRT TVs or screens"
    },
    {
        name: "Turtle Wings",
        address: "3200 Hubbard Rd, Hyattsville, MD 20785",
        days: "Call (833)-227-8990 for details",
        url: "https://turtlewings.com/corporations/recycling/electronics_recycling_dc",
        lat: 38.929781,
        long: -76.873768,
        notes: " "
    }
];

db.Listing
  .remove({})
  .then(() => db.Listing.collection.insertMany(ezCycleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
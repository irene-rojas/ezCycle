//Server Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require("./models");

// Serve Static Assests on build production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

//Mongo Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ezCycleDB", { useNewUrlParser: true });

//Sends all seed data to /listing server port
app.get("/listing", function (req, res) {
  db.Listing.find({})
      .then(function (listingData) {
          res.json(listingData)
      })
      .catch(function (err) {
          res.json(err);
      });
});

//Server Start and Listen Verification
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`ezCycle server now listening on PORT ${PORT}!`)
});
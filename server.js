//Server Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("express").Router();
const db = require("./models");
const routes = require("./routes");

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

// app.use(routes);

// //Routing for API for Listing Front End
// router.route("/listing").get(findAll(req, res) {
//     db.Listing.find(req.query)
//       .then(listingData => res.json(listingData))
//       .catch(err => res.status(422).json(err))
// });

// // Matches with "/listing/:zipcode"
// router.route("/listing/:zipcode").get(findByZipCode(req, res) {
//     db.Listing.findById(req.params.zipCode)
//       .then(listingData => res.json(listingData))
//       .catch(err => res.status(422).json(err))
  
// });
  
//Server Start and Listen Verification
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`ezCycle server now listening on PORT ${PORT}!`)
});
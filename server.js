//Server Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("express").Router();
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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recycling", { useNewUrlParser: true });

//Server Start and Listen Verification
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`ezCycle server now listening on PORT ${PORT}!`)
});


//Define Methods of controlling and accessing the Listing DB via the functions findAll and findByZipCode. 

// Home route that finds and displays all entries on the map leaflet
app.route('/').get(function (req, res) {
  db.Listing
    .find(req.query)
    console.log(req.query)
    console.log(res)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  res.send(dbModel);
})


app.route('/zipCode').get(function (req, res) {
  db.Listing
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  res.send(dbModel);
})



// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)

// // Matches with "/api/books/:zipCode"
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// router
//   .route("/:zipCode")
//   .get(booksController.findByZipCode)

// findAll: function(req, res) {
//   db.Listing
//     .find(req.query)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// findByZipCode: function(req, res) {
//   db.Listing
//     .findById(req.params.id)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// }
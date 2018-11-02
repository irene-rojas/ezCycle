// const router = require("express").Router();
// const db = require("../models");

// //Define Methods of controlling and accessing the Listing DB via the functions findAll and findByZipCode. 

// // Home route that finds and displays all entries on the map leaflet

// const booksController = require("../controllers/listingsController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
  
// // Matches with "/api/books/:zipCode"
// router
//   .route("/:zipCode")
//   .get(booksController.findByZipCode)

// // router.get("/", function(req, res) {
// //         db.Listing
// //             .find()
// //             .then(function (dbModel) { res.json(dbModel)})
// //             .catch(err => res.status(422).json(err));
            
// // });
// //     findByZipCode: function(req,res) {
// //         console.log("Find All Res:",res)
// //         db.Listing
// //             .findByZipCode(req.params.zipCode)
// //             .then(dbModel => res.json(dbModel))
// //             console.log ("Find by zip Code:", dbModel)
// //             .catch(err => res.status(422).json(err));

// // Matches with "/listing/:zipcode"
// // router.route("/:zipcode")
// //   .get(listingController.findByZipcode)
// // console.log("Find by Zip code",listingController.findByZipCode) 

// module.exports = router;

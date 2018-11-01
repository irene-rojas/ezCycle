const router = require("express").Router();
const listingController = require("../controllers/listingController");

// Matches with "/listing"
router.route("/")
   .get(listingController.findAll)
  //  console.log("Find all",listingController.findAll)
  

// Matches with "/listing/:zipcode"
// router.route("/:zipcode")
//   .get(listingController.findByZipcode)
  // console.log("Find by Zip code",listingController.findByZipCode)

  

module.exports = router;

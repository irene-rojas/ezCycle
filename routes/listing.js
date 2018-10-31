const router = require("express").Router();
const listingController = require("../controllers/listingController");

// Matches with "/listing"
router.route("/")
  .get(listingController.findAll)
//   .post(listingController.findAll);

// Matches with "/listing/:zipcode"
router.route("/:zipcode")
  .get(listingController.findByZipcode)

module.exports = router;

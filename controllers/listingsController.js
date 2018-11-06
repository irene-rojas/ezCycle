const db = require("../models");

// Defining methods for the listingController
module.exports = {
  findAll: function(req, res) {
    db.Listing
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

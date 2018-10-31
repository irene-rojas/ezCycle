const db = require("../models");

//Define Methods of controlling and accessing the Listing DB via the
//functions findAll and findByZipCode. 
module.exports = {
    findAll: function(req, res) {
        db.Listing
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByZipCode: function(req,res) {
        db.Listing
            .findByZipCode(req.params.zipCode)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};


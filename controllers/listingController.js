// const db = require("../models");

// //Define Methods of controlling and accessing the Listing DB via the
// //functions findAll and findByZipCode. 
// module.exports = {
//     findAll: function(req, res) {
//         // console.log("Find All Res:",db.Listing);
//         db.Listing
//             .find({})
//             .then(function(dbModel){
//                 // console.log(dbModel);
//                 res.json(dbModel);
//             })
//             // console.log ("Find All:", dbModel)
//             .catch(err => res.status(422).json(err));
//     }
//     findByZipCode: function(req,res) {
//         console.log("Find All Res:",res)
//         db.Listing
//             .findByZipCode(req.params.zipCode)
//             .then(dbModel => res.json(dbModel))
//             console.log ("Find by zip Code:", dbModel)
//             .catch(err => res.status(422).json(err));
    // }

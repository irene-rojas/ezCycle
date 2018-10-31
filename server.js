//Server Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Serve Static Assests on build production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

//Mongo Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recycling", { useNewUrlParser: true });

//Hook Express up to routes
const routes = require("./routes");
app.use(routes);

//Server Start and Listen Verification
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`ezCycle server now listening on PORT ${PORT}!`)
});
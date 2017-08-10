const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// // parse application/x-www-form-urlencoded 
// app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json 
// app.use(bodyParser.json());

// path to static files
app.use(express.static("public"));

// WildCard for all other routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/main.html"));
// });

//MAIN:
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

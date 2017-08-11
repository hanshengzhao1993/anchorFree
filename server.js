const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// path to static files
app.use(express.static("public"));


//MAIN:
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

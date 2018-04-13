var express = require("express");
var bodyParser = require("body-parser");
var route = require("./routes");
var path = require('path');
var database = require("../database/index.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/../client/dist"));

app.post("/reviews", route.postReview)
app.get("/reviews", route.getReview)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})




module.exports = app;

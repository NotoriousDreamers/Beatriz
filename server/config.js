const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes.js");
const path = require('path');
const db = require('../database/index.js')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/../client/dist"));


app.post("/email", route.postInfo)
app.get('/email', route.retreiveInfo)
app.get('/packages', route.getPackages)
app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));

})



module.exports = app;

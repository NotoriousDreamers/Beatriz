var database = require("../database/index.js");
var url = require('url');
var path = require('path');

exports.postReview = (req, res) => {
  let title = req.body.title;
  let reviews = req.body.reviews;

  database.insertOne(title, reviews)
  .then(results => {
    res.status(200).send(results)
  })
  .catch(err => {console.log(err)})
};

exports.getReview = (req, res) => {

  database.selectAll()
    .then(results=> {
      console.log(results)
      res.status(200).json(results)
    })
    .catch(err => {console.log(err)})
};

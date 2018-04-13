const db = require('../database/index.js')

const path = require('path');



exports.postInfo = (req, res) => {
  console.log(req.body);
  let fullName = req.body.fullName;
  let email =req.body.email
  let phoneNumber =req.body.phoneNumber;
  let questions=req.body.questions
  console.log(db.postInfo)
  db.postInfo(fullName,email,phoneNumber,questions)
  .then(data => {
    res.status(200).send(data)
    console.log('yy');
  })
  .catch(err => { console.log(err) })

};

exports.retreiveInfo = (req, res) => {
  db.retreiveInfo()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
};
exports.getPackages=(req,res)=>{
  Promise.all([
    db.getPackages()
  ])
  .then(data =>{
    res.status(200).json(data)
  })
  .catch(err => {console.log(err)})
}

exports.postReview = (req, res) => {
  let title = req.body.title;
  let reviews = req.body.reviews;

  db.insertOne(title, reviews)
  .then(results => {
    res.status(200).send(results)
  })
  .catch(err => {console.log(err)})
};

exports.getReview = (req, res) => {

  db.selectAll()
    .then(results=> {
      console.log(results)
      res.status(200).json(results)
    })
    .catch(err => {console.log(err)})
};

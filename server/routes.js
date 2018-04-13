const db = require('../database/index.js')
const url= require('url');
const path = require('path');



exports.postInfo = (req, res) => {
  console.log(req.body);
  let fullName = req.body.fullName;
  let email =req.body.email
  let phoneNumber =req.body.phoneNumber;

 let questions=req.body.questions
  db.postInfo(fullName,email,phoneNumber,questions)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
};

exports.retreiveInfo =(req,res)=>{
  Promise.all([
    db.retreiveInfo()
  ])
  .then(data =>{
    res.status(200).json(data)
  })
  .catch(err => {console.log(err)})
}
exports.getPackages=(req,res)=>{
  Promise.all([
    db.getPackages()
  ])
  .then(data =>{
    res.status(200).json(data)
  })
  .catch(err => {console.log(err)})
}

var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "beatriz",
  password: ""
});

const postInfo = function(fullName,email, phoneNumber, questions) {
  return new Promise((resolve, reject) => {
connection.query('INSERT INTO info (fullName, email, phoneNumber,  questions) VALUES(?, ?, ?, ?)',
[fullName, email, phoneNumber, questions], (err, data) => {
  if(err){
    return reject(err);
    console.log('error postInfo');
   }
   return resolve(data);
   console.log('posted');


var selectAll = function() {
return new Promise((resolve, reject) =>{
  connection.query("SELECT * FROM reviews",(err, results)=>{
    if(err){
      return reject(err);
    }
    return resolve(results);
  })
})
};

var insertOne = function(title, reviews){
return new Promise((resolve, reject) => {
  connection.query("INSERT INTO reviews(title, reviews) VALUE(?, ?)",
[title, reviews], (err, results) => {
  if(err){
    return reject(err);
  }
  return resolve(results);
 })
})
};

const retreiveInfo = function(){
  return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM info', (err,data)=>{
      if(err){
        return reject(err);
        console.log('err retreiveInfo');
      }
   return resolve(data)
    })
  })
};

const getPackages = function(){
  return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM packages', (err,data)=>{
      if(err){
        return reject(err);
      }
   return resolve(data)
    })
  })
}

module.exports.postInfo= postInfo;
module.exports.retreiveInfo=retreiveInfo;
module.exports.getPackages=getPackages;
module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;

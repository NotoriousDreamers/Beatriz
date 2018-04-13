var mysql = require("mysql2");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "beatriz",
  password: "Holacode"
});

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

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "beatriz",
  password: "Holacode"
});

const postInfo = function(fullName,email, phoneNumber, questions) {
  return new Promise((resolve, reject) => {
connection.query('INSERT INTO info(fullName, email,phoneNumber,  questions) VALUES(?, ?, ?, ?)',
[fullName, email,phoneNumber, questions], (err, results) => {
  if(err){
    return reject(err);
   }
   return resolve(result);
 })
})
};

const retreiveInfo = function(){
  return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM info', (err,results)=>{
      if(err){
        return reject(err);
      }
   return resolve(results)
    })
  })
}

const getPackages = function(){
  return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM packages', (err,results)=>{
      if(err){
        return reject(err);
      }
   return resolve(results)
    })
  })
}

module.exports.postInfo= postInfo;
module.exports.retreiveInfo=retreiveInfo;
module.exports.getPackages=getPackages

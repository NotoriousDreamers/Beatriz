var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "beatriz",
  password: "Holacode"
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
module.exports.getPackages=getPackages

var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'kushagra',
    database:'mysql'
});

// connection.connect(function(error){
//  if(error){
//     console.log('Connection not established '+error);
//  }
//  else{
//      console.log('Connection established');
//  }
// });

var checkURL = function(lurl){
   return new Promise(function(resolve,reject){
        var sql = "select name from student where email=?";
        connection.query(sql,lurl,function(error,rows,fields){
            if(error){
                console.log("Error Occurred in fetching data from database");
            }
            else{
                if(rows.length!=0){
                 resolve(rows[0].name);
                }
                else{
                    reject("No any data found");
                }
            }
        });
    });
}

var insertShortURL = function(longurl,shorturl){
   return new Promise(function(resolve,reject){
       var sql = "insert into url values (?,?)";
       connection.query(sql,[longurl,shorturl],function(error,rows,fields){
           
       });
   });
}
module.exports.connection = connection;
module.exports.checkURLr = checkURL;
app.listen(3310);
var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'kush',
    database:'mysql'
});

connection.connect(function(error){
 if(error){
    console.log('Connection not established '+error);
 }
 else{
     console.log('Connection established');
     checkUrl();
 }
});

var checkUrl = function(longurl){
    connection.query("select count(*) from student where email='kush124@gmail.com'",function(error,rows,fields){
        if(error){
            console.log("Error Occurred in fetching data from database");
        }
        else{
            if(rows > 0){
                return true;
            }
            else{
                return false;
            }
        }
    });
}

module.exports.connection = connection;
module.exports.checkUrl = checkUrl;
app.listen(3306);
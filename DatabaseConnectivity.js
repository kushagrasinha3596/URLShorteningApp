var express = require('express');
var mysql = require('mysql');
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
 }
});

app.get('/',function(req,res){
    connection.query("select * from student",function(error,rows,fields){
        if(error){
            console.log("Error Occurred in fetching data from database");
        }
        else{
            console.log(rows);
        }
    });
});

app.listen(3306);
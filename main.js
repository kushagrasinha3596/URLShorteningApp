var res = module.require("./DatabaseConnectivity");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var urlEncodedParser = app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
app.get('/generateShortURL',urlEncodedParser, function(req,res){
console.log("Kushagra "+req.body);
});

// function getURL(){
// var url = document.getElementById("urlinput").value;
// var protocol = url.startsWith("https://") || url.startsWith("http://");
// if(!protocol){
//     url="http://"+url;
//     return url;
//  }
//  return url;
// } 

// function generateShortURL(){
//     //var longurl = getURL();
//     var longurl = "www.w3schools.com";
//     var shorturl = longurl.toString('base64').substring(0,7);

//     //establishing database connection
//     // res.connection.connect();

//     //check whether the short url exist for the given long url or not
//      res.checkURL(longurl).then(function(data){
//          console.log("Short URL already exists and it is: "+data);
//      },function(message){
//          res.insertShortURL(longurl,shorturl)
//          .then(function(success){console.log("Short URL inserted successfuly");},
//               function(failure){console.log("Short URL insertion unsuccessful");});
//      });
//     }

//  generateShortURL();
app.listen(3000);
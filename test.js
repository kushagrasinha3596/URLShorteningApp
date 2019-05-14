var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var urlEncodedParser = app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));
app.post('/test',urlEncodedParser, function(req,res){
console.log("Kushagra "+req.body);
});
app.listen(8080,function(){
  console.log("Started in port 8080");
});
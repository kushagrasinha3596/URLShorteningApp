function getRandom(){
    var randomNum = Math.random().toString(32).substring(2,5) + Math.random().toString(32).substring(2,5);
    return randomNum;
}

function getURL(){
var url = document.getElementById("urlinput").value;
var protocol = url.startsWith("https://") || url.startsWith("http://");
if(!protocol){
    url="http://"+url;
    return url;
 }
 return url;
}

function generateHash(){
 if(window.location.hash===""){
     window.location.hash=getRandom();
 }
}
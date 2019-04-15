var res = module.require("./DatabaseConnectivity");
function getURL(){
var url = document.getElementById("urlinput").value;
var protocol = url.startsWith("https://") || url.startsWith("http://");
if(!protocol){
    url="http://"+url;
    return url;
 }
 return url;
}

function generateShortURL(){
    var longurl = getURL();
    var shorturl = btoa(url).substring(0,7);

    //establishing database connection
     res.connection();

    //check whether the short url exist for the fiven long url or not
     check = res.checkUrl(longurl);
    }

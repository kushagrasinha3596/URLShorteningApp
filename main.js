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
    var url = getURL();
    var shorturl = btoa(url).substring(0,7);
    

}

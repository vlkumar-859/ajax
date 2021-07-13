
var site = "https://dog.ceo/api/breeds/image/random";

function fetch(){
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function(){
        var res = xhttp.response;
        res = JSON.parse(res);
        document.getElementById("txt").innerHTML = "";
        document.getElementById("res-img").src = res.message;
    }

    xhttp.open("GET",site);
    xhttp.send();
}

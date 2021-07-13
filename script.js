var breed = "";

function fetch(){
    var breed = document.getElementById("breed").value;
    console.log(breed);
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function(){
        var res = xhttp.response;
        res = JSON.parse(res);
        document.getElementById("res-img").src = res.message;
        console.log(res);
    }

    xhttp.open("GET","https://dog.ceo/api/breed/"+breed+"/images/random");
   //xhttp.open("GET","https://dog.ceo/api/breeds/image/random");
    xhttp.send();
}

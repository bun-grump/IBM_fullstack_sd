function temperture(){

    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f;

}

function weight(){

    var k = document.getElementById("kilograms").value;
    var p = k * 2.2;
    document.getElementById("pounds").value = p;

}

function distance(){

    var k = document.getElementById("kilometers").value;
    var m = k * 0.62137;
    document.getElementById("miles").value = m;

}
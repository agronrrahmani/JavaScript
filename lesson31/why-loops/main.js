var cars = ["BMW" ,"Volvo","Ford", "Fiat", "audi"];

var text = "";
text += cars [0] + '<br>';
text += cars [1] + '<br>';
text += cars [2] + '<br>';
text += cars [3] + '<br>';
text += cars [4] + '<br>';

document.getElementById('without-loop').innerHTML = text;


var looptext = "";
var i;
for(i = 0; i < cars.length; i++) {
    looptext += cars[i] + "<br>";
}

document.getElementById('with-loop').innerHTML = looptext;
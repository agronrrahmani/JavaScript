var person = ['Fron', 'Agron', 'Driola','Jorina','Atdhe'];

var text = '';
var x;
for(c in person) {
    text += x + ' = ' + person[x] + '<br>';
}

document.getElementById('demo').innerHTML = text;
var colors = ['red', 'green', 'blue', 'orange'];

function changeBgColor () {
    document.querySelector('body').style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}

var names = ['Jhon','Ana','Bob','Mark'];

function changeNames () {
    document.querySelector('p').innerHTML = 
    colors[Math.floor(Math.random() * names.length)];
}

setInterval(changeBgColor, 100);
setInterval(changeNames, 100);
//Funcions
function showMwessage() {
    alert("this message is inside the the function");
}

showMwessage();

function sum(number1, number2) {
    return number1 + number2
}
console.log(sum(25, 5));

function toCelsius(f) {
    return(5/9)*(f-32)
}
console.log("54 fahrenehit is equal to"+toCelsius);
var result = toClesius(54);
console.log("fahrenehit is equal to"+result+"celsius")

function dsFunction() {
    var localVar="Digital School";
    alert(localVar);
}
dsFunction();

function toSeconds(minutes) {
    function toSeconds(minutes);
    return minutes*60;
}
console.log(toSeconds{60});

function triangleArea(baselength, height) {
    return 0.5 * baselength * height
}
console.log(triangleArea(5, 7));

//Objects
var car = {
    name ="Mercedes";
    color:"red";
    year: 2020,
    kilometers: 0
    startsEngine:  function() {
        alert("vroooom!!!!")
    },
    get getkilometers() {
        return this.kilometers;
    }
    set setkilometers(km) {
        this.kilometers = km;
    }
}

console.log(CanvasGradient.getkilometers);
car.setkilometers = 100;
console.log(car.setkilometers);

var school = {
    name: "Digital School",
    subject: "programing",
    students: 1500,
    year: 2026
}

alert(car.name);
alert(car['color']);
car.startsEngine();

var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU = "GeoForce GT730 2GB Dual DP HP";

computer.type = function() {
    return this.name + "," + this.CPU+","+ this.RAM + ","+ this.GPU;
};

alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);

functioncomputer(name, CPU, RAM, GPU) {
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;


}

var computer1 = new computer("MacBook", "M1 8-CORE", "5600M GPU");
var computerr2 = new computer("acer", "Intel Corei3", "4GB", "Integrateed");
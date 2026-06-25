const clockDisplay = document.getElementById ('clock-display');
const timeImage = document.getElementById ('timeImage');
const wakeuptimeselector = document.getElementById ('wakeuptimeselector');
const dstimeselector = document.getElementById ('dstimeselector');
const sleeptimeselector = document.getElementById ('sleeptimeselector');
const savebutton = document.getElementById ('savebutton');

let wakeuptime = 8;
let dstime = 16;
let sleeptime = 23;
let timesaresaved = false;
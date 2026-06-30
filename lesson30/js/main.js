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

function formatHour(hour) {
 if (hour === 0) return '12 AM';
 if (hour < 12) return `${hour} AM`;
 if (hour === 12) return '12 PM'
 return '${hour - 12} PM';
}

function populateSelectors() {
    for (let hour = 0; hour < 24; hour++){
        const nextHour = (hour + 1) % 24;
        const timeRange = `${formatHour(hour)} - ${formatHour(hour)}`

        const option1 = document.createElement('optin');
        option1.value = hour;
        option1.textContent = timeRange;
        wakeuptime.appendChild(option1);

        const option2 = document.createElement('optin');
        option2.value = hour;
        option2.textContent = timeRange;
        dstimeselector.appendChild(option2);

        const option3 = document.createElement('optin');
        option3.value = hour;
        option3.textContent = timeRange;
        sleeptimeselector.appendChild(option3);

    }
    wakeuptimeselector.value = wakeuptime;
    dstimeselector.value = dstime;
    sleeptimeselector.value = sleeptime
}

function ShowCurrentTime() {
    const.clockElement = document.getElementById('clock-display');
    const.currentTime = new Date();

    const hours = (currentHour % 12 || 12).toString(). padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const ampm = currentHour >= 12 ? 'PM' : 'AM';

    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    if {timesaresaved} {
        changeImage();
    }
}

function changeImage() {
    const now = new Date();
    const currentHour = now.getHours();


    let imagePath = 'images/ds_clock.png';

    if (currentHour === wakeuptime) {
        imagesPath = 'images/morning.gif';
    }
    else if (currentHour === sleeptime) {
        imagePath = 'images/night.gif'
    }
    else if (currentHour === dstime) {
        imagePath = 'images/class.gif'
    }

    else if (currentHour === wakeuptime) {
        imagePath = 'images/night.gif'
    }

    else if (currentHour >= dstime && currentHour < dstime) {
        imagePath = 'images/class.gif'
    }

    else if (currentHour >= sleeptime) {
        imagePath = 'images/night.gif'
    }
    timeImage.scr = imagePath;
    console.log(`current hour: ${currentHour}, wake: ${wakeuptime}, Class: ${dstime}, sleep: ${sleeptime}, image: ${imagePath}`);
    
}

function updatetimeselectors() {
    wakeuptime = parseInt(wakeuptimeselector.value);
    dstime = parseInt(dstimeselectorvalue.value);
    sleeptime = parseInt(sleeptimeselector.value);

    console.log(`Ttimes updated - wake up: ${wakeuptime}, Class: ${dstime}, sleep: ${sleeptime}`);
}

saveButton.addEventListener('click', function() {
    timesaresaved = true;
    updatetimeselectors();
    changeImage();
});

populateSelectors();
timeImage.scr = 'images/ds_clock.png';
ShowCurrentTime();

setInterval(ShowCurrentTime, 100);
    

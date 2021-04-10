const display = document.getElementById("display");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");


var hours = 0;
var minutes = 0;
var seconds = 0;
var timeStop = true;


function startTime (){

    if (timeStop == true){
        timeStop = false;
        timeCycle();   
    }
};

function timeCycle(){
    if (timeStop == false){
        seconds = parseInt(seconds);
        minutes = parseInt(minutes);
        hours = parseInt(hours);

        seconds++;

        if(seconds ==60){
            minutes++
            seconds =0;
        }
        if (minutes ==60){
            hours++
            minutes=0
            seconds=0
        }
        if(seconds < 10|| seconds == 0){
            seconds = "0"+seconds;
        }
        if (minutes < 10 || minutes == 0) {
            minutes = "0" + minutes;
        }
        if (hours < 10 || hours == 0) {
            hours = "0" + hours;
        }

        display.innerHTML = hours + ":"+minutes+":"+seconds;
        setTimeout("timeCycle()",1000);
    }
}

function stopTime (){
    if(timeStop == false){
        timeStop = true;
    }
};

function resetTime(){
    display.innerHTML = "00:00:00";
    timeStop = true;
    hours=0;
    minutes=0;
    seconds=0;
};

start.addEventListener("click",startTime);
stop.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);
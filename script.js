const display = document.getElementById("display");
const start = document.getElementById("start");
const split = document.getElementById("split");
const reset = document.getElementById("reset");

function startTime (){};
function splitTime (){};
function resetTime(){};

start.addEventListener("click",startTime);
split.addEventListener("click", splitTime);
reset.addEventListener("click", resetTime);
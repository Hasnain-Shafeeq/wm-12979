var miliSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var watchHours = document.getElementById("headingHours");
var watchMinutes = document.getElementById("headingMinutes");
var watchSeconds = document.getElementById("headingSeconds");
var watchMiliSeconds = document.getElementById("headingMiliSeconds");
var interval;

function timer(){
    miliSeconds++;
    if(miliSeconds < 10) {
        miliSeconds = "0"+miliSeconds;
    }
    watchMiliSeconds.innerHTML = miliSeconds;
    if(miliSeconds >= 100){
        seconds++;
        if(seconds < 10) {
            seconds = "0"+seconds;
        }
        watchSeconds.innerHTML = seconds;
        miliSeconds = 0;
    }
    else if(seconds >= 60){
        minutes++;
        if(minutes < 10) {
            minutes = "0"+minutes;
        }
        watchMinutes.innerHTML = minutes;
        seconds = 0;
    }
    else if(minutes >= 60){
        hours++;
        if(hours < 10) {
            hours = "0"+hours;
        }
        watchHours.innerHTML = hours;
        minutes = 0;
    }
}


function startMe(){
    interval = setInterval(timer, 10);
    var btn = document.getElementById("btnStart");
    btn.disabled = true;
    startCheck = true;
}

function pauseMe(){
    clearInterval(interval);
    var btn = document.getElementById("btnStart");
    btn.disabled = false;
}

function resetMe(){
    miliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    watchMiliSeconds.innerHTML = "00";
    watchSeconds.innerHTML = "00";
    watchMinutes.innerHTML = "00";
    watchHours.innerHTML = "00";
    pauseMe();
}
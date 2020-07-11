var miliSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var watchHours = document.getElementById("headingHours");
var watchMinutes = document.getElementById("headingMinutes");
var watchSeconds = document.getElementById("headingSeconds");
var watchMiliSeconds = document.getElementById("headingMiliSeconds");
var interval;
var resultarr = [];

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

function saveRecord(){
    pauseMe();
    if(watchMiliSeconds.innerHTML == "00") {
        alert("There Is No Record To Save!\nPlease Run The Timer First");    
    }
    else {
        if (resultarr.length > 4) {
            alert("You can save only 5 records!\nYour oldest record will be deleted.");
            var result = watchHours.innerHTML+" Hour(s) "+watchMinutes.innerHTML+" Minute(s) "+watchSeconds.innerHTML+" Second(s) "+watchMiliSeconds.innerHTML+" Mili Seconds";
            resultarr.shift();
            resultarr.push(result);
        }
        else {
            var result = watchHours.innerHTML+" Hour(s) "+watchMinutes.innerHTML+" Minute(s) "+watchSeconds.innerHTML+" Second(s) "+watchMiliSeconds.innerHTML+" Mili Seconds";
            resultarr.push(result);
            var getBtn = document.getElementById("btnSave");
            alert("Record Saved Successfully!");
            resetMe();
        }
    }
}

function ViewRecords(){
    if (resultarr.length > 0) {
        var record = 'LAST SAVED RECORDS ARE\n';
        var count = 1;
        for (var i = 0; i < resultarr.length; i++) {
            record += count+ "- " + resultarr[i] + "\n";
            count++;
        }
        alert(record);
    }
    else {
        if (watchMiliSeconds.innerHTML == "00") {
            alert("No Record Found!");
        }
        else {
            if (confirm("No Record Found!!\nPress OK To Reset Timer or Cancel To Continue It")) {
                resetMe();
            }
        }
        
    }
}

function clearRecords() {
    if (resultarr.length > 0) {
        resultarr = [];
        alert("All Records Have Been Successfully Removed.");
        resetMe();
    }
    else {
        if (watchMiliSeconds.innerHTML == "00") {
            alert("There is No Record To Delete");
        }
        else {
            if (confirm("There is No Record To Delete!\nPress OK To Reset Timer or Cancel To Continue It")) {
                resetMe();
            }
        }
    }
}
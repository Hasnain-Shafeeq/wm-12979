const startingMin = 2;
var time = startingMin * 60;
var timerPara = document.getElementById("timer");

function updateCountDown(){
    var minutes = Math.floor(time / 60)
    var seconds = time % 60;
    
    if(seconds < 10){
        seconds = "0"+seconds;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    
    timerPara.innerHTML = minutes + ":" + seconds
    time--;
}
setInterval(updateCountDown, 1000);








// timer ++
// var dt = new Date(new Date().setTime(60));
// var time = dt.getTime();
// var seconds = Math.floor(time % (100 * 60)/1000);
// var minutes = Math.floor((time % (1000 * 60 * 60)/1000)) / (1000-60);
// var hours = Math.floor((time % (1000 * 60 * 60)/1000)) / (1000-60);
// var timex = 0;

// setInterval(
//     function(){
//         if(seconds < 5){
//             seconds++;
//         }
//         else {
//             minutes++;
//             seconds = 0;
//         }
    
//         finalTime = minutes +":"+ seconds;
//         document.getElementById("timer").innerHTML = finalTime;    
        
//     }, 1000
// );
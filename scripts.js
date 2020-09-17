var cseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var display = document.getElementById("display");
var startStopBtn = document.getElementById("startStop");
var resetBtn = document.getElementById("reset");
var interval;
var status = 'stop';


function stopwatch() {
  cseconds ++
  if(cseconds === 100){
    cseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
    }
  }
}
  display.innerHTML = (hours < 10 ? "0" + hours : hours) +  " : " + (minutes < 10 ? "0" + minutes : minutes) +
    " : " + (seconds < 10 ? "0" + seconds : seconds) +  " : " + (cseconds < 10 ? "0" + cseconds : cseconds);
}


function startStop (){
      if (status === 'stop'){
        interval = setInterval(stopwatch, 10);
        startStopBtn.innerHTML= "Stop";
        status='start';
      }else{
        window.clearInterval(interval);
        startStopBtn.innerHTML= "Start";
        status= 'stop';
      }

};
function reset (){
    window.clearInterval(interval);
    cseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerHTML = "00 : 00 : 00 : 00";
    startStopBtn.innerHTML = "Start";
    if (status === 'start'){
      status = 'stop';
    }
};
startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
const buttons_button = document.querySelectorAll('button');
const btnStart_button = document.getElementById('btn-start');
const btnPause_button = document.getElementById('btn-pause');
const btnReset_button = document.getElementById('btn-reset');

const stopwatch_div = document.getElementById('stopwatch');
const hour_span = document.getElementById('hr');
const minute_span = document.getElementById('min');
const second_span = document.getElementById('sec');
let stopwatch;
let hour = 0;
let minute = 0;
let second = 0;

buttons_button.forEach((button)=> {
   button.addEventListener('click', ()=> {
      controlAudio(audio);
   })
})

function writingTime(time, time_span) {
   if (time < 10) {
      time_span.innerHTML = '0' + time;
   }
   else if (time >= 10) {
      time_span.innerHTML = time;
   }
}

btnStart_button.addEventListener('click', () => {
   
   stopwatch = setInterval(() => {
      second++;
      writingTime(second, second_span);
      
      if (second === 60) {
         second = 0;
         minute++;
         writingTime(minute, minute_span);
         }
   
      if (minute === 60) {
         minute = 0;
         hour++;
         writingTime(hour, hour_span);
      }
   }, 1000);
   btnPause_button.disabled = false;
   btnReset_button.disabled = false;
   btnStart_button.disabled = true;
})

btnPause_button.addEventListener('click', () => {
   clearInterval(stopwatch);
   
   btnStart_button.disabled = false;
   btnReset_button.disabled = false;
   btnPause_button.disabled = true;
})

btnReset_button.addEventListener('click', () => {
   hour_span.innerHTML = '00';
   minute_span.innerHTML = '00';
   second_span.innerHTML = '00';
   
   btnStart_button.disabled = false;
   btnPause_button.disabled = false;
   btnReset_button.disabled = true;
})
let time = document.getElementById("time");
let pause = document.getElementById("pause");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
//console.log(time.innerHTML)
let m = 00;
let h = 00;
let hour = 00;
let minutes = 0;
let second = 0;
let timer = null;
let clicked = false;
//console.log(hour)

function stopwatch(){
   //start.disabled = true;
   second++;
   
   if (second >=60) {
      second=0;
      minutes += 1;
      
   }
   if (minutes >=60) {
         minutes=0;
         hour += 1;
      }
   if (second<10) {
      second = "0"+ second;
   }
   if (minutes < 10 ){
      m = minutes;
      m = "0"+m;
      
   }
   else if(minutes >=10) {
      m = minutes;
     
   }
   if (hour < 10){
     h = hour;
     h = "0"+h;
   }
   else if(hour>9){
      h = hour;
   }
   time.innerHTML = `${h} : ${m} : ${second}`;
}

function resetwatch(){
    m = 00;
    h = 00;
    hour = 00;
    minutes = 0;
    second = 0;
   time.innerHTML = `00 : 00 : 00`;
   clearInterval(timer);
   clicked = false;
}

start.addEventListener('click', () => {
   if (clicked === true) {
      
   }
   else{
   if (timer !== null) {
    clearInterval(timer)
   }
   clicked = true;
   timer = setInterval(stopwatch,1000); 
}});
pause.addEventListener('click', function(){
   clearInterval(timer);
   if (start.disabled == "true") {
      start.disabled == "";
   } else {
      start.disabled = "";
      timer = "";
   }
   clicked = false;
} )
reset.addEventListener("click", resetwatch)
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
//var d=document.getElementById("dest").value;
//d=d.toString();
/*var main=window.prompt("enter dd-mm-yyyy in same format");
var s=main.split("-",3);
//s=Array(s);
var months=Number(s[1]);
var year=Number(s[2]);
var dates=Number(s[0]);
var arr2=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
months=arr2[months-1];*/

var month="";
var dates;
var year;
var arr2;
function news(){
var ds=document.getElementById("dest").value;
var d=ds.split('-');
months=d[1];
year=d[2];
dates=d[0];
arr2=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
month=arr2[months-1];
console.log(month);
console.log(months);
console.log(dates);
console.log(year);
//let countDown = new Date('Sep 30,2020 00:00:00').getTime(),
let countDown = new Date(`${month} ${dates},${year} 00:00:00`).getTime(),

    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        clearInterval(x);
        var m=document.getElementById("heading");
        m.innerHTML="It's time for your event";
        console.log("Time up!!!");
      }

    }, second)
}
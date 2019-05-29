function startTime() {
   var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
   m = checkTime(m);
   s = checkTime(s);
   document.getElementById('showTime').innerHTML =
   h + ":" + m + ":" + s;
   var t = setTimeout(startTime, 500);
 }
 function checkTime(i) {
   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
   return i;
 }

 function startDate(){
   var todayDate = new Date();
   var hari = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var tgl = todayDate.getDate();
   var bln = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   var thn = todayDate.getFullYear();
   document.getElementById('showDate').innerHTML =
    hari[todayDate.getDay()] + ", " + tgl + "-" + bln[todayDate.getMonth()] + "-" + thn;
 }
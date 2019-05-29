// $(document).ready(function(){
//    if ($("showMag").text() >= "5" ){
//       $("#showMag").css("background-color","red");
//    } else if ($("#showMag").text() < "5" ) {
//       $('#showMag').css("background-color", "orange");
//    } else if ($("#showMag").text() <= "3" ) {
//       $("#showMag").css("background-color", "yellow");
//    } else {
//       $("#showMag").css("background-color", "green");
//    }
// });
var myList = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';
 
 // Builds the HTML Table out of myList.
 function buildHtmlTable(selector) {
   var columns = addAllColumnHeaders(myList, selector);
 
   for (var i = 0; i < myList.length; i++) {
     var row$ = $('<tr/>');
     for (var colIndex = 0; colIndex < columns.length; colIndex++) {
       var cellValue = myList[i][columns[colIndex]];
       if (cellValue == null) cellValue = "";
       row$.append($('<td/>').html(cellValue));
     }
     $(selector).append(row$);
   }
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records.
 function addAllColumnHeaders(myList, selector) {
   var columnSet = [];
   var headerTr$ = $('<tr/>');
 
   for (var i = 0; i < myList.length; i++) {
     var rowHash = myList[i];
     for (var key in rowHash) {
       if ($.inArray(key, columnSet) == -1) {
         columnSet.push(key);
         headerTr$.append($('<th/>').html(key));
       }
     }
   }
   $(selector).append(headerTr$);
 
   return columnSet;
 }
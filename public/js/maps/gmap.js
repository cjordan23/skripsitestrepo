var map;

function initMap() {
    //Create or initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: -33.865427, lng: 151.196123},
        mapTypeId: 'terrain'
    });
    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp';
    document.getElementsByTagName('head')[0].appendChild(script);
    
    //Buat setiap titik dalam bentuk Lingkaran berdasarkan Magnitudo
    map.data.setStyle(function(feature) {
        var magnitude = feature.getProperty('mag');
        return {
        icon: getCircle(magnitude)
        };
    });

    // Load the GeoJSON so i can pull the data to show it in the DOM element
    map.data.loadGeoJson('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
    // Set the DOM Element with id showData as the container 
    var informationBox = document.getElementById("showData");
    var infowindow = new google.maps.InfoWindow({
        content: informationBox
    });
    // Set mouseover event for each feature to show the JSON property at the DOM element
    map.data.addListener('mouseover', function(event) {
        document.getElementById('showMag').textContent =
            event.feature.getProperty('mag');
    });
    map.data.addListener('mouseover', function(event) {
        document.getElementById('showLocation').textContent =
            event.feature.getProperty('place');
    });
    map.data.addListener('mouseover', function(event){
        document.getElementById('showMagType').textContent = 
            event.feature.getProperty('type');
    });
   
    
    // map.data.loadGeoJson('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
    // // //Set Variable InfoWindow
    // var infoWindow = new google.maps.InfoWindow();

    // // Set mouseover event for each feature.
    // map.data.addListener('click', function(event) {
    //     var infoHtml = event.feature.getProperty('mag');
    //     infoWindow.setContent("<div id='showData' class='card-body'>" +  + "</div>");
    //     infoWindow.open(map,data);
    // });
}
// function showData(event){
//     map.data.loadGeoJson('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');

//     var $showdataelement = $('#showData');
//     infoWindow.setContent($showdataelement[0]);
//     infoWindow.open(map);
//     infoWindow.$showdataelement = $showdataelement;
//     return infoWindow;
// }
// infoWindow.$showdataelement.live('click','a', function(){
//     alert('You´re not going anywhere!');
//     return false;
//   }); 

function getCircle(magnitude) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .2,
        scale: Math.pow(2, magnitude) / 2,
        strokeColor: 'white',
        strokeWeight: .5
    };
}

function eqfeed_callback(results) {
    map.data.addGeoJson(results);
}
var map;

//Funsi ini untuk me refresh updateDataSource() sehingga
//web hanya reaload javascript namun tidak perlu reload page 
//Funsi di bawah untuk merefresh data yang diambil berdasarkan value timer
let timer = 30000;
setInterval(function(){
  initMap();
},timer);

function initMap() {
  map = new google.maps.Map(document.getElementById('map-month'),{
    zoom: 2.2,
    center: {lat: -15.865427, lng: 151.196123},
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  // https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js
  //https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
  script.src = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojsonp';
  // document.getElementsByTagName('head')[0].appendChild(script);

  map.data.setStyle(function(feature) {
    var magnitude = feature.getProperty('mag');
    return {
      icon: getCircle(magnitude)
    }
  });


  //Load the GeoJSOn so i can try to pull the data to show it in the DOM element
  map.data.loadGeoJson('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson');

  // Set the DOM Element with id showData to be the view container
  var informationBox = document.getElementById('showData');
  var infowindow = new google.maps.InfoWindow({
    content: informationBox
  });

  // Set the corsair as it hover to the location/circle to show the location information to the showData container
  map.data.addListener('mouseover', function(event){
    document.getElementById('showTitle').textContent = 
      event.feature.getProperty('title');
  });
  // map.data.addListener('mouseover', function(event){
  //   document.getElementById('showLocation').textContent = 
  //     event.feature.getProperty('place');
  // });
  map.data.addListener('mouseover', function(event){
    document.getElementById('showMag').textContent = 
      event.feature.getProperty('mag');
  });
  map.data.addListener('mouseover', function (event) {
    document.getElementById('showEarthquakeType').textContent =
      event.feature.getProperty('type');
  });
  map.data.addListener('mouseover', function(event){
    document.getElementById('showStatus').textContent = 
      event.feature.getProperty('status');
  });
  map.data.addListener('mouseover',function(event){
    document.getElementById('showSignificant').textContent = 
      event.feature.getProperty('sig');
  });
  map.data.addListener('mouseover',function(event){
    document.getElementById('showIntensity').textContent =
      event.feature.getProperty('mmi');
  })


}
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
function eqfeed_callback(response) {
  map.data.addGeoJson(response);
}

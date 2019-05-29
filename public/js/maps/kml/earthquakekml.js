var map;
var src = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_depth_animated_link.kml';

function initMap(){
    map = new google.maps.Map(document.getElementById('map-kml'),{
        center : new google.maps.LatLng(-19.257753, 146.823688),
        zoom: 3,
        mapTypeId: 'terrain',
        mapTypeControl: true,
        mapTypeControlOptions: {
            position : google.maps.ControlPosition.TOP_CENTER,
        }
    });

    var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
      });
    
    kmlLayer.addListener('click', function(event) {
        var content = event.featureData.infoWindowHtml;
        var informasi = document.getElementById('kml-info-container');
        informasi.innerHTML = content;
    });
}


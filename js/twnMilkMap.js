L.mapbox.accessToken = 'pk.eyJ1IjoidG9ueWt1b3lqIiwiYSI6ImNpZnJ2cjV1bjB4YzNzMm0wcXE4a2ZhaTIifQ.ZH43M-eU67KjPAM3w__IvQ';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([24.362, 120.3], 7);

var myLayer = L.mapbox.featureLayer().addTo(map);

//Centering markers
map.featureLayer.on('click', function(e) {
    map.panTo(e.layer.getLatLng());
});

//Watch out the coordinates! Different order!

var geoJson = [{
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [121.541399, 25.015274]
    },
    "properties": {
        "image": "img/twnMilkMap/ntuMilk.jpg",
        "url": "http://www.bioagri.ntu.edu.tw/farm/ntufarm/unit4/index4.htm",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "台大牧場"
    }
}];

// Add custom popups to each using our custom feature properties
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content
    var popupContent = '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
        '<img src="' + feature.properties.image + '" />' +
        '<br/>' +
        feature.properties.sight +
        '</a>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent, {
        closeButton: false,
        minWidth: 320
    });
});

// Add features to the map
myLayer.setGeoJSON(geoJson);

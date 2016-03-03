L.mapbox.accessToken = 'pk.eyJ1IjoidG9ueWt1b3lqIiwiYSI6ImNpZnJ2cjV1bjB4YzNzMm0wcXE4a2ZhaTIifQ.ZH43M-eU67KjPAM3w__IvQ';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([50.848, -52.734], 2);

var myLayer = L.mapbox.featureLayer().addTo(map);

//Watch out the coordinates! Different order!

var geoJson = [{
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [40.718, -74.003]
    },
    "properties": {
        "marker-symbol": "town-hall",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "indexName": "美國紐約道瓊工業指數",
        "indexValue": 16865.08
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [139.732349, 35.710068], 
    },
    "properties": {
        "marker-symbol": "town-hall",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "indexName": "日本東京日經225指數",
        "indexValue": 16085.51
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [114.177272, 22.280260]
    },
    "properties": {
        "marker-symbol": "town-hall",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "indexName": "香港恆生指數",
        "indexValue": 19407.46
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [2.351674, 48.857708]
    },
    "properties": {
        "marker-symbol": "town-hall",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "indexName": "法國巴黎CAC 40指數",
        "indexValue": 4406.84
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-0.133219, 51.534288]
    },
    "properties": {
        "marker-symbol": "town-hall",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "indexName": "英國倫敦金融時報一百種股價指數",
        "indexValue": 6152.88
    }
}];

// Add custom popups to each using our custom feature properties
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content
    var popupContent = feature.properties.indexName + '<br>' + feature.properties.indexValue;

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent, {
        closeButton: false,
        minWidth: 320
    });
});

// Add features to the map
myLayer.setGeoJSON(geoJson);

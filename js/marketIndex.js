L.mapbox.accessToken = 'pk.eyJ1IjoidG9ueWt1b3lqIiwiYSI6ImNpZnJ2cjV1bjB4YzNzMm0wcXE4a2ZhaTIifQ.ZH43M-eU67KjPAM3w__IvQ';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([50.848, -52.734], 2);

var myLayer = L.mapbox.featureLayer().addTo(map);

//Watch out the coordinates! Different order!

var geoJson = [{
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.998636, 40.720405]
    },
    "properties": {
        "marker-symbol": "embassy",
        "marker-color": "#ff0000",
        "marker-size": "large",
        "indexDate": "2016/03/02",
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
        "marker-symbol": "embassy",
        "marker-color": "#ff0000",
        "marker-size": "large",
        "indexDate": "2016/03/02",
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
        "marker-symbol": "roadblock",
        "marker-color": "#009933",
        "marker-size": "large",
        "indexDate": "2016/03/02",
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
        "marker-symbol": "embassy",
        "marker-color": "#ff0000",
        "marker-size": "large",
        "indexDate": "2016/03/02",
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
        "marker-symbol": "roadblock",
        "marker-color": "#009933",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "英國倫敦金融時報一百種股價指數",
        "indexValue": 6152.88
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.9162592, 31.2243084]
    },
    "properties": {
        "marker-symbol": "roadblock",
        "marker-color": "#009933",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "中國上海A股指數",
        "indexValue": 2982.09
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [103.862799, 1.353169]
    },
    "properties": {
        "marker-symbol": "embassy",
        "marker-color": "#ff0000",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "新加坡富時海峽時報指數",
        "indexValue": 2682.39
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [10.360741, 51.078159]
    },
    "properties": {
        "marker-symbol": "embassy",
        "marker-color": "#ff0000",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "德國DAX指數",
        "indexValue": 9717.16
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [100.497102, 13.767129]
    },
    "properties": {
        "marker-symbol": "roadblock",
        "marker-color": "#009933",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "泰國曼谷SET股價指數",
        "indexValue": 1346.95
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.985144, 14.599232]
    },
    "properties": {
        "marker-symbol": "embassy",
        "marker-color": "#ff0000",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "菲律賓馬尼拉綜合股價指數",
        "indexValue": 6729.53
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [126.986792, 37.547054]
    },
    "properties": {
        "marker-symbol": "roadblock",
        "marker-color": "#009933",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "韓國綜合股價指數",
        "indexValue": 1944.51
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-75.160616, 39.950999]
    },
    "properties": {
        "marker-symbol": "roadblock",
        "marker-color": "#009933",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "美國費城半導體指數",
        "indexValue": 639.9
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [72.875698, 19.073762]
    },
    "properties": {
        "marker-symbol": "embassy",
        "marker-color": "#ff0000",
        "marker-size": "large",
        "indexDate": "2016/03/02",
        "indexName": "印度孟買500股價指數",
        "indexValue": 9499.91
    }
}];

// Add custom popups to each using our custom feature properties
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content
    var popupContent = feature.properties.indexDate + '<br>' + feature.properties.indexName + ' : ' + feature.properties.indexValue;

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent, {
        closeButton: false,
        minWidth: 150
    });
});

// Add features to the map
myLayer.setGeoJSON(geoJson);

//Centering markers
myLayer.on('click', function(e) {
    map.panTo(e.layer.getLatLng());
});
L.mapbox.accessToken = 'pk.eyJ1IjoidG9ueWt1b3lqIiwiYSI6ImNpZnJ2cjV1bjB4YzNzMm0wcXE4a2ZhaTIifQ.ZH43M-eU67KjPAM3w__IvQ';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([24.362, 120.3], 8);

var myLayer = L.mapbox.featureLayer().addTo(map);

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
        "sight": "台灣大學牧場"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.891591, 24.722730]
    },
    "properties": {
        "image": "img/twnMilkMap/fourways.jpg",
        "url": "http://www.fourways.com.tw/",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "四方鮮乳生態牧場"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.608414, 24.179819]
    },
    "properties": {
        "image": "img/twnMilkMap/thu.jpg",
        "url": "http://farm.thu.edu.tw/",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "東海大學實習農牧場"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.505593, 24.054645]
    },
    "properties": {
        "image": "img/twnMilkMap/delivery.jpg",
        "url": "https://www.facebook.com/fresh.milk.delivery",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "主恩牧場"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.484253, 23.465489]
    },
    "properties": {
        "image": "img/twnMilkMap/ncyu.jpg",
        "url": "http://www.ncyu.edu.tw/zoo/content.aspx?site_content_sn=16853",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "嘉義大學鮮奶"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.313086, 23.269206]
    },
    "properties": {
        "image": "img/twnMilkMap/tainan.jpg",
        "url": "http://www.tainandairy.com/",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "柳營鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.310670, 22.638919]
    },
    "properties": {
        "image": "img/twnMilkMap/kao.jpg",
        "url": "http://www.highmilk.com/",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "高大鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.459997, 22.596286]
    },
    "properties": {
        "image": "img/twnMilkMap/yungde.jpg",
        "url": "https://www.facebook.com/WanDaMuChang",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "萬大牧場永得鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [121.108275, 22.866327]
    },
    "properties": {
        "image": "img/twnMilkMap/chulu.jpg",
        "url": "http://www.chuluranch.com/index.aspx",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "初鹿鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [121.398470, 23.483668]
    },
    "properties": {
        "image": "img/twnMilkMap/jjfarm.jpg",
        "url": "http://www.jjfarm.com.tw/",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "吉蒸鮮乳"
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

//Centering markers
myLayer.on('click', function(e) {
    map.panTo(e.layer.getLatLng());
});

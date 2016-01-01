L.mapbox.accessToken = 'pk.eyJ1IjoidG9ueWt1b3lqIiwiYSI6ImNpZnJ2cjV1bjB4YzNzMm0wcXE4a2ZhaTIifQ.ZH43M-eU67KjPAM3w__IvQ';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([23.828, 120.586], 8);

var myLayer = L.mapbox.featureLayer().addTo(map);

//Watch out the coordinates! Different order!

var geoJson = [{
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [121.541399, 25.015274]
    },
    "properties": {
        "image": "img/twnMilkMap/ntu.jpg",
        "url": "http://www.bioagri.ntu.edu.tw/farm/ntufarm/unit4/index4.htm",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "台灣大學牧場鮮乳"
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
        "sight": "生態牧場四方鮮乳"
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
        "sight": "東海大學實習農牧場鮮乳"
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
        "sight": "主恩牧場鮮乳"
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
        "sight": "嘉義大學鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.313086, 23.269206]
    },
    "properties": {
        "image": "img/twnMilkMap/tainan.png",
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
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.318924, 22.654762]
    },
    "properties": {
        "image": "img/twnMilkMap/kaohsiung.jpg",
        "url": "https://www.facebook.com/GaoXiongMuChang",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "高雄牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [121.230291, 25.029197]
    },
    "properties": {
        "image": "img/twnMilkMap/baotsung.jpg",
        "url": "https://www.facebook.com/pages/%E7%94%B0%E5%AA%BD%E5%AA%BD%E5%AF%B6%E8%81%B0%E4%B9%B3%E7%89%9B%E7%89%A7%E5%A0%B4/138818819529715",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "寶聰牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.932194, 24.761646]
    },
    "properties": {
        "image": "img/twnMilkMap/championship.jpg",
        "url": "http://eshop1378.hiwinner.tw/",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "進士牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.741315, 24.441526]
    },
    "properties": {
        "image": "img/twnMilkMap/flyingcow.jpg",
        "url": "http://www.flyingcow.com.tw/",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "飛牛牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.711669, 24.078586]
    },
    "properties": {
        "image": "img/twnMilkMap/nchu.jpg",
        "url": "http://recruit.nchu.edu.tw/present/learn-resource/learn-resources01-07.aspx",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "中興大學牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.453887, 23.476640]
    },
    "properties": {
        "image": "img/twnMilkMap/daddy.jpg",
        "url": "https://www.facebook.com/BestMilkofficial",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "老爹鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.549359, 23.415141]
    },
    "properties": {
        "image": "img/twnMilkMap/dgc.jpg",
        "url": "http://www.dgc.com.tw/",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "獨角仙牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.406766, 23.473293]
    },
    "properties": {
        "image": "img/twnMilkMap/jian.jpg",
        "url": "https://www.facebook.com/jian2356881",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "健成牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.312079, 23.313461]
    },
    "properties": {
        "image": "img/twnMilkMap/wumay.jpg",
        "url": "https://www.facebook.com/5milk",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "五梅牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [121.085006, 22.817437]
    },
    "properties": {
        "image": "img/twnMilkMap/binlang.jpg",
        "url": "https://www.facebook.com/pages/%E5%8F%B0%E6%9D%B1%E5%8D%91%E5%8D%97%E9%84%89%E8%B3%93%E6%9C%97%E7%89%A7%E5%A0%B4/396781390389371",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "賓朗牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.609292, 22.644439]
    },
    "properties": {
        "image": "img/twnMilkMap/npust.jpg",
        "url": "http://mportal.npust.edu.tw/bin/home.php",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "屏科大牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [118.438589, 24.433766]
    },
    "properties": {
        "image": "img/twnMilkMap/kinmen.jpg",
        "url": "http://tour.kinmen.gov.tw/chinese/CP.aspx?sn=397",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "金門畜試所-青草地鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.299550, 23.574038]
    },
    "properties": {
        "image": "img/twnMilkMap/mingchuan.jpg",
        "url": "https://www.facebook.com/NiuNaiJueDingLeJianKangNiuNiuBing",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "明全牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.167749, 23.164736]
    },
    "properties": {
        "image": "img/twnMilkMap/hehsiang.jpg",
        "url": "https://www.facebook.com/FengXiHong",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "禾香牧場鮮乳"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [120.288092, 22.742025]
    },
    "properties": {
        "image": "img/twnMilkMap/newlife.jpg",
        "url": "http://newlife6118758.com",
        "marker-symbol": "slaughterhouse",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "新生活鮮乳"
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

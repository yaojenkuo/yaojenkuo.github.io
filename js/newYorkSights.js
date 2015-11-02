L.mapbox.accessToken = 'pk.eyJ1IjoidG9ueWt1b3lqIiwiYSI6ImNpZnJ2cjV1bjB4YzNzMm0wcXE4a2ZhaTIifQ.ZH43M-eU67KjPAM3w__IvQ';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([40.718, -74.003], 11);

var myLayer = L.mapbox.featureLayer().addTo(map);

//Watch out the coordinates! Different order!

var geoJson = [{
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-74.012182, 40.713063]
    },
    "properties": {
        "image": "img/newYorkSights/oneWorldObservatory.jpg",
        "url": "http://www.oneworldobservatory.com",
        "marker-symbol": "commercial",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "One World Observatory"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.985131, 40.758895]
    },
    "properties": {
        "image": "img/newYorkSights/timesSquare.jpg",
        "url": "http://www.timessquarenyc.org",
        "marker-symbol": "camera",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Times Square"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.965355, 40.782865]
    },
    "properties": {
        "image": "img/newYorkSights/centralpark.jpg",
        "url": "http://www.centralparknyc.org",
        "marker-symbol": "park",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Central Park"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.952147, 40.776641]
    },
    "properties": {
        "image": "img/newYorkSights/metropolitanMuseumofArt.jpg",
        "url": "http://www.metmuseum.org",
        "marker-symbol": "museum",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "The Metropolitan Museum of Art"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-74.044929, 40.689545]
    },
    "properties": {
        "image": "img/newYorkSights/statueOfLiberty.jpg",
        "url": "http://www.nps.gov",
        "marker-symbol": "monument",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Statue of Liberty National Monument"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.926569, 40.828819]
    },
    "properties": {
        "image": "img/newYorkSights/yankeesStadium.jpg",
        "url": "http://newyork.yankees.mlb.com",
        "marker-symbol": "baseball",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Yankee Stadium"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.840785, 40.739714]
    },
    "properties": {
        "image": "img/newYorkSights/flushingMeadows.jpg",
        "url": "http://nycgovparks.org",
        "marker-symbol": "park",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Flushing Meadows Corona Park"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.876998, 40.850595]
    },
    "properties": {
        "image": "img/newYorkSights/bronxZoo.jpg",
        "url": "http://www.bronxzoo.com",
        "marker-symbol": "zoo",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Bronx Zoo"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.996864, 40.706086]
    },
    "properties": {
        "image": "img/newYorkSights/bBridge.jpg",
        "url": "https://en.wikipedia.org/wiki/Brooklyn_Bridge",
        "marker-symbol": "camera",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Brooklyn Bridge"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-74.072526, 40.644212]
    },
    "properties": {
        "image": "img/newYorkSights/statenIslandFerry.jpg",
        "url": "http://www.siferry.com",
        "marker-symbol": "ferry",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "The Staten Island Ferry"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.963072, 40.662020]
    },
    "properties": {
        "image": "img/newYorkSights/prospectPark.jpg",
        "url": "https://www.prospectpark.org",
        "marker-symbol": "park",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Prospect Park"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.983252, 40.772578]
    },
    "properties": {
        "image": "img/newYorkSights/lincolnCenterAtNight.jpg",
        "url": "https://www.lincolncenter.org",
        "marker-symbol": "town-hall",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Lincoln Center"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.993394, 40.750506]
    },
    "properties": {
        "image": "img/newYorkSights/madisonSquareGarden.jpg",
        "url": "http://www.thegarden.com/",
        "marker-symbol": "basketball",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Madison Square Garden"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.723979, 40.621859]
    },
    "properties": {
        "image": "img/newYorkSights/centralPerk.jpg",
        "url": "http://thecentralperkcafe.com",
        "marker-symbol": "cafe",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Central Perk Cafe"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.977302, 40.752496]
    },
    "properties": {
        "image": "img/newYorkSights/grandCentralStation.jpg",
        "url": "http://www.grandcentralterminal.com",
        "marker-symbol": "rail",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Grand Central Terminal"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.971719, 40.782032]
    },
    "properties": {
        "image": "img/newYorkSights/americanMuseumOfNaturalHistory.jpg",
        "url": "http://www.amnh.org",
        "marker-symbol": "museum",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "American Museum of Natural History"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.877381, 40.861846]
    },
    "properties": {
        "image": "img/newYorkSights/newYorkBotanicalGarden.jpg",
        "url": "http://www.nybg.org",
        "marker-symbol": "park2",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "New York Botanical Garden"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.989526, 40.750792]
    },
    "properties": {
        "image": "img/newYorkSights/macys.jpg",
        "url": "http://l.macys.com/new-york-ny",
        "marker-symbol": "gift",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Macy's Herald Square"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.950039, 40.810033]
    },
    "properties": {
        "image": "img/newYorkSights/apolloTheater.jpg",
        "url": "https://www.apollotheater.org",
        "marker-symbol": "theatre",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Apollo Theater"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-74.003546, 40.707088]
    },
    "properties": {
        "image": "img/newYorkSights/southStreetPort.jpg",
        "url": "https://www.apollotheater.org",
        "marker-symbol": "harbor",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "South Street Seaport"
    }
}, {
    type: 'Feature',
    "geometry": {
        "type": "Point",
        "coordinates": [-73.978674, 40.758740]
    },
    "properties": {
        "image": "img/newYorkSights/rockefeller.jpg",
        "url": "https://www.rockefellercenter.com",
        "marker-symbol": "commercial",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "sight": "Rockefeller Center"
    }
}];

// Add custom popups to each using our custom feature properties
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content
    var popupContent = '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
        '<img src="' + feature.properties.image + '" />' +
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

var map = L.map('map').setView([25, 0], 2);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoidG9ueWt1b3lqIiwiYSI6ImNpZnJ2cjV1bjB4YzNzMm0wcXE4a2ZhaTIifQ.ZH43M-eU67KjPAM3w__IvQ'
}).addTo(map);

L.geoJson(countriesData).addTo(map);

function getColor(d) {
    return d > 103 ? '#bd0026' :
        d > 101 ? '#f03b20' :
        d > 98 ? '#fd8d3c' :
        d > 32 ? '#feb24c' :
        d > 0 ? '#fed976' :
        '#ffffb2';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.SEX_RATIO),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(countriesData, {
    style: style
}).addTo(map);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

var geojson;

geojson = L.geoJson(countriesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

var info = L.control();

info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function(props) {
    this._div.innerHTML = '<h4>World Gender Ratio</h4>' + (props ?
        '<b>' + props.COUNTRY + '</b><br />' + props.SEX_RATIO + ' ' + props.TEXT_ON_HOVER : 'Hover over a contry');
};

info.addTo(map);

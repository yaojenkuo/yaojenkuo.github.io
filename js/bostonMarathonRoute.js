var map = L.map('map').setView([42.292, -71.244], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidG9ueWt1b3lqIiwiYSI6ImNpZnJ2cjV1bjB4YzNzMm0wcXE4a2ZhaTIifQ.ZH43M-eU67KjPAM3w__IvQ'
}).addTo(map);

var sights = [
    ["Start", 42.228295, -71.521919, 'img/bostonMarathonRoute/icon0.jpg'],
    ["Hoyt Statue", 42.229650, -71.516614, 'img/bostonMarathonRoute/icon1.jpg'],
    ["Ashland Clock Tower", 42.252830, -71.475275, 'img/bostonMarathonRoute/icon3.jpg'],
    ["Henry Wilson Shoe Shop", 42.282968, -71.381484, 'img/bostonMarathonRoute/icon4.jpg'],
    ["Natick Town Common", 42.282911, -71.346036, 'img/bostonMarathonRoute/icon11.jpg'],
    ["Wellesley College", 42.293573, -71.305928, 'img/bostonMarathonRoute/icon12.jpg'],
    ["Elm Bank Reservation", 42.276226, -71.302559, 'img/bostonMarathonRoute/icon5.jpg'],
    ["Hunnewell Park", 42.297936, -71.291578, 'img/bostonMarathonRoute/icon6.jpg'],
    ["Newton Fire Station", 42.340923, -71.23849, 'img/bostonMarathonRoute/icon13.jpg'],
    ["Johnny Kelley Statue", 42.338560, -71.206906, 'img/bostonMarathonRoute/icon7.jpg'],
    ["Boston College", 42.335549, -71.168495, "img/bostonMarathonRoute/icon14.jpg"],
    ["John F. Kennedy Birthplace", 42.346981, -71.12326, 'img/bostonMarathonRoute/icon8.jpg'],
    ["Coolidge Corner Theatre", 42.342588, -71.122463, 'img/bostonMarathonRoute/icon15.jpg'],
    ["Boston Book Annex", 42.346689, -71.105882, 'img/bostonMarathonRoute/icon9.jpg'],
    ["Boston Public Library", 42.349416, -71.078828, 'img/bostonMarathonRoute/icon10.jpg']
];

var polyline = L.polyline([
    [42.228295, -71.521919],
    [42.22965, -71.516614],
    [42.25283, -71.475275],
    [42.282968, -71.381484],
    [42.282911, -71.346036],
    [42.293573, -71.305928],
    [42.276226, -71.302559],
    [42.297936, -71.291578],
    [42.340923, -71.23849],
    [42.33856, -71.206906],
    [42.335549, -71.168495],
    [42.346981, -71.12326],
    [42.342588, -71.122463],
    [42.346689, -71.105882],
    [42.349416, -71.078828]
], {
    color: 'green',
    weight: 12,
    opacity: 0.7,
    lineJoin: 'round'
}).addTo(map);

var CustomIcon = L.Icon.extend({
    options: {
        iconSize: [50, 60],
        iconAnchor: [22, 56],
        popupAnchor: [7, -60]
    }
});

L.marker([42.228295, -71.521919]).addTo(map)
    .bindPopup(sights[0][0]);

for (var i = 1; i < sights.length; i++) {
    var icon = new CustomIcon({
        iconUrl: sights[i][3]
    });

    L.marker([sights[i][1], sights[i][2]], {
        icon: icon
    }).addTo(map).bindPopup(sights[i][0]);
}

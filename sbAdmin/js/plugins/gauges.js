google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);

function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['自選', 80]
    ]);

    var options = {
        width: 300,
        height: 180,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('gauge1'));

    chart.draw(data, options);
    setInterval(function() {
        data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
    }, 13000);
    setInterval(function() {
        data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
    }, 5000);
    setInterval(function() {
        data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
        chart.draw(data, options);
    }, 26000);
}

function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['推薦', 90]
    ]);

    var options = {
        width: 300,
        height: 180,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('gauge2'));

    chart.draw(data, options);
    setInterval(function() {
        data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
    }, 13000);
    setInterval(function() {
        data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
    }, 5000);
    setInterval(function() {
        data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
        chart.draw(data, options);
    }, 26000);
}

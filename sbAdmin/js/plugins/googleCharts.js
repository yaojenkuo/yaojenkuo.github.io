google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);

function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['自選', 80]
    ]);

    var options = {
        width: 600,
        height: 480,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('gauge1'));

    chart.draw(data, options);
}

function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['推薦', 90]
    ]);

    var options = {
        width: 600,
        height: 480,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('gauge2'));

    chart.draw(data, options);
}

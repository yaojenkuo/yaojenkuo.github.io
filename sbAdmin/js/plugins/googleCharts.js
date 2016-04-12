google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);

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
}

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Fund', 'Dollar'],
        ['全球股票型基金', 11],
        ['區域股票型基金', 2],
        ['新興股票型基金', 3],
        ['一般債券型基金', 2],
        ['高收益債券型基金', 7],
        ['主題債券型基金', 5]
    ]);

    var options = {
        title: '資產配置',
        pieHole: 0.4,
        width: 900,
        height: 500
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut1'));
    chart.draw(data, options);

}

function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Fund', 'Dollar'],
        ['全球股票型基金', 11],
        ['區域股票型基金', 2],
        ['新興股票型基金', 3],
        ['一般債券型基金', 2],
        ['高收益債券型基金', 7],
        ['主題債券型基金', 5]
    ]);

    var options = {
        title: '資產配置',
        pieHole: 0.4,
        width: 900,
        height: 500
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut2'));
    chart.draw(data, options);

}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);

function drawChart1() {
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
        width: 550,
        height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut1'));
    chart.draw(data, options);

}

function drawChart2() {
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
        width: 550,
        height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut2'));
    chart.draw(data, options);

}

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Year', '推薦', '自選'],
        ['2013', 1000, 900],
        ['2014', 1100, 1060],
        ['2015', 1260, 1120],
        ['2016', 1330, 1240],
        ['2017', 1410, 1340],
        ['2018', 1490, 1390],
        ['2019', 1560, 1420],
        ['2020', 1650, 1540]
    ]);

    var options = {
        hAxis: { title: '年', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area'));
    chart.draw(data, options);
}

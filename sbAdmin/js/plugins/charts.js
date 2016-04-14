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
        pieHole: 0.4
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
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut2'));
    chart.draw(data, options);

}

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Year', '推薦', '自選', '指數'],
        ['2013', 1000, 900, 680],
        ['2014', 1100, 1060, 750],
        ['2015', 1260, 1120, 800],
        ['2016', 1330, 1240, 890],
        ['2017', 1410, 1340, 910],
        ['2018', 1490, 1390, 970],
        ['2019', 1560, 1420, 1080],
        ['2020', 1650, 1540, 1170]
    ]);

    var options = {
        hAxis: { title: '年', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 500 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area'));
    chart.draw(data, options);
}

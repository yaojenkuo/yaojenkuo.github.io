google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    if ($(e.target).attr('id') == 'menu1') {
        drawChart2();
    }
    if ($(e.target).attr('id') == 'menu2') {
        drawChart3();
    }
});

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
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
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
        width: 900,
        height: 500
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
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

    var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
    chart.draw(data, options);

}

google.charts.load('current', { packages: ['geochart', 'corechart'] });
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawAreaChart);
google.charts.setOnLoadCallback(drawBubbleChart1);
google.charts.setOnLoadCallback(drawDonutChart);
google.charts.setOnLoadCallback(drawBubbleChart2);


function drawDonutChart() {
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

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);

}

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Index'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
        ['Japan', 500],
        ['China', 400],
        ['Australia', 500],
        ['Korea', 1100]
    ]);

    var options = {
        colorAxis: { colors: ['green', 'red'] }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

function drawAreaChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'GDP', 'CRB', 'ISM', 'CCI'],
        ['2013', 1000, 400, 700, 200],
        ['2014', 1170, 460, 800, 300],
        ['2015', 660, 1120, 850, 350],
        ['2016', 1030, 540, 900, 400]
    ]);

    var options = {
        title: 'Index',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area_div'));
    chart.draw(data, options);
}

function drawBubbleChart1() {
    var data = google.visualization.arrayToDataTable([
        ['ID', 'X', 'Y', 'Temperature'],
        ['', 80, 167, 120],
        ['', 79, 136, 130],
        ['', 78, 184, 50],
        ['', 72, 278, 230],
        ['', 81, 200, 210],
        ['', 72, 170, 100],
        ['', 68, 477, 80]
    ]);

    var options = {
        colorAxis: { colors: ['yellow', 'red'] }
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('bubble1'));
    chart.draw(data, options);
}

function drawBubbleChart2() {
    var data = google.visualization.arrayToDataTable([
        ['ID', 'X', 'Y', 'Temperature'],
        ['', 80, 167, 120],
        ['', 79, 136, 130],
        ['', 78, 184, 50],
        ['', 72, 278, 230],
        ['', 81, 200, 210],
        ['', 72, 170, 100],
        ['', 68, 477, 80]
    ]);

    var options = {
        colorAxis: { colors: ['yellow', 'red'] }
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('bubble2'));
    chart.draw(data, options);
}

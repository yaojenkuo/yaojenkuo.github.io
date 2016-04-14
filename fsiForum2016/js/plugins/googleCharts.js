google.charts.load('current', { packages: ['geochart', 'corechart'] });
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawAreaChart);
google.charts.setOnLoadCallback(drawScatterChart1);
google.charts.setOnLoadCallback(drawDonutChart);
google.charts.setOnLoadCallback(drawScatterChart2);
//google.charts.setOnLoadCallback(drawChart2);
//google.charts.setOnLoadCallback(drawChart3);
/*
$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    if ($(e.target).attr('id') == 'menu1') {
        drawChart2();
    }
    if ($(e.target).attr('id') == 'menu2') {
        drawChart3();
    }
});*/

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
        pieHole: 0.4,
        width: 900,
        height: 500
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

function drawScatterChart1() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Hours Studied');
    data.addColumn('number', 'Final');

    data.addRows([
        [0, 67],
        [1, 88],
        [2, 77],
        [3, 93],
        [4, 85],
        [5, 91],
        [6, 71],
        [7, 78],
        [8, 93],
        [9, 80],
        [10, 82],
        [0, 75],
        [5, 80],
        [3, 90],
        [1, 72],
        [5, 75],
        [6, 68],
        [7, 98],
        [3, 82],
        [9, 94],
        [2, 79],
        [2, 95],
        [2, 86],
        [3, 67],
        [4, 60],
        [2, 80],
        [6, 92],
        [2, 81],
        [8, 79],
        [9, 83],
        [3, 75],
        [1, 80],
        [3, 71],
        [3, 89],
        [4, 92],
        [5, 85],
        [6, 92],
        [7, 78],
        [6, 95],
        [3, 81],
        [0, 64],
        [4, 85],
        [2, 83],
        [3, 96],
        [4, 77],
        [5, 89],
        [4, 89],
        [7, 84],
        [4, 92],
        [9, 98]
    ]);

    var options = {
        width: 800,
        height: 500,
        chart: {
            title: 'Students\' Final Grades',
            subtitle: 'based on hours studied'
        },
        hAxis: { title: 'Hours Studied' },
        vAxis: { title: 'Grade' }
    };

    var chart = new google.charts.Scatter(document.getElementById('efficientFrontier'));

    chart.draw(data, google.charts.Scatter.convertOptions(options));
}

function drawScatterChart2() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Hours Studied');
    data.addColumn('number', 'Final');

    data.addRows([
        [0, 67],
        [1, 88],
        [2, 77],
        [3, 93],
        [4, 85],
        [5, 91],
        [6, 71],
        [7, 78],
        [8, 93],
        [9, 80],
        [10, 82],
        [0, 75],
        [5, 80],
        [3, 90],
        [1, 72],
        [5, 75],
        [6, 68],
        [7, 98],
        [3, 82],
        [9, 94],
        [2, 79],
        [2, 95],
        [2, 86],
        [3, 67],
        [4, 60],
        [2, 80],
        [6, 92],
        [2, 81],
        [8, 79],
        [9, 83],
        [3, 75],
        [1, 80],
        [3, 71],
        [3, 89],
        [4, 92],
        [5, 85],
        [6, 92],
        [7, 78],
        [6, 95],
        [3, 81],
        [0, 64],
        [4, 85],
        [2, 83],
        [3, 96],
        [4, 77],
        [5, 89],
        [4, 89],
        [7, 84],
        [4, 92],
        [9, 98]
    ]);

    var options = {
        width: 800,
        height: 500,
        chart: {
            title: 'Students\' Final Grades',
            subtitle: 'based on hours studied'
        },
        hAxis: { title: 'Hours Studied' },
        vAxis: { title: 'Grade' }
    };

    var chart = new google.charts.Scatter(document.getElementById('scatterplot'));

    chart.draw(data, google.charts.Scatter.convertOptions(options));
}

/*
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
*/

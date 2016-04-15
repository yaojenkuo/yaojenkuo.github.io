google.charts.load('current', { packages: ['geochart', 'corechart'] });
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawAreaChart);
google.charts.setOnLoadCallback(drawScatterChart);
google.charts.setOnLoadCallback(drawDonutChart);
google.charts.setOnLoadCallback(drawBubbleChart);


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
        ['Continent', 'Index'],
        ['015', 200],
        ['011', 300],
        ['017', 400],
        ['014', 500],
        ['018', 600],
        ['154', 200],
        ['155', 300],
        ['151', 400],
        ['039', 500],
        ['021', 600],
        ['029', 200],
        ['013', 300],
        ['005', 400],
        ['143', 500],
        ['030', 600],
        ['034', 200],
        ['035', 300],
        ['145', 400],
        ['053', 500],
        ['054', 600],
        ['057', 500],
        ['061', 600]
    ]);

    var options = {
        resolution: 'subcontinents',
        colorAxis: { colors: ['green', 'red'] }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

function drawAreaChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'GDP', 'CRB', 'ISM', 'CCI'],
        ['2013Q1', 1000, 400, 700, 200],
        ['2013Q2', 1170, 460, 800, 300],
        ['2013Q3', 660, 1120, 850, 350],
        ['2013Q4', 1030, 540, 900, 400],
        ['2014Q1', 1000, 400, 700, 200],
        ['2014Q2', 1170, 460, 800, 300],
        ['2014Q3', 660, 1120, 850, 350],
        ['2014Q4', 1030, 540, 900, 400],
        ['2015Q1', 1000, 400, 700, 200],
        ['2015Q2', 1170, 460, 800, 300],
        ['2015Q3', 660, 1120, 850, 350],
        ['2015Q4', 1030, 540, 900, 400]
    ]);

    var options = {
        title: 'Index',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        displayMode: 'regions'
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area_div'));
    chart.draw(data, options);
}

function drawScatterChart() {
    var data = google.visualization.arrayToDataTable([
        ['Standard Deviation', 'Expected Return'],
        [0.1208, 0.0864],
        [0.1196, 0.0867],
        [0.1185, 0.087],
        [0.1173, 0.0873],
        [0.1162, 0.0876],
        [0.1152, 0.0879],
        [0.1141, 0.0882],
        [0.1131, 0.0886],
        [0.1121, 0.0889],
        [0.1112, 0.0892],
        [0.1103, 0.0895],
        [0.1094, 0.0898],
        [0.1086, 0.0901],
        [0.1078, 0.0904],
        [0.107, 0.0907],
        [0.1063, 0.091],
        [0.1056, 0.0914],
        [0.105, 0.0917],
        [0.1044, 0.092],
        [0.1038, 0.0923],
        [0.1033, 0.0926],
        [0.1028, 0.0929],
        [0.1024, 0.0932],
        [0.102, 0.0935],
        [0.1017, 0.0939],
        [0.1014, 0.0942],
        [0.1012, 0.0945],
        [0.101, 0.0948],
        [0.1008, 0.0951],
        [0.1007, 0.0954],
        [0.1006, 0.0957],
        [0.1006, 0.096],
        [0.1007, 0.0964],
        [0.1008, 0.0967],
        [0.1009, 0.097],
        [0.1011, 0.0973],
        [0.1013, 0.0976],
        [0.1015, 0.0979],
        [0.1019, 0.0982],
        [0.1022, 0.0985],
        [0.1026, 0.0988],
        [0.1031, 0.0992],
        [0.1036, 0.0995],
        [0.1041, 0.0998],
        [0.1047, 0.1001],
        [0.1053, 0.1004],
        [0.106, 0.1007],
        [0.1067, 0.101],
        [0.1074, 0.1013],
        [0.1082, 0.1017],
        [0.109, 0.102],
        [0.1098, 0.1023],
        [0.1107, 0.1026],
        [0.1117, 0.1029],
        [0.1126, 0.1032],
        [0.1136, 0.1035],
        [0.1146, 0.1038],
        [0.1157, 0.1042],
        [0.1168, 0.1045],
        [0.1179, 0.1048],
        [0.119, 0.1051],
        [0.1202, 0.1054],
        [0.1214, 0.1057],
        [0.1227, 0.106],
        [0.1239, 0.1063],
        [0.1252, 0.1067],
        [0.1265, 0.107],
        [0.1278, 0.1073],
        [0.1292, 0.1076],
        [0.1306, 0.1079],
        [0.132, 0.1082],
        [0.1334, 0.1085],
        [0.1348, 0.1088],
        [0.1363, 0.1091],
        [0.1377, 0.1095],
        [0.1392, 0.1098],
        [0.1407, 0.1101],
        [0.1423, 0.1104],
        [0.1438, 0.1107],
        [0.1454, 0.111],
        [0.147, 0.1113],
        [0.1485, 0.1116],
        [0.1502, 0.112],
        [0.1518, 0.1123],
        [0.1534, 0.1126],
        [0.1551, 0.1129],
        [0.1567, 0.1132],
        [0.1584, 0.1135],
        [0.1601, 0.1138],
        [0.1618, 0.1141],
        [0.1635, 0.1145],
        [0.1652, 0.1148],
        [0.1669, 0.1151],
        [0.1687, 0.1154],
        [0.1704, 0.1157],
        [0.1722, 0.116],
        [0.1739, 0.1163],
        [0.1757, 0.1166],
        [0.1775, 0.1169],
        [0.1793, 0.1173]
    ]);

    var options = {
        title: 'Efficient Frontier',
        hAxis: { title: 'Standard Deviation' },
        vAxis: { title: 'Expected Return' },
        legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('scatter'));

    chart.draw(data, options);
}

function drawBubbleChart() {
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

    var chart = new google.visualization.BubbleChart(document.getElementById('bubble'));
    chart.draw(data, options);
}

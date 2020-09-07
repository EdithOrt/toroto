const config = {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Huella de carbono de empresa Laboratoria'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 350,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        "Highcharts.defaultOptions.legend.backgroundColor" || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ],
        plotBands: [{ // visualize the weekend
            from: 0,
            to: 0,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: 'Toneladas de carbono'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' toneladas'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Laboratoria',
        data: [300, 289.54, 272.20, 290.40, 250.55, 245.8, 220.10, 170.80, 199.72, 235.71, 145.23, 212.30]
    }]
}

export default config
const config = {
    chart: {
        type: 'column'
      },
      title: {
        text: 'Tu medición de huella de carbono'
      },
      subtitle: {
        text: '¿Cuánto quieres aportar al planeta tierra?'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        max: 20,
        title: {
          text: 'toneladas'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} t</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.1,
          borderWidth: 0
        }
      },
      series: [{
        name: null,
        data: [16, 11, 14, 11, 144.0, 176.0]
    
      }]
}


export default config
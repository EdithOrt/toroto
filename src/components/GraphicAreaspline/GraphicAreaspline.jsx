import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const GraphicAreaspline = () => {

    let [dataState, setDataState] = useState();

    const getData = () =>{
      const db= fetch('https://raw.githubusercontent.com/EdithOrt/db/master/db.json')
      const dataJSON= db.then((res) => res.json())
      let value= dataJSON.then((res) => {
        return res;
      })
      value.then((response) => {
        if (response != null){
          setDataState(response)
        }
      })
    }
    
    let seriesCompany= {name:'', data:[], color: ''};
    let seriesEmployee= {name:'', data:[], color:''};

    const setData = () =>{
        if (dataState != null){
          seriesEmployee.name = dataState.employee.name
          seriesCompany.name = dataState.company.name
          seriesEmployee.color = "#ffbc15"
          seriesCompany.color = "#AB0954"
          dataState.company.footPrint.map((foot) =>{
            return seriesCompany.data.push(parseInt(foot.data))
          })
          dataState.employee.footPrint.map((foot) => {
            return seriesEmployee.data.push(parseInt(foot.data))
          })
          console.log(seriesCompany)
          console.log(seriesEmployee)
          dataState.company.footPrint.map((item) =>{
            return config.xAxis.categories.push(item.categories)
          })
          config.series.push(seriesEmployee, seriesCompany)
        }
    }
    

    const config = {
      chart: {
        type: "areaspline",
      },
      title: {
        text: undefined,
      },
      legend: {
        enabled: true,
      },
      xAxis: {
        categories: [],
      },
      yAxis: {
        title: {
          text: "Toneladas de carbono",
        },
      },
      tooltip: {
        shared: true,
        valueSuffix: " toneladas",
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
        },
      },
      series:[],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 300,
              minWidth: 300,
            },
            chartOptions: {
              chart: {
                className: "small-chart",
              },
            },
          },
        ],
      },
    };

    setData();

    useEffect(() => {
        getData()
    }, []);

  return (
    <div>
      {dataState && (
        <HighchartsReact highcharts={Highcharts} options={config} />
      )}
    </div>
  );
};

export default GraphicAreaspline;

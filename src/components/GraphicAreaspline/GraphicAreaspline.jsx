import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import config from "../../utils/chart-bar-areaspline"


const GraphicAreaspline = () => {
    return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={config} />
    </div>
    )
}

export default GraphicAreaspline
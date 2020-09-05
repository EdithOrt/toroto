import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import config from "../../utils/chart-bar-config"

const GraphicBars = () => {
    return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={config} />
    </div>
    )
}

export default GraphicBars
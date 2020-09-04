import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import optionsBubble from "../../utils/optionsBubble";
/* import "highcharts/highcharts-more"; */
import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

/* const options = {
  series: [
    {
      name: "profit",
      data: [100, 200, 30, 100, 30, 58, 100],
    },
  ],
}; */

const GraphicBubble = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsBubble} />
    </div>
  );
};

export default GraphicBubble;

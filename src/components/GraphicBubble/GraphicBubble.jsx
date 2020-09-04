import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
//import packedbubble from "highcharts/modules/packedbubble";

/* const options = {
  series: [
    {
      name: "profit",
      data: [100, 200, 30, 100, 30, 58, 100],
    },
  ],
}; */

const options = {
  series: [
    {
      name: "profit",
      data: [100, 200, 30, 100, 30, 58, 100],
    },
  ],
};

const GraphicBubble = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      {/* <HighchartsReact highcharts={packedbubble} options={options} /> */}
    </div>
  );
};

export default GraphicBubble;

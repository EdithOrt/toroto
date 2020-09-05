import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import optionsBubbleB from "../../utils/optionsBubbleB";
/* import "highcharts/highcharts-more"; */
import more from "highcharts/highcharts-more";
more(Highcharts);

const GraphicBubbleB = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsBubbleB} />
    </div>
  );
};

export default GraphicBubbleB;

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import optionsBubble from "../../utils/optionsBubble";
/* import "highcharts/highcharts-more"; */
import more from "highcharts/highcharts-more";
more(Highcharts);

const GraphicBubble = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsBubble} />
    </div>
  );
};

export default GraphicBubble;

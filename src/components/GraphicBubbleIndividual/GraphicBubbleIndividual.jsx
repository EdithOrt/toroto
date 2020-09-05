import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import optionsBubbleIndividual from "../../utils/optionsBubbleIndividual";
/* import "highcharts/highcharts-more"; */
import more from "highcharts/highcharts-more";
more(Highcharts);

const GraphicBubbleIndividual = () => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={optionsBubbleIndividual}
      />
    </div>
  );
};

export default GraphicBubbleIndividual;

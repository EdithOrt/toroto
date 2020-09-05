import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import optionsBubbleB from "../../utils/optionsBubbleB";
import more from "highcharts/highcharts-more";
more(Highcharts);



const GraphicBubbleB = () => {
  
/* 
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(response => {
        console.log(response)
      })
  }, []) */


  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsBubbleB} />
    </div>
  );
};

export default GraphicBubbleB;

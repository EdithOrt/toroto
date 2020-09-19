import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import optionsBubbleB from "../../utils/optionsBubbleB";
import more from "highcharts/highcharts-more";
more(Highcharts);

const GraphicBubbleB = () => {

  let [dataState, setDataState] = useState();

  const getData = () => {
    const database = fetch(
      "https://raw.githubusercontent.com/EdithOrt/test-project/master/db.json"
    );
    const data = database.then((res) => res.json());
    let valor = data.then((res) => {
      return res;
    });
    valor.then((resp) => {
      if (resp != null) {
        setDataState(resp);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {dataState && (
        <HighchartsReact highcharts={Highcharts} options={optionsBubbleB} />
      )}
    </div>
  );
};

export default GraphicBubbleB;

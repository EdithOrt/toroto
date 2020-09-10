import React, { Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import optionsBubbleIndividual from "../../utils/optionsBubbleIndividual";
/* import "highcharts/highcharts-more"; */
import more from "highcharts/highcharts-more";
more(Highcharts);

const GraphicBubbleIndividual = () => {
  /* let [dataState, setDataState] = useState();

  const getData = () => {
    const database = fetch(
      "https://raw.githubusercontent.com/JimenaMV/bubble.individual/master/db.json?token=AOO2XG62KWDJAOPAQAVJCNC7K4I6Q"
    );
    const data = database.then((res) => res.json());
    let valor = data.then((res) => {
      return res;
    });
    valor.then((resp) => {
      if (resp != null) {
        setDataState(resp);
        resp.map((uno) => {
          optionsBubbleIndividual.series.push(uno);
          console.log(uno);
        });
        console.log(resp);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []); */

  return (
    <Fragment>
      <HighchartsReact
        highcharts={Highcharts}
        options={optionsBubbleIndividual}
      />
    </Fragment>
  );
};

export default GraphicBubbleIndividual;

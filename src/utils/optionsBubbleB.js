/* const getData = async () => {
  const database = await fetch(
    "https://raw.githubusercontent.com/EdithOrt/test-project/master/db.json"
  );
  const result = await database.json();
  console.log(result);
  return result;
}; */

function getData() {
  const database = fetch(
    "https://raw.githubusercontent.com/EdithOrt/test-project/master/db.json"
  );
  const data = database.then((res) => res.json());
  let valor = data.then((res) => {
    return res;
  });
  valor.then((resp) => {
    if (resp != null) {
      resp.map((uno) => {
        return optionBubbleB.series.push(uno);
      });
    }
  });
}
getData();

const optionBubbleB = {
  chart: {
    type: "packedbubble",
    height: "100%",
    style: {
      color: "#000",
      font: 'bold 16px "Oswald", sans-serif',
    },
  },
  title: {
    text: undefined,
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.value}toneladas CO<sub>2</sub>",
  },
  plotOptions: {
    packedbubble: {
      minSize: "10%",
      maxSize: "300%",
      zMin: 0,
      zMax: 1000,
      layoutAlgorithm: {
        gravitationalConstant: 0.05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: true,
        parentNodeLimit: true,
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 15,
        },
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "bold",
        },
      },
    },
  },
  series: [],
};
export default optionBubbleB;

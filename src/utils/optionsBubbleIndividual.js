/* function getData() {
  const database = fetch(
    "https://raw.githubusercontent.com/JimenaMV/bubble.individual/master/db.json?token=AOO2XG62KWDJAOPAQAVJCNC7K4I6Q"
  );
  const data = database.then((res) => res.json());
  let valor = data.then((res) => {
    return res;
  });
  valor.then((resp) => {
    if (resp != null) {
      resp.map((uno) => {
        optionBubbleIndividual.series.push(uno);
        console.log(uno);
      });
      console.log(resp);
    }
  });
}
getData(); */

const optionBubbleIndividual = {
  chart: {
    type: "packedbubble",
    height: "100%",
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
      minSize: "0.006%",
      maxSize: "500%",
      zMin: 0,
      zMax: 1000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02,
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 8,
        },
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "bold",
        },
      },
    },
  },
  series: [
    {
      name: "Julio",
      color: "#1930DB",
      data: [
        {
          name: "01 jul",
          value: 30.3,
        },
        {
          name: "15 jul",
          value: 20.3,
        },
      ],
    },
    {
      name: "Agosto",
      color: "#1930DB",
      data: [
        {
          name: "01 ago",
          value: 15.3,
        },
        {
          name: "15 ago",
          value: 10,
        },
      ],
    },
    {
      name: "Septiembre",
      color: "#1930DB",
      data: [
        {
          name: "01 sept",
          value: 9.4,
        },
        {
          name: "15 sept",
          value: 8,
        },
      ],
    },
    {
      name: "Octubre",
      color: "#1930DB",
      data: [
        {
          name: "01 oct",
          value: 8,
        },
        {
          name: "15 oct",
          value: 5,
        },
      ],
    },
  ],
};

export default optionBubbleIndividual;

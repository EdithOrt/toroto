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
    text: "Tu huella",
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
      color: "#BA1863",
      data: [
        {
          name: "01 de julio de 2020",
          value: 30.3,
        },
        {
          name: "15 de julio de 2020",
          value: 20.3,
        },
      ],
    },
    {
      name: "Agosto",
      color: "#0ED956",
      data: [
        {
          name: "01 de agosto de 2020",
          value: 15.3,
        },
        {
          name: "15 de agosto de 2020",
          value: 10,
        },
      ],
    },
    {
      name: "Septiembre",
      color: "#1930DB",
      data: [
        {
          name: "01 de septiembre de 2020",
          value: 9.4,
        },
        {
          name: "15 de septiembe de 2020",
          value: 8,
        },
      ],
    },
    {
      name: "Octubre",
      color: "#FFBC15",
      data: [
        {
          name: "01 de octubre de 2020",
          value: 8,
        },
        {
          name: "15 de octubre de 2020",
          value: 5,
        },
      ],
    },
  ],
};

export default optionBubbleIndividual;

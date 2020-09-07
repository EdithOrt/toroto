const optionBubbleIndividual = {
  chart: {
    type: "packedbubble",
    height: "100%",
  },
  title: {
    text: "Mi huella",
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.value}m CO<sub>2</sub>",
  },
  plotOptions: {
    packedbubble: {
      minSize: "20%",
      maxSize: "100%",
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
          value: 1,
        },
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "normal",
        },
      },
    },
  },
  series: [
    {
      name: "Julio",
      data: [
        {
          name: "01 de julio de 2020",
          value: 18.9,
        },
        {
          name: "15 de julio de 2020",
          value: 8.1,
        },
      ],
    },
    {
      name: "Agosto",
      data: [
        {
          name: "01 de agosto de 2020",
          value: 4.7,
        },
        {
          name: "15 de agosto de 2020",
          value: 7.1,
        },
      ],
    },
    {
      name: "Septiembre",
      data: [
        {
          name: "01 de septiembre de 2020",
          value: 9.4,
        },
        {
          name: "15 de septiembe de 2020",
          value: 2,
        },
      ],
    },
    {
      name: "Octubre",
      data: [
        {
          name: "01 de octubre de 2020",
          value: 5,
        },
        {
          name: "15 de octubre de 2020",
          value: 2,
        },
      ],
    },
  ],
};

export default optionBubbleIndividual;

const optionBubbleIndividual = {
  chart: {
    type: "packedbubble",
    height: "100%",
  },
  title: {
    text: "Carbon emissions around the world (2014)",
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.value}m CO<sub>2</sub>",
  },
  plotOptions: {
    packedbubble: {
      minSize: "30%",
      maxSize: "120%",
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
          value: 250,
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
      name: "Oceania",
      data: [
        {
          name: "Australia",
          value: 409.4,
        },
        {
          name: "New Zealand",
          value: 34.1,
        },
        {
          name: "Papua New Guinea",
          value: 7.1,
        },
      ],
    },
  ],
};

export default optionBubbleIndividual;

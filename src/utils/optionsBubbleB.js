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
        optionBubbleB.series.push(uno);
        console.log(uno);
      });
      console.log(resp);
    }
  });
}
getData();

const optionBubbleB = {
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
      minSize: "0.01%",
      maxSize: "500%",
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
          value: 10,
        },
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "normal",
        },
      },
    },
  },
  series: [],
  /* series: [
    {
      name: "Sistemas",
      color: "#000",
      data: [
        {
          name: "Diana Rosas",
          value: 18.21,
        },
        {
          name: "Olimpia Coria",
          value: 13,
        },
        {
          name: "JoaquÌn RodrÌguez",
          value: 15,
        },
        {
          name: "Juana Ch·vez",
          value: 11,
        },
        {
          name: "Andrea Morales",
          value: 16,
        },
        {
          name: "Alan Ju·rez",
          value: 10,
        },
        {
          name: "Elizabeth Esquivel",
          value: 14,
        },
        {
          name: "Rita Luna",
          value: 9,
        },
        {
          name: "Axel Rojas",
          value: 11,
        },
        {
          name: "Gustavo Salazar",
          value: 7,
        },
      ],
    },
    {
      name: "Ventas",
      data: [
        {
          name: "Dante Gonz·lez",
          value: 14,
        },
        {
          name: "Karla Rea",
          value: 9,
        },
        {
          name: "Paola Torres",
          value: 18,
        },
        {
          name: "Iris GutiÈrrez",
          value: 9.6,
        },
        {
          name: "Rembrant PiÒa",
          value: 8.9,
        },
        {
          name: "Sarahi Tapia",
          value: 15.8,
        },
        {
          name: "Ruth CortÈs",
          value: 17.2,
        },
        {
          name: "Hermenegildo Frias",
          value: 14,
        },
        {
          name: "Rosaura LÛpez",
          value: 5.8,
        },
        {
          name: "Diana Hern·ndez",
          value: 12.7,
        },
        {
          name: "JosÈ Duarte",
          value: 15.4,
        },
        {
          name: "Manuel Obrador",
          value: 2.2,
        },
        {
          name: "Enrique de la PeÒa",
          value: 15.8,
        },
        {
          name: "Fernanda Plata",
          value: 19.4,
        },
        {
          name: "Roberto DomÌguez",
          value: 4.2,
        },
        {
          name: "Aldair Cano",
          value: 16.5,
        },
        {
          name: "Noe Gallagher",
          value: 4.8,
        },
        {
          name: "Jatziri Cuevas",
          value: 16.1,
        },
        {
          name: "Bruno DÌaz",
          value: 3.9,
        },
        {
          name: "Marlene NuÒez",
          value: 17,
        },
      ],
    },
    {
      name: "Operaciones",
      data: [
        {
          name: "Brenda Alejo",
          value: 20,
        },
        {
          name: "Marta Uribe",
          value: 17.3,
        },
        {
          name: "Carla Morales",
          value: 15,
        },
        {
          name: "AnahÌ Acevedo",
          value: 8.5,
        },
        {
          name: "Luis Fern·ndez",
          value: 6.7,
        },
        {
          name: "Tom·s Carranza",
          value: 18.5,
        },
        {
          name: "Daniela PerÈz",
          value: 5,
        },
        {
          name: "Ulises Tapia",
          value: 3,
        },
        {
          name: "Genaro Urban",
          value: 16.6,
        },
        {
          name: "Manuel Torres",
          value: 11.2,
        },
      ],
    },
    {
      name: "Producción",
      data: [
        {
          name: "Jorge Pérez",
          value: 7.1,
        },
        {
          name: "Susana Distancia",
          value: 2.7,
        },
        {
          name: "Ximena Celis",
          value: 3.3,
        },
        {
          name: "Victor Toledo",
          value: 4.2,
        },
        {
          name: "Leonora Carrington",
          value: 13.3,
        },
        {
          name: "Jorge Ramos",
          value: 11.1,
        },
        {
          name: "Ingrid Terrón",
          value: 9,
        },
        {
          name: "Leoncia Mares",
          value: 6.7,
        },
        {
          name: "Ramiro González",
          value: 17.8,
        },
        {
          name: "Iris Trejo",
          value: 6.3,
        },
      ],
    },
    {
      name: "Marketing",
      data: [
        {
          name: "Arcelia Ramírez",
          value: 7.1,
        },
        {
          name: "Sabina Berman",
          value: 8.3,
        },
        {
          name: "Demian Hirst",
          value: 20.3,
        },
        {
          name: "Gustavo Sainz",
          value: 3.3,
        },
        {
          name: "Salomón Díaz",
          value: 13.4,
        },
        {
          name: "Laura Restrepo",
          value: 5.3,
        },
        {
          name: "Julio Cortázar",
          value: 7.7,
        },
        {
          name: "Isabel Allende",
          value: 8.9,
        },
        {
          name: "Gabriel García Márquez",
          value: 10.9,
        },
        {
          name: "Guadalupe Nettel",
          value: 6.7,
        },
        {
          name: "Roberto Juarróz",
          value: 8.8,
        },
        {
          name: "Daniela Alejo",
          value: 4,
        },
        {
          name: "JoaquÌn Larios",
          value: 8.4,
        },
        {
          name: "Ivonne Kuri",
          value: 6.8,
        },
        {
          name: "Marisol Fuentes",
          value: 10.5,
        },
      ],
    },
    {
      name: "Recursos Humanos",
      data: [
        {
          name: "Nubal Noah Harari",
          value: 2.2,
        },
        {
          name: "Egon Schiele",
          value: 10.3,
        },
        {
          name: "Mario Vargas Losa",
          value: 4.3,
        },
        {
          name: "Jared Diamond",
          value: 4.5,
        },
        {
          name: "Josefa Gonzalez Blanco",
          value: 10.7,
        },
        {
          name: "Gorge Orwell",
          value: 5.8,
        },
        {
          name: "Octavio Paz",
          value: 17.5,
        },
        {
          name: "Albert Camus",
          value: 8.5,
        },
        {
          name: "Oracio Quiroga",
          value: 8.5,
        },
        {
          name: "Oscar Wilde",
          value: 9.9,
        },
        {
          name: "Simone de Beauvoir",
          value: 2.5,
        },
        {
          name: "Angelica Ramos",
          value: 20.3,
        },
        {
          name: "Jean Paul Sartre",
          value: 13.4,
        },
        {
          name: "HUmberto Eco",
          value: 18.9,
        },
        {
          name: "Julia Carabias",
          value: 7.1,
        },
        {
          name: "josé Sarukhán",
          value: 1.1,
        },
        {
          name: "Antonio Lazcano",
          value: 8.9,
        },

        {
          name: "José Saramago",
          value: 17.9,
        },
        {
          name: "Mario Molina",
          value: 12.3,
        },
        {
          name: "Miguel Angel de Quevedo",
          value: 9.8,
        },
        {
          name: "Patricia Morales",
          value: 7.9,
        },
        {
          name: "Cecilia Mendoza",
          value: 4,
        },
        {
          name: "Denisse Dresser",
          value: 4.5,
        },
        {
          name: "Carmen Aristegui",
          value: 4.5,
        },
        {
          name: "Sergio Aguayo",
          value: 7.3,
        },
        {
          name: "Lorenzo Meyer",
          value: 12.3,
        },
        {
          name: "Javier Solórzano",
          value: 11.3,
        },
        {
          name: "Maria Luisa Albores",
          value: 3.2,
        },
      ],
    },
  ], */
};

/* const getData = () => {
  const database = fetch(
    "https://raw.githubusercontent.com/EdithOrt/test-project/master/db.json"
  );
  console.log(database);
  const data = database.then((res) => res.json());
  data.then((res) => console.log(res));
};

console.log(getData());

console.log(optionBubbleB); */
export default optionBubbleB;

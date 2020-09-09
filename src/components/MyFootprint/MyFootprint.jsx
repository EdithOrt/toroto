import React from "react";
import sky from "../../assets/img/my-footprint/montagnas.png";
import bar from "../../assets/img/my-footprint/image_bar.png";
import squads from "../../assets/img/my-footprint/Squads.png";
import logros from "../../assets/img/my-footprint/Logros.png";
import Navbar from "../Navbar/Navbar";
import hamburguer from "../../assets/img/my-footprint/menu.png"
import logo from "../../assets/img/logo.png"
import {Slider} from "@material-ui/core"
import cincotoneladas from "../../assets/img/my-footprint/5toneladas.png"


const MyFootprint = () => {

  const valuetext = (value) => {
    return `${value}`;
  }

  return (
    <div className="container-body-footprint">
      <div className="title-welcome">
        <p className="welcome-title-user">
          Hola Andrea,
        </p>
        <p>
          Hoy es un gran día para usar la bicicleta,
          ¡continua con tu record!
        </p>
        <p className="ligth-font">
          Has emitido 5t de CO2 este mes.
        </p>
      </div>
      <div className="circle-and-slider">
        <div className="content-circle">
          <img src={cincotoneladas}/>
        </div>
        <div className="slider-container">
          <div>
            <Slider
              defaultValue={5}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={12}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div className="month">
          <p>Septiembre</p>
        </div>
        <div className="container-buttons-img">
          <div>
            <button>
              <img src={squads} />
            </button>
          </div>
          <div>
            <button>
              <img src={logros} />
            </button>
          </div>
        </div>
        <div className="container-button-co2">
          <button> MEDIR CO2 </button>
        </div>
      </div>
    </div>
  )
};

export default MyFootprint;

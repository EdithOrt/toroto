import React from "react";
import squad from "../../assets/img/my-footprint/squad.png";
import logros from "../../assets/img/my-footprint/Logros.png";
import {Slider} from "@material-ui/core"
import cincotoneladas from "../../assets/img/my-footprint/arbol.png"


const MyFootprint = () => {
  const valuetext = (value) => {
    return `${value}`;
  };

  return (
    <div className='container-body-footprint'>
      <div className='title-welcome'>
        <p className='welcome-title-user'>Hola Andrea,</p>
        <p>
          Hoy es un gran día para usar la bicicleta, ¡continua con tu record!
        </p>
        <p className='ligth-font'>Has emitido 5t de CO2 este mes.</p>
      </div>
      <div className="circle-and-slider">
        <div className="content-circle">
          <div className="circle"></div>
          <img className="arbol" src={cincotoneladas}/>
          <p>5t de C02</p>
        </div>
        <div className='slider-container'>
          <div>
            <Slider
              defaultValue={9}
              getAriaValueText={valuetext}
              aria-labelledby='discrete-slider-small-steps'
              step={1}
              marks
              min={1}
              max={12}
              valueLabelDisplay='auto'
            />
          </div>
        </div>
        <div className='month'>
          <p>Septiembre</p>
        </div>
        <div className='container-buttons-img'>
          <div>
            <button>
              <img src={squad} />
            </button>
          </div>
          <div>
            <button>
              <img src={logros} />
            </button>
          </div>
        </div>
        <div className='container-button-co2'>
          <form
            action='https://www.toroto.mx/en/carbon-footprint-calculator'
            method='get'
          >
            <button> MEDIR CO2 </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyFootprint;

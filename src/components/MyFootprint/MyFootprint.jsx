import React from "react";
import sky from "../../assets/img/my-footprint/montagnas.png";
import bar from "../../assets/img/my-footprint/image_bar.png";
import squads from "../../assets/img/my-footprint/squad.png";
import logros from "../../assets/img/my-footprint/certifacated.png";
/* import capa1 from "../../assets/img/my-footprint/capa1.png";
import capa2 from "../../assets/img/my-footprint/capa2.png";
import capa3 from "../../assets/img/my-footprint/capa3.png";
import capa4 from "../../assets/img/my-footprint/capa4.png";
import capa5 from "../../assets/img/my-footprint/capa5.png"; */
import { Parallax } from "react-parallax";
import Navbar from "../Navbar/Navbar";

const MyFootprint = () => {
  /*  const inlineStyle = {
    background: "#fff",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
  }; */

  return (
    /*     <div>
      <Parallax bgImage={sky} strength={500}>
        <div style={{ height: "100vh" }}>
          <>
            <Navbar />
            <div className='footprint-container'>
              <div className='info-employee'>
                <p className='name-employee'>Hola Andrea</p>
                <p className='quotation'>
                  Hoy es un gran día para usar la bicicleta, ¡continúa con tu
                  record!
                </p>
                <p className='info-emission'>Has emitido 5t de CO2 este mes</p>
              </div>
              <div className='emission-container'>
                <div className='circle'>
                  <p className='circle-p'>5</p>
                  <p className='circle-p'>toneladas</p>
                  <p className='circle-p'>de CO2</p>
                </div>
                <img src={bar} alt='' />
                <p className='month'>SEPTIEMBRE</p>
              </div>

              <div className='gamification-container'>
                <div className='squad'>
                  <img src={squads} alt='' />
                  <p>SQUAD</p>
                </div>
                <div className='squad'>
                  <img src={logros} alt='' />
                  <p>LOGROS</p>
                </div>
              </div>
              <button>Medir CO2</button>
            </div>
          </>
        </div>
      </Parallax>
    </div> */
    <>
      <Navbar />
      <div className='footprint-container'>
        <div className='info-employee'>
          <p className='name-employee'>Hola Andrea</p>
          <p className='quotation'>
            Hoy es un gran día para usar la bicicleta, ¡continúa con tu record!
          </p>
          <p className='info-emission'>Has emitido 5t de CO2 este mes</p>
        </div>
        <div className='emission-container'>
          <div className='circle'>
            <p className='circle-p'>5</p>
            <p className='circle-p'>toneladas</p>
            <p className='circle-p'>de CO2</p>
          </div>
          <img src={bar} alt='' />
          <p className='month'>SEPTIEMBRE</p>
        </div>

        <div className='gamification-container'>
          <div className='squad'>
            <img src={squads} alt='' />
            <p>SQUAD</p>
          </div>
          <div className='squad'>
            <img src={logros} alt='' />
            <p>LOGROS</p>
          </div>
        </div>
        <button>Medir CO2</button>
      </div>
    </>
  );
};

export default MyFootprint;

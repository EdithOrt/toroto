import React from "react";
import banner from "../../assets/img/company/green-texture.png";
import GraphicAreaspline from "../GraphicAreaspline/GraphicAreaspline";
import GraphicBubbleB from "../GraphicBubbleB/GraphicBubbleB";

const Company = () => {
  return (
    <div className='company-container'>
      <div className='banner-container'>
        <p className='company-info'>
          La meta personal que tu empresa y Toroto tienen para este año,
          consiste en disminuir los desplazamientos en avión.
        </p>
      </div>
      <div className='banner'>
          <img src={banner} alt='' />
      </div>
      <div className='titles-container'>
        {/*  <div className='graphic-container'>
          <div className='circle-one'></div>
          <p className='titles-foot'>Metas de la empresa</p>
        </div>
        <div className='graphic-container'>
          <div className='circle-two'></div>
          <p className='titles-foot'>Huella de Carbono de mis compañeros</p>
        </div> */}
        <div className='charts-container1'>
          <GraphicAreaspline />
        </div>
        <div className='titles-foot2'>
          Compara tu huella con la de tus demás compañeros, juntos crearemos un
          mundo cada día más sostenible.
        </div>
        <div className='charts-container'>
          <GraphicBubbleB />
        </div>
      </div>
    </div>
  );
};

export default Company;

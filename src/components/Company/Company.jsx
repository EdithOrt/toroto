import React from "react";
import banner from "../../assets/img/company/transition-03.png";

const Company = () => {
  return (
    <div className='company-container'>
      <div>
        <p>
          La meta personal que tu empresa y Toroto tienen para este año,
          consiste en disminuir los desplazamientos en avión.
        </p>
        <img src={banner} alt='' />
      </div>
      <div>
        <div>
          <div>Circulo</div>
          <p>Metas de la empresa</p>
        </div>
        <div>
          <div>Circulo</div>
          <p>Huella de Carbono de mis compañeros</p>
        </div>
        <div>
          Compara tu huella con la de tus demás compañeros, juntos crearemos un
          mundo cada día más sostenible.
        </div>
        <div>grafica año</div>
        <div>grafica burbujas</div>
      </div>
    </div>
  );
};

export default Company;

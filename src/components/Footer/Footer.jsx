import React from "react";
import logo from "../../assets/img/footer/logo.png";
import instagram from "../../assets/img/footer/icon_instagram.png";
import linkedin from "../../assets/img/footer/icon_linkedin.png";
import twitter from "../../assets/img/footer/icon_twitter.png";
import facebook from "../../assets/img/footer/icon_facebook.png";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div>
        <p className='footer-title'>
          <strong>UN FUTURO</strong> PARA TODOS
        </p>
      </div>
      <div className='social-container'>
        <div>
          <img src={logo} alt='' />
          <p>2020 Todos los derechos reservados ©</p>
        </div>
        <div className='img-social'>
          <div>
            <img className='img-social-icons' src={instagram} alt='' />
          </div>
          <div>
            <img className='img-social-icons' src={linkedin} alt='' />
          </div>
          <div>
            <img className='img-social-icons' src={twitter} alt='' />
          </div>
          <div>
            <img className='img-social-icons' src={facebook} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

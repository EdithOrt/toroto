import React from "react";
import logo from "../../assets/img/logo.png";
import menuIcon from "../../assets/img/my-footprint/icon_burguer.png";

const Navbar = () => {
  return (
    <div className="nav-blue">
      <div className="container-hamb-log">
        <div className='menuicon-container'>
          <button>
            <img src={menuIcon} alt='' />
          </button>
        </div>
        <div className='logo-container'>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className="container-es-en">
        <p>EN/ES</p>
      </div>
    </div>
  );
};

export default Navbar;

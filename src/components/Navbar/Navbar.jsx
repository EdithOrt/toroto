import React from "react";
import logo from "../../assets/img/logo.png";
import menuIcon from "../../assets/img/my-footprint/icon_burguer.png";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='menuIcon-container'>
        <img src={menuIcon} alt='' />
      </div>
      <div className='logo-container'>
        <img src={logo} alt='' />
        <p>EN/ES</p>
      </div>
    </div>
  );
};

export default Navbar;

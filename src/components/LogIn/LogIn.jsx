import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const LogIn = () =>{
    return (
        <div className="login-container">
            <div className="welcome-text">
                <p>¡Hola!</p>
            </div>
            <form>
                <div className="container-inputs">
                    <div>
                        <p>EMAIL</p>
                        <input className="placeholder" placeholder="your email" type="email"></input>
                    </div>
                    <div>
                        <p>PASSWORD</p>
                        <input className="placeholder" placeholder="password" type="password"></input>
                    </div>
                </div>
                <div className="container-button-login">
                   <Link to="/mi-huella" className="button-login">
                       LOG IN
                   </Link>
                </div>
                <div className="container-logo">
                    <img src={logo} />
                </div>
            </form>
        </div>
    ) 
}

export default LogIn
import React from 'react';
import cart from './cart.svg';
import './Navbar.css';

const Navbar = () =>{

    return(
        <div id="navbar">
            <span>
                <div>Inicio</div>
                <div>Productos</div>
            </span>
            <span>
                <img src={cart}/>
                <div id=""></div>
            </span>
           
        </div>
    )
}

export default Navbar;
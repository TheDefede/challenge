import React from 'react';
import cart from './cart.svg';
import './Navbar.css';



const Navbar = () =>{

    return(
        <div id="navbar">
            <span id="botones">
                <div>Inicio</div>
                <div>Productos</div>
            </span>
            <span id="carrito">
                <img src={cart} alt="carrito de compras"/>
                <span id="contador">
                    0
                </span>
            </span>
           
        </div>
    )
}

export default Navbar;
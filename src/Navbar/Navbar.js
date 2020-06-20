import React from 'react';
import cart from './cart.svg';
import './Navbar.css';
import menu from './menu.svg'



const Navbar = () =>{

    return(
        <div id="navbar">
            <span>
                <div  className="menu"><img src={menu}/></div>
                <div className="botones">Productos</div>
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
import React from 'react';
import "./FloatContainer.css";
import "./ProductContainer.js";

const FloatContainer = ({nombre, imagen, alt, descripcion, precio}) =>{

    return(
        <div id="float-container">
            <img src={imagen} alt={alt}/>
            <div>
                <p className="precio">${precio}</p>
                <span>
                    <p className="titulo">{nombre}</p>
                    <p className="descripcion">{descripcion}</p>
                </span>
                
                <button>Comprar</button>
            </div>
            
            
        </div>
    )
}


export default FloatContainer;
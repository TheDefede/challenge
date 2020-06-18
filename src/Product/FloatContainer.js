import React from 'react';

const FloatContainer = ({nombre, imagen, alt, descripcion, precio}) =>{

    return(
        <div id="float-container">
            <img src={imagen} alt={alt}/>
            <p className="precio">${precio}</p>
            <p className="titulo">{nombre}</p>
            <p className="descripcion">{descripcion}</p>
            <button>Comprar</button>
            
        </div>
    )
}


export default FloatContainer;
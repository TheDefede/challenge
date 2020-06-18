import React from 'react';

const FloatContainer = ({nombre, imagen, alt, descripcion, precio}) =>{

    return(
        <div id="float-container">
            <img src={imagen} alt={alt}/>
            <p className="precio">${precio}</p>
            <button>Comprar</button>
            <p className="titulo">{nombre}</p>
            <p className="descripcion">{descripcion}</p>
            
        </div>
    )
}


export default FloatContainer;
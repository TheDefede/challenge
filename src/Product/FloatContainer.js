import React from 'react';
import "./FloatContainer.css";
import cruz from './cruz.svg';

const handleClick = () =>{
    document.getElementById('cobertor').style.background = 'rgba(0,0,0,0)';
    document.getElementById('cobertor').style.zIndex= '-1';        
    document.getElementById('float-container').style.opacity = '0';        
    document.getElementById('float-container').style.zIndex = '-1';

}

const FloatContainer = ({nombre, imagen, alt, descripcion, precio}) =>{

    return(
        <div id="float-container">
            <div className="cerrar">
                <img src={cruz} alt="cruz"  onClick={handleClick}/>
            </div>
            <img src={imagen} alt={alt}/>
            <div id="producto">
                <span className="texto">
                    <p className="titulo">{nombre}</p>
                    <p className="descripcion">{descripcion}</p>
                </span>
                <p className="precio">${precio}</p>
                
                <span id="botones-compra">
                    <button className="comprar">Comprar</button>
                    <button className="agregar">Agregar</button>
                </span>                
            </div>
            
            
        </div>
    )
}


export default FloatContainer;
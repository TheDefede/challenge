import React, { useState } from 'react'
import "./container.css";

const ProductContainer = ({nombre, alt, imagen, descripcion, precio}) =>{

    return(
        <div id="product-container">
            <img src={imagen} alt={alt}/>
            <div>
                <p className="titulo">{nombre}</p>{/* {
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>
                <button>Comprar</button>} */}
            </div>
        </div>
    )
}


export default ProductContainer;
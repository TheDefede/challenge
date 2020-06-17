import React, { useState } from 'react'
import "./container.css";

const ProductContainer = ({nombre, alt, imagen}) =>{

    return(
        <div id="product-container">
            <img src={imagen} alt={alt}/>
            <div>
                <p>{nombre}</p>
            </div>
        </div>
    )
}


export default ProductContainer;
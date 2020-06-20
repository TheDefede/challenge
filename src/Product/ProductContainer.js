import React from 'react'
import "./container.css";

const handleClick = () =>{
    document.getElementById('cobertor').style.background = 'rgba(0,0,0,0.5)';
    document.getElementById('cobertor').style.zIndex= '2';
    document.getElementById('float-container').style.opacity = '1';
    document.getElementById('float-container').style.zIndex = '3';
}

const ProductContainer = ({nombre, alt, imagen}) =>{

    
    return(
        <div onClick={handleClick} id="product-container">
            <img src={imagen} alt={alt}/>
            <div>
                <p className="titulo">{nombre}</p>
            </div>
        </div>
    )
}


export default ProductContainer;
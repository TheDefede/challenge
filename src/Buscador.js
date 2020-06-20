import React from 'react';
import search from './search.svg'

const handleClick = () => {
    document.getElementById('buscador-container').style.boxShadow= "1px 1px 10px #4cc1de";
}

const Buscador = () => {

    return(        
        <div id="buscador-container" onClick={handleClick}>
            <img src={search} />
            <input id="buscador" placeholder='Buscar un producto' type="text" />
        </div>           
    )
}


export default Buscador;


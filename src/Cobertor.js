import React from 'react';

const handleClick = () =>{
    document.getElementById('cobertor').style.background = 'rgba(0,0,0,0)';
    document.getElementById('cobertor').style.zIndex= '-1';        
    document.getElementById('float-container').style.opacity = '0';        
    document.getElementById('float-container').style.zIndex = '-1';

}

const Cobertor = () =>{
    
    return(
        <div onClick={handleClick} id="cobertor"></div>
    )
}

export default Cobertor;
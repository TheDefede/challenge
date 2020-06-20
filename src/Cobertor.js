import React from 'react';
import FloatContainer from './Product/FloatContainer';

const faker = window.faker;
const img = () => {
    const e = Math.floor(Math.random() * (300 - 200)) + 200;
    return `https://picsum.photos/${e}`;
};


const Cobertor = () =>{
    
    return(
        <div id="cobertor">
            <FloatContainer nombre={faker.commerce.productName()} imagen={img()} descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>
        </div>
    )
}

export default Cobertor;
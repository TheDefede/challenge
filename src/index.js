import React from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './Product/ProductContainer';
import Navbar from './Navbar/Navbar'
import Cobertor from './Cobertor'
import FloatContainer from './Product/FloatContainer';


const faker = window.faker;


const App = () => {
    const producto = () => faker.commerce.productName();
    return(
        <>
            <Cobertor />
            <Navbar />
            <FloatContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200"/>
            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200"/>
            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200"/>
            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200"/>

          
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
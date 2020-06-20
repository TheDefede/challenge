import React from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './Product/ProductContainer';
import Navbar from './Navbar/Navbar'
import Cobertor from './Cobertor'
import FloatContainer from './Product/FloatContainer';
import './index.css'


const faker = window.faker;

const img = () => {
    const e = Math.floor(Math.random() * (300 - 200)) + 200;
    return `https://picsum.photos/${e}`;
};


const App = () => {
    const producto = () => faker.commerce.productName();
    return(
        <>
            <Cobertor />
            <Navbar />
            <FloatContainer nombre={faker.commerce.productName()} imagen={img()} descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
            <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
            <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
            <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
            <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
            <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
            <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
            <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
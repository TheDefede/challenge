import React from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './Product/ProductContainer';
import Navbar from './Navbar/Navbar'
import Cobertor from './Cobertor'
import './index.css'
import Buscador from './Buscador'


const faker = window.faker;

const img = () => {
    const e = Math.floor(Math.random() * (300 - 200)) + 200;
    return `https://picsum.photos/${e}`;
};


const App = () => {
    
    return(
        <>
            <Cobertor />
            <Navbar />     
            <Buscador />       
            <div id="productos">
                <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
                <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
                <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
                <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
                <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
                <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
                <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
                <ProductContainer nombre={faker.commerce.productName()} imagen={img()} alt={faker.commerce.productAdjective()}/>
            </div>            
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
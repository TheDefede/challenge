import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './Product/ProductContainer';

const faker = window.faker;


const App = () => {
    const producto = () => faker.commerce.productName();
    return(
        <>
            <ProductContainer  nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>

            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
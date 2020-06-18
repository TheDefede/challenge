import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './Product/ProductContainer';
import Navbar from './Navbar/Navbar'

const faker = window.faker;


const App = () => {
    const producto = () => faker.commerce.productName();
    return(
        <>
            <Navbar />
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
                
            <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200" descripcion={faker.lorem.sentence()} precio={faker.commerce.price()}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './Product/ProductContainer';
import faker from 'faker';

const App = () => {
    const producto = () => faker.commerce.productName();
    return(
        <>
        <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200"/>
        <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200"/>
        <ProductContainer nombre={faker.commerce.productName()} imagen="https://picsum.photos/200"/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
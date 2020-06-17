import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './Product/ProductContainer';


const App = () => {

    return(
        <>
        <ProductContainer nombre="Harina" imagen="https://picsum.photos/200"/>
        <ProductContainer nombre="Tomate" imagen="https://picsum.photos/200"/>
        <ProductContainer nombre="Fede" imagen="https://picsum.photos/200"/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
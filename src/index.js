import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './Product/ProductContainer';

const App = () => {

    return(
        <ProductContainer />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
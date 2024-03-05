import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './src/components/Header';

const App = () => {
    return (
        <Header/>
    )
}


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App/>);
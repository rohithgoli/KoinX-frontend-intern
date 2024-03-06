import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './src/components/Header';
import Body from './src/components/Body/Body';

const App = () => {
    return (
        <>
        <Header/>
        <Body/>
        </>
    )
}


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App/>);
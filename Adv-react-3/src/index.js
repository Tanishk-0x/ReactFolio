import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/slices/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

    // Wrapping App component in the Provider 
    // React code aur Redux code ko link krne ke liye wrap krna padega 

    //^ ----  store ko pass krna pdega -------

    <Provider store={store} >

        <App />

    </Provider>


);


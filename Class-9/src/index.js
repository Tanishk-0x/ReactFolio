import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
    //*---- routes (path) ko link krta he browser se ---

    <BrowserRouter>

        <App />
        {/* <Toaster/> */}
        <ToastContainer/>

    </BrowserRouter>
  
);


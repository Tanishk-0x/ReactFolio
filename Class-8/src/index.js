import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <div>
                <ToastContainer/>
                <App />
        </div>





);

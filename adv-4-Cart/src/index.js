import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/Slices/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
<BrowserRouter>
      <Provider store={store}>
            <App />
      </Provider>
</BrowserRouter>
 





);

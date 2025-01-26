import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';  // Si no tienes este archivo, puedes eliminar esta línea
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Esto debe coincidir con <div id="root"></div> en index.html
);

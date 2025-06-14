import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/_global.scss';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

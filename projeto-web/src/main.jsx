import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from './routes';
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router = {router} />
  </React.StrictMode>
);
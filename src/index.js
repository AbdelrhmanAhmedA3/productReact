import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from 'react-router-dom';
// file css
  import 'bootstrap/dist/css/bootstrap.min.css'
  import '@fortawesome/fontawesome-free/css/all.min.css'
// file css

// file js
import 'bootstrap/dist/js/bootstrap.bundle'
import Login from './components/login/Login';
import Product from './components/product/Product';
import App from './App';

// file js

const router = createHashRouter ([
  
  {path:'', element: <App /> , children:[
    {path:'', element: <Login />},
    {path:'login', element: <Login />},
    {path:'product', element: <Product />},
    {path:'*', element: <Login />},
  ]},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

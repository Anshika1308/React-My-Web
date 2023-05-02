import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Menu/App.jsx';
import  {BrowserRouter, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
    <>
<BrowserRouter>
   <App />
</BrowserRouter>
</>,
document.getElementById('root'));



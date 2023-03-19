import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

import './App.css';


// components

import MenuBar from "./components/MenuBar";
import Product from './components/Product';


function App() {
  return (
    <div className="main-apps">
      <MenuBar/>
      <Product/>

    </div>
  );
}

export default App;

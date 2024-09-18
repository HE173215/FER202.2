// App.js
import React from 'react';
import Navbar from './navbar';
import Carousel from './Carousel';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
  <div>
    <Navbar />
    <Carousel />
    <ProductList />
  </div>
);

export default App;

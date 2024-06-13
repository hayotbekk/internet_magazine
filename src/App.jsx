import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Carts from './components/Carts';
import Gallery from './components/Gallery';

const App = () => {
  const [cart, setCart] = useState([]);

  const AddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className='container mx-auto flex flex-wrap items-center justify-between py-20'>
      <Header length={cart.length} />

      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path='/cart' element={<Carts cart={cart} />} />
        <Route path='/products' element={<Products AddToCart={AddToCart} />} />
      </Routes>
    </div>
  );
};

export default App;

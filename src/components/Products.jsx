import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ AddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "https://dummyjson.com/products";
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap gap-5 justify-center items-center'>
      {products.map((item) => (
        <Product key={item.id} item={item} AddToCart={AddToCart} />
      ))}
    </div>
  );
};

export default Products;

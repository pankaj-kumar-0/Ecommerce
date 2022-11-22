import React from 'react';
import Category from '../../../Components/Category/Category';
import Product from '../../../Components/Product/Product';
import './Products.css';

const Products = () => {
  return (
    <div className='products_page'>
      <Category/>
      <h1 className='heading'> All Products</h1>
      <div className="products_section">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default Products;

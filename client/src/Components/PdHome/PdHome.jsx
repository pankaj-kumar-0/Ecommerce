import React from 'react';
import Product from '../Product/Product';
import './PdHome.css';

const PdHome = () => {
  return (
    <div className='pd_home'>
        <h2 className='heading'>Featured Products</h2>
      <div className="pd_home_container">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>

      </div>
    </div>
  )
}

export default PdHome

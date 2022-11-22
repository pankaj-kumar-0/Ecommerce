import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav' >
        <Link to='/'  className='link_item' >
            Home
        </Link>      
        <Link to='/products' className='link_item' >
            Products
        </Link>      
        <Link to='/cart' className='link_item' >
            About
        </Link>      
        <Link to='/cart' className='link_item' >
            Contact
        </Link>      
        <Link to='/admin' className='link_item' >
            Account
        </Link>      
    </div>
  )
}

export default Nav;
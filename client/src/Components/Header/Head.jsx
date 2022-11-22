import React from "react";
import logo from "../../Asset/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass ,faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div className="head">
      <div className="logo">
        <Link to={'/'} ><img src={logo} alt="logo" /></Link>
        
      </div>

      <div className="search_box">
        <FontAwesomeIcon icon={faMagnifyingGlass} id="search" />
        <input type="text" placeholder="Search here..." />
        <span>Search</span>
      </div>

      <div className="register_box">
        <Link to='register' id='register'>Register</Link>
        <Link to='/login' id='register'>Login</Link>
        <Link to='/products/1' id='register'>pd</Link>
        <Link to='/cart' id="cart"><FontAwesomeIcon icon={faBagShopping} /></Link>
        
      </div>
    </div>
  );
};

export default Head;

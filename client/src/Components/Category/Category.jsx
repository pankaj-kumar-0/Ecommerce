import React from 'react';
import './Category.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faDesktop, faHeadphones, faKeyboard, faLaptop , faMobile, faMouse, faWatchSmart, faTablet, faWallet } from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  return (
    <div className='category' >
      <h1>Category</h1>
      <ul>
        <li><FontAwesomeIcon className='cat_icon' icon={faLaptop} /> Laptop </li>
        <li><FontAwesomeIcon className='cat_icon' icon={faTablet} /> Tablet </li>
        <li><FontAwesomeIcon className='cat_icon' icon={faMouse} /> Mouse </li>
        <li><FontAwesomeIcon className='cat_icon' icon={faHeadphones} /> Headphone </li>
        <li><FontAwesomeIcon className='cat_icon' icon={faKeyboard} /> Keyboard </li>
        <li><FontAwesomeIcon className='cat_icon' icon={faMobile} /> Phone </li>
        <li><FontAwesomeIcon className='cat_icon' icon={faDesktop} /> Desktop </li>
        <li><FontAwesomeIcon className='cat_icon' icon={faCamera} /> Camera </li>
        <li><FontAwesomeIcon className='cat_icon' icon={faWallet} /> Watch </li>
      </ul>
    </div>
  )
}

export default Category

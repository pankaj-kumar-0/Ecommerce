import React from 'react';
import './Product.css';
import pd from '../../Asset/Images/pd.png'
import { Link } from 'react-router-dom';
import ReactStars from 'react-star-rating-component';
const options={
    name:"pankaj",
    edit :false,
    color: "#4c4c4c",
    activeColor:"#4c4c4c",
    value:2.5,
    isHalf:true
}


const Product = () => {
  return (
    <Link to={'/products'} className='product_box'>
        <div className="row1">
            <img src={pd} alt="product loading" />
        </div>
        <div className="row2">
            <h2>Vivo android one</h2>
            <div className="rating">
                <ReactStars {...options} /> <span>10 Reviews</span>
            </div>
            <div className="price">$155.00</div>
        </div>
    </Link>
  )
}

export default Product

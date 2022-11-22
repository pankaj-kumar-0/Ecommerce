import React from 'react';
import './Review.css';

import ReactStars from 'react-star-rating-component';
const options={
    name:"pankaj",
    edit :false,
    color: "#4c4c4c",
    activeColor:"#4c4c4c",
    value:6,
    isHalf:true
}


const Review = () => {
  return (
    <div className='review'>
        <div className="name">
            <h4>Pankaj kumar sharma</h4>
            <h4>12/02/2022</h4>
        </div>
      <ReactStars {...options} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ullam fugit culpa quod deserunt dicta? Voluptatem cumque dicta inventore quidem.
      </p>
    </div>
  )
}

export default Review

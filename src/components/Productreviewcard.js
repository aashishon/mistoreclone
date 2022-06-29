import React from 'react'
import "../styles/Productreviewcard.css"

const Productreviewcard = ({image,name,price,index,review}) => {
  return (
    <div className="Productreview">
        <img src={image} alt={`${index} review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
    )
}

export default Productreviewcard
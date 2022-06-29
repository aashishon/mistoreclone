import React from 'react'
import "../styles/navcard.css"


const Navcard = ({name,price,image,index}) => {
  return (
    <div className='card'>
        <img src={image} alt={`{index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default Navcard
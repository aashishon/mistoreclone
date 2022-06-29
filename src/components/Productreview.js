import React from 'react'
import Productreviewcard from "./Productreviewcard.js"
import "../styles/productreview.css"

const Productreview = ({productreview}) => {
  return (
    <div className="review">
        {productreview.map((item,index)=>{
            return(
                    <Productreviewcard review = {item.review} name = {item.name} price = {item.price} index = {index} key = {item.image}  image={item.image} />
            )
                })}
    </div>
  )
}

export default Productreview
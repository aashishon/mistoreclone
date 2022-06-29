import React from 'react'
import "../styles/Starproduct.css"

const Starproduct = ({starproduct}) => {
  return (
    <div className='starproduct'>
        <div>
            <a href={starproduct[0].url}>
                <img src={starproduct[0].image} alt="1st Product" />
            </a>
        </div>
        <div>
        <a href={starproduct[1].url}>
                <img src={starproduct[1].image} alt="2nd Product" />
        </a>
        <a href={starproduct[2].url}>
                <img src={starproduct[2].image} alt="3rd Product" />
        </a>
        <a href={starproduct[3].url}>
                <img src={starproduct[3].image} alt="4th Product" />
        </a>
        </div>
    </div>
  )
}

export default Starproduct
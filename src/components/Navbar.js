import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';
import data from '../data/data.json';


const {logo} = data ; 


const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M39.8 41.95 26.65 28.8Q25.15 30.1 23.15 30.825Q21.15 31.55 18.9 31.55Q13.5 31.55 9.75 27.8Q6 24.05 6 18.75Q6 13.45 9.75 9.7Q13.5 5.95 18.85 5.95Q24.15 5.95 27.875 9.7Q31.6 13.45 31.6 18.75Q31.6 20.9 30.9 22.9Q30.2 24.9 28.8 26.65L42 39.75ZM18.85 28.55Q22.9 28.55 25.75 25.675Q28.6 22.8 28.6 18.75Q28.6 14.7 25.75 11.825Q22.9 8.95 18.85 8.95Q14.75 8.95 11.875 11.825Q9 14.7 9 18.75Q9 22.8 11.875 25.675Q14.75 28.55 18.85 28.55Z"/></svg>
const Navbar = () => {
  return (
    <div className="mainnavbar">
        <div className="logo">
        {/* link ra anchor tag same nai ho tara link tag use garyo vane page reload hudaina teti ho */}
            <a href='/'>
                    <img id='logoid' src= {logo} alt="" />
            </a>
        </div>
            <a className='navlinks' href="/MiPhones">Xiomi Phones</a>
            <a className='navlinks' href="/RedmiPhones">Redmi Phones</a>
            <a className='navlinks' href="/TV">TV</a>
            <a className='navlinks' href="/Laptops">Laptops and Tablets</a>
            <a className='navlinks' href="/Fitness">Fitness</a>
            <a className='navlinks' href="/Home">Home</a>
            <a className='navlinks' href="/Audio">Audio</a>
            <div className="searchbox" >
                <input type="text" id='searchboxid' name='search' placeholder='search an item' />
                <div>{searchIcon}</div>
            </div>

    </div>
  )
}

export default Navbar
import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Hotmenu.css"

const Hotmenu = () => {
  return (
    <div className='hotmenu'>
        
        <Link to = "/music" className="link" >Music Store</Link>
        <Link to = "/smartdevices" className="link" >Smart Devices</Link>
        <Link to = "/home" className="link" >Home</Link>
        <Link to = "/lifestyle" className="link" >Lifestyle</Link>
        <Link to = "/mobileaccess" className="link" >Mobile Accessories</Link>

    </div>
  )
}

export default Hotmenu